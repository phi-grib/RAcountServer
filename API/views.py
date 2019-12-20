import hashlib
import base64
import datetime
import os

from django.db import IntegrityError
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import status
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login, logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.utils import timezone
from django.db.models import F

from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser

from .models import Projects as ProjectsModel
from .models import Nodes as NodesModel
from .models import Resources as ResourcesModel
from .models import File, FileType

from .serializer import ProjectSerializer, UserSerializer, NodeSerializer
from .serializer import StatusSerializer, ResourcesSerializer

from .permissions import IsProjectOwner


from django.utils.decorators import available_attrs
from functools import wraps


@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class ManageProject(RetrieveUpdateDestroyAPIView):
    """
    Add Project
    """
    queryset = ProjectsModel.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]



@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class ProjectStatus(ListAPIView):
    """
    Add Project
    """
    queryset = NodesModel.objects.values('node_seq','executed')
    serializer_class = StatusSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]

    def get_queryset(self):
        return self.queryset.filter(**{self.lookup_field:self.kwargs[self.lookup_url_kwarg]})

class ListProjects(ListAPIView):
    serializer_class = ProjectSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        projects = ProjectsModel.objects.filter(owner=self.request.user.id)
        return projects
 

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class ManageNodes(GenericAPIView,UpdateModelMixin):
    serializer_class = NodeSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    
    def get_queryset(self):
        return NodesModel.objects.filter(project=self.kwargs['project'], node_seq=self.kwargs['node'])

    def get(self, request, project, node):

        newdict = {}

        node_info = NodesModel.objects.get(project=project,node_seq=node)
        newdict.update(NodeSerializer(node_info, many=False).data)

        resources = ResourcesModel.objects.filter(node=node)
        resources = ResourcesSerializer(resources, many=True).data

        newdict['resources'] = resources

        qhistory = NodesModel.objects.filter(project=project, node_seq__lt=node).order_by('node_seq')
        qhistory = qhistory.annotate(content=F('outputs'),comment=F('outputs_comments')).values('name','content','comment','inputs_comments','node_seq')
        history = list(qhistory)
        for i in range(0,len(history)):
            histi = dict(history[i])
            if history[i]['node_seq'] == 1:
                histi['content'] = histi['inputs_comments']
            histi.pop('inputs_comments', None)
            histi.pop('node_seq', None)
            history[i] = histi

        newdict['inputs'] = history
        newdict['CSRF_TOKEN'] = get_token(request)
        return Response(newdict, 200)

    def post(self, request, project, node):
        self.partial_update(request)
        self.get_queryset().update(executed=True)
        return JsonResponse({'Ok':'ok'}, status=200)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class User(APIView):
    # If the user is already logged in, it responds a JSON with user data and the CSRF token.
    # Otherwise, only responds a JSON with the CSRF token for the POST method.
    def get(self,request,logout):
        respdata = {}
        if request.user.is_authenticated:
            respdata = UserSerializer(request.user, many=False).data
        respdata['CSRF_TOKEN'] = get_token(request) 
        return JsonResponse(respdata, status=200)

    def post(self,request,logout):
        if logout == "logout":
            if request.user.is_authenticated:
                auth_logout(request)
                request.session.pop('rememberme', default=None)
                return JsonResponse({'Ok':'ok'}, status=200)
        else:
            
            if 'username' in request.POST or 'password' in request.POST:
                username = request.POST.get('username')
                password = request.POST.get('password')

                user = authenticate(username=username, password=password)
                if user is not None:
                    login(request, user)
            
            if request.user.is_authenticated:
                if 'rememberme' in request.POST:
                    if int(request.POST.get('rememberme')):
                        request.session['rememberme'] = True
                        request.session.set_expiry(settings.SESSION_COOKIE_AGE)
                    else:
                        request.session['rememberme'] = False
                        request.session.set_expiry(0)
                else:
                    request.session.set_expiry(0)
                return Response(UserSerializer(request.user, many=False).data, 200)

        response = HttpResponse('401 Unauthorized')
        response.status_code = 401
        response.reason_phrase='Unauthorized'
        return response


class Resources(ListAPIView):
    queryset = ResourcesModel.objects.all()
    serializer_class = ResourcesSerializer
    lookup_field = 'node'
    lookup_url_kwarg = 'node'

    def get_queryset(self):
        return self.queryset.filter(**{self.lookup_field:self.kwargs[self.lookup_url_kwarg]})

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class FileUploadView(APIView):
    parser_classes = [MultiPartParser]
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]

    # save_uploadedfile function from https://github.com/GPCRmd/GPCRmd
    # Copyright (c) 2017 Ismael Rodríguez-Espigares et al., Jana Selent,
    # UPF and IMIM
    # Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    def _save_uploadedfile(self,filepath,uploadedfile):
        with open(filepath,'wb') as f:
            if uploadedfile.multiple_chunks:
                for chunk in uploadedfile.chunks():
                    f.write(chunk)
            else:
                f.write(uploadedfile.read())
            f.close()

    def get(self, request, project, node, part):
        respdata = {'msg': 'OK'}
        respdata['CSRF_TOKEN'] = get_token(request) 
        return JsonResponse(respdata, status=200)

    def post(self, request, project, node, part, format=None):
        filekey = 'file'
        if filekey not in request.FILES:
            return Response({"detail","%s file field is missing." % (filekey)},status=400)
        print(request.FILES.getlist(filekey))
        file_list = request.FILES.getlist(filekey)
        if len(file_list) > 1:
            return Response({"detail","Only one file in %s is acceptable." % (filekey)},status=400)
        elif len(file_list) == 0:
            return Response({"detail","%s has no files." % (filekey)},status=400)

        uploadedfile = file_list[0]
        filename = uploadedfile.name
        rootname,fileext = os.path.splitext(uploadedfile.name)
        timestamp = timezone.now()
        date = timestamp.date()
        micro = timestamp.microsecond

        # create a MD5 hash of filename+(micosecond current time fraction) and encode it to base32 removing
        # '=' padding for file names compatible with Windows.
        md5 = base64.b32encode(hashlib.md5((filename+str(micro)).encode()).digest()).decode().strip('=')
        print(md5)
        newfilename = '_'.join((date.strftime('%d%m%Y'),str(project),str(node),str(part),str(md5)))
        folderpath = os.path.join('projects',str(project),'node_'+str(node))
        
        fullfolderpath = os.path.join(settings.MEDIA_ROOT,settings.MEDIA_API_PREFIX,folderpath)
        os.makedirs(fullfolderpath,mode=0o770,exist_ok=True)

        
        # TODO optimize with filter and anotate
        node_obj = NodesModel.objects.get(project=project,node_seq=node)

        # TODO guess file type by extension
        # TODO check if file type is accepted
        file_type = 1
        
        file_type_obj = FileType.objects.get(pk=file_type)
        colindex = 0
        while 1:
            try:
                filepath = os.path.join(fullfolderpath,newfilename+fileext)
                self._save_uploadedfile(filepath,uploadedfile)
                url = os.path.join(settings.MEDIA_URL,settings.MEDIA_API_PREFIX,folderpath,newfilename+fileext)
                new_obj, created = File.objects.get_or_create(user_filename=filename,node=node_obj,part=part,
                    defaults= {'filename':newfilename+fileext,'file_type':file_type_obj,
                    'filepath':filepath,'url':url})
            except IntegrityError as e:
                obj = File.objects.get(user_filename=filename,node=node_obj,part=part)
                if obj.filename == newfilename+fileext:
                    newfilename += '_'+str(colindex)
                    colindex += 1
            except Exception:
                raise
            else:
                break
        if not created:
            return Response(data={'detail':'File "%s" already exists.' % (filename),'URL':new_obj.url},status=400)
        return Response(data={'msg':'OK','URL':new_obj.url},status=200)


