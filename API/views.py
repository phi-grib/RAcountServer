import hashlib
import base64
import datetime
import os
import time

from .utils import order_queryset_list_by_values_list

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
from django.db.models import F, Max
from django.db import transaction
from django.db import OperationalError
from django.http import Http404

from rest_framework.decorators import api_view
from rest_framework import serializers, status

from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, ListCreateAPIView
from rest_framework.mixins import UpdateModelMixin, CreateModelMixin, RetrieveModelMixin, ListModelMixin
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework.exceptions import PermissionDenied, server_error

from .models import Projects as ProjectsModel, ProblemDescription
from .models import Nodes as NodesModel
from .models import Resources as ResourcesModel
from .models import File, FileType
from .models import Compound

from .serializer import ProjectSerializer, UserSerializer, NodeSerializer, FullNodeSerializer
from .serializer import StatusSerializer, ResourcesSerializer, ProblemDescriptionSerializer, ProblemDescriptionSerializerInput
from .serializer import CompoundSerializer

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

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
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

        node_info = NodesModel.objects.annotate(name=F('node_seq__name'),description=F('node_seq__description'), history_node_list=F('node_seq__history_node_list')).get(project=project,node_seq=node)
        newdict.update(FullNodeSerializer(node_info, many=False).data)

        resources = ResourcesModel.objects.filter(node=node)
        resources = ResourcesSerializer(resources, many=True).data

        newdict['resources'] = resources
        
        qhistory = NodesModel.objects.filter(project=project)
        qhistory = qhistory.annotate(content=F('outputs'),comment=F('outputs_comments'), name=F('node_seq__name')).values('name','content','comment','inputs_comments','node_seq')

        if node_info.history_node_list is None:
            qhistory = qhistory.filter(node_seq__lt=node).order_by('node_seq')
            history = list(qhistory)
        elif node_info.history_node_list == '':
            history = []
        else:
            history_node_list_as_list = list(map(int,node_info.history_node_list.split(',')))
            qhistory = qhistory.filter(node_seq__in=history_node_list_as_list)
            history = order_queryset_list_by_values_list(qhistory,'node_seq', history_node_list_as_list)
        
        for i in range(0,len(history)):
            histi = dict(history[i])
            content = histi['content']
            #if content != "":
            #    content = "<b>Output:</b><br>"+histi['content']
            if history[i]['node_seq'] == 1:
                try:
                    qproblem = ProblemDescription.objects.get(project=project)
                    #histi['content'] = "<b>Problem description:</b><br>"+qproblem.description+content
                    histi['content'] = qproblem.description
                except ProblemDescription.DoesNotExist:
                    histi['content'] = content
            #else:
            #    if histi['inputs_comments'] != "":
            #        histi['content'] = "<b>Input:</b><br>"+histi['inputs_comments']+content
            #    else:
            #        histi['content'] = content
            histi.pop('inputs_comments', None)
            histi.pop('node_seq', None)
            history[i] = histi

        newdict['inputs'] = history
        newdict['CSRF_TOKEN'] = get_token(request)
        return Response(newdict, status.HTTP_200_OK)

    def post(self, request, project, node):

        response = self.partial_update(request)
        if response.status_code == status.HTTP_200_OK:
            self.get_queryset().update(executed=True)
        return JsonResponse({'Ok':'ok'}, status=status.HTTP_200_OK)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class ProblemDescriptionView(GenericAPIView,CreateModelMixin,RetrieveModelMixin,UpdateModelMixin):
    serializer_class = ProblemDescriptionSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    queryset = ProblemDescription.objects.all()
    
    def get(self, request, project):
        try:
            response = self.retrieve(request)
        except Http404:
            return Response({'description':'Not Found: '+request.path,'CSRF_TOKEN':get_token(request)}, status=status.HTTP_404_NOT_FOUND)
        response.data['CSRF_TOKEN'] = get_token(request)
        return response

    def post(self, request, project):
        data = dict(request.data)
        for key in data:
            data[key] = data[key][0]
        data['project'] = project
        serializer = ProblemDescriptionSerializerInput(data=data)
        serializer.is_valid(raise_exception=True)
        project_obj = ProjectsModel.objects.get(pk=serializer.data['project'])
        
        success = False
        while not success:
            try:
                obj, created = self.get_queryset().update_or_create(project=project_obj, defaults={'description': serializer.data['description']})
                success = True
            except OperationalError as e:
                if str(e) == "database is locked":
                    time.sleep(5)
                else:
                    raise e

        if created:
            NodesModel.objects.filter(project=self.kwargs['project'], node_seq=1).update(executed=True)
        return Response({'Ok':'ok'}, status=status.HTTP_200_OK)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class User(APIView):
    # If the user is already logged in, it responds a JSON with user data and the CSRF token.
    # Otherwise, only responds a JSON with the CSRF token for the POST method.
    def get(self,request,logout):
        respdata = {}
        if request.user.is_authenticated:
            respdata = UserSerializer(request.user, many=False).data
        respdata['CSRF_TOKEN'] = get_token(request) 
        return JsonResponse(respdata, status=status.HTTP_200_OK)

    def post(self,request,logout):
        if logout == "logout":
            if request.user.is_authenticated:
                auth_logout(request)
                request.session.pop('rememberme', default=None)
                return JsonResponse({'Ok':'ok'}, status=status.HTTP_200_OK)
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
                return Response(UserSerializer(request.user, many=False).data, status.HTTP_200_OK)

        raise PermissionDenied


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
        return JsonResponse(respdata, status=status.HTTP_200_OK)

    def post(self, request, project, node, part, format=None):
        filekey = 'file'
        if filekey not in request.FILES:
            return Response({"detail","%s file field is missing." % (filekey)},status=status.HTTP_400_BAD_REQUEST)
        print(request.FILES.getlist(filekey))
        file_list = request.FILES.getlist(filekey)
        if len(file_list) > 1:
            return Response({"detail","Only one file in %s is acceptable." % (filekey)},status=status.HTTP_400_BAD_REQUEST)
        elif len(file_list) == 0:
            return Response({"detail","%s has no files." % (filekey)},status=status.HTTP_400_BAD_REQUEST)

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
        return Response(data={'msg':'OK','URL':new_obj.url},status=status.HTTP_200_OK)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class CSVFileToHTML(APIView):
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
        return JsonResponse(respdata, status=status.HTTP_200_OK)

    def post(self, request, project, node, part, format=None):
        filekey = 'file'
        if filekey not in request.FILES:
            return Response({"detail","%s file field is missing." % (filekey)},status=status.HTTP_400_BAD_REQUEST)
        print(request.FILES.getlist(filekey))
        file_list = request.FILES.getlist(filekey)
        if len(file_list) > 1:
            return Response({"detail","Only one file in %s is acceptable." % (filekey)},status=status.HTTP_400_BAD_REQUEST)
        elif len(file_list) == 0:
            return Response({"detail","%s has no files." % (filekey)},status=status.HTTP_400_BAD_REQUEST)

        uploadedfile = file_list[0]
        filename = uploadedfile.name
        rootname,fileext = os.path.splitext(uploadedfile.name)

        if uploadedfile.multiple_chunks:
            for chunk in uploadedfile.chunks():
                    f.write(chunk)
        else:
            f.write(uploadedfile.read())

        return Response(data={'msg':'OK','URL':new_obj.url},status=status.HTTP_200_OK)

compound_ra_type_abbreviation = {'tc' : Compound.RAType.target,
                                 'sc': Compound.RAType.source}

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class CompoundView(GenericAPIView, CreateModelMixin, ListModelMixin):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = CompoundSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    
    def get_queryset(self):
        # The first thing that get(), post(), put() and delete() methods 
        # of a GenericView from Django REST framework is to call get_queryset()
        # directly or indirectly (the first thing that get_objects() method does
        # is calling get_queryset()). This way we are we are overwriting 
        # self.kwargs before they are used.
        if self.kwargs['ra_type'] in compound_ra_type_abbreviation:
            self.kwargs['ra_type'] = compound_ra_type_abbreviation[self.kwargs['ra_type']]
        elif self.kwargs['ra_type'] in compound_ra_type_abbreviation.values():
            pass
        else:
            return server_error(self.request)
        self.kwargs['project'] = int(self.kwargs['project'])
        return Compound.objects.filter(project=int(self.kwargs['project']),
                                        ra_type=self.kwargs['ra_type'])
    
    def get(self, request, project, ra_type):
        return self.list(request)
    def post(self, request, project, ra_type):
        data = dict(request.data)
        for key in data:
            data[key] = data[key][0]
        last_int_id = self.get_queryset().aggregate(Max('int_id'))['int_id__max']
        if (last_int_id is None):
            data['int_id'] = 1
        else:
            data['int_id'] = last_int_id + 1
        data['ra_type'] = compound_ra_type_abbreviation[ra_type]
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')    
class CompoundByIntIdView(RetrieveUpdateDestroyAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = CompoundSerializer
    lookup_field = 'int_id'
    lookup_url_kwarg = 'int_id'
    
    def get_queryset(self):
        # The first thing that get(), post(), put() and delete() methods 
        # of a GenericView from Django REST framework is to call get_queryset()
        # directly or indirectly (the first thing that get_objects() method does
        # is calling get_queryset()). This way we are we are overwriting 
        # self.kwargs before they are used.
        if self.kwargs['ra_type'] in compound_ra_type_abbreviation:
            self.kwargs['ra_type'] = compound_ra_type_abbreviation[self.kwargs['ra_type']]
        elif self.kwargs['ra_type'] in compound_ra_type_abbreviation.values():
            pass
        else:
            return server_error(self.request)
        self.kwargs['project'] = int(self.kwargs['project'])
        self.kwargs['int_id'] = int(self.kwargs['int_id'])
        
        return Compound.objects.filter(project=self.kwargs['project'],
                                     ra_type=self.kwargs['ra_type'])
        
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        data = dict(request.data)
        data['ra_type'] = self.kwargs['ra_type']
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)
    
    def delete(self, request, project, ra_type, int_id):
        with transaction.atomic():
            compounds = self.get_queryset().order_by('int_id')
            compounds_l = compounds.select_for_update(nowait=True)
            compounds_l = [q for q in compounds_l if q.int_id != self.kwargs['int_id']]
            response = super().delete(request, project, ra_type, int_id)
            compounds_to_update = []
            for idx, q in enumerate(compounds_l):
                if (q.int_id != idx + 1):
                    q.int_id = idx + 1
                    compounds_to_update.append(q)
            Compound.objects.bulk_update(compounds_to_update,['int_id'])

            return response
