import hashlib
import base64
import datetime
import os
import time
import numbers

import numpy as np
import pandas as pd
import bokeh
from bokeh.models import Title
from bokeh.plotting import figure 
from bokeh.embed import components
#from bokeh.models.tools import HoverTool
from bokeh.models import HoverTool, TapTool, CustomJS, LogTicker, NumeralTickFormatter #,PanTool
from bokeh.models import BasicTicker, ColorBar, ColumnDataSource, LinearColorMapper, PrintfTickFormatter
from bokeh.transform import transform
from bokeh.embed import json_item
import xml.etree.ElementTree as ET
from copy import deepcopy


from .utils import order_queryset_list_by_values_list

from django.db import IntegrityError
from django.core.exceptions import ObjectDoesNotExist
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
from django.utils.html import escape

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

from .models import Projects as ProjectsModel, ProblemDescription, InitialRAxHypothesis
from .models import Nodes as NodesModel
from .models import Resources as ResourcesModel
from .models import File, FileType
from .models import Compound, DataMatrix, DataMatrixFields, UnitType, Unit, CompoundCASRN, TCompound

from .serializer import ProjectSerializer, UserSerializer, NodeSerializer, FullNodeSerializer
from .serializer import StatusSerializer, ResourcesSerializer, ProblemDescriptionSerializer, InitialRAxHypothesisSerializer, SlugCompoundCASRNSSerializerNoValidation
from .serializer import CompoundSerializer, DataMatrixSerializer, UnitTypeSerializer, UnitSerializer, CompoundCASRNSerializer, SlugCompoundCASRNSSerializer
from .serializer import DataMatrixFieldsSerializer, DataMatrixFieldsReadSerializer, ChemblDataMatrixSerializer, CompoundDataMatrixSerializer, CompoundSerializer, TCompoundSerializer

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
            # if history[i]['node_seq'] == 1:
            #     try:
            #         qproblem = ProblemDescription.objects.get(project=project)
            #         #histi['content'] = "<b>Problem description:</b><br>"+qproblem.description+content
            #         histi['content'] = qproblem.description
            #     except ProblemDescription.DoesNotExist:
            #         histi['content'] = content
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
        
        # Perform the lookup filtering.
        lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field

        assert lookup_url_kwarg in self.kwargs, (
            'Expected view %s to be called with a URL keyword argument '
            'named "%s". Fix your URL conf, or set the `.lookup_field` '
            'attribute on the view correctly.' %
            (self.__class__.__name__, lookup_url_kwarg)
        )
        filter_kwargs = {self.lookup_field: self.kwargs[lookup_url_kwarg]}
        try:
            instance = self.get_queryset().get(**filter_kwargs)
            serializer = self.get_serializer(instance, data=data, partial=True)
        except ObjectDoesNotExist as e:
            serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        del data
        data = dict(serializer.validated_data)
        project_obj = data.pop('project')
        success = False
        while not success:
            try:
                obj, created = self.get_queryset().update_or_create(project=project_obj, defaults=data)
                success = True
            except OperationalError as e:
                if str(e) == "database is locked":
                    time.sleep(5)
                else:
                    print(e)
                    raise e

        if created:
            NodesModel.objects.filter(project=self.kwargs['project'], node_seq=1).update(executed=True)
        return Response({'Ok':'ok'}, status=status.HTTP_200_OK)
    
@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class InitialRAxHypothesisView(GenericAPIView,CreateModelMixin,RetrieveModelMixin,UpdateModelMixin):
    serializer_class = InitialRAxHypothesisSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    queryset = InitialRAxHypothesis.objects.all()
    
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
        
        # Perform the lookup filtering.
        lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field

        assert lookup_url_kwarg in self.kwargs, (
            'Expected view %s to be called with a URL keyword argument '
            'named "%s". Fix your URL conf, or set the `.lookup_field` '
            'attribute on the view correctly.' %
            (self.__class__.__name__, lookup_url_kwarg)
        )
        filter_kwargs = {self.lookup_field: self.kwargs[lookup_url_kwarg]}
        try:
            instance = self.get_queryset().get(**filter_kwargs)
            serializer = self.get_serializer(instance, data=data, partial=True)
        except ObjectDoesNotExist as e:
            serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        del data
        data = dict(serializer.validated_data)
        project_obj = data.pop('project')
        success = False
        while not success:
            try:
                obj, created = self.get_queryset().update_or_create(project=project_obj, defaults=data)
                success = True
            except OperationalError as e:
                if str(e) == "database is locked":
                    time.sleep(5)
                else:
                    print(e)
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
compound_ra_type_code = {v: k for k, v in compound_ra_type_abbreviation.items()}

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class CompoundView(GenericAPIView, CreateModelMixin, ListModelMixin):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = SlugCompoundCASRNSSerializer
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
        db_ra_type = compound_ra_type_abbreviation[ra_type]
        data = dict(request.data)
        #for key in data:
        #    data[key] = data[key][0]
        with transaction.atomic():

            last_int_id = self.get_queryset().aggregate(Max('int_id'))['int_id__max']
            if (last_int_id is None):
                new_int_id = 1
            else:
                new_int_id = last_int_id + 1
            data['int_id'] = new_int_id
            data['ra_type'] = db_ra_type
            serializer = CompoundSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            try:
                self.perform_create(serializer)
            except IntegrityError as e:
                if str(e) == 'UNIQUE constraint failed: API_compound.project_id, API_compound.smiles':
                    message = 'Structure (SMILES) conflicts with an already saved one.'
                    raise serializers.ValidationError(message)
                else:
                    raise e
            
            qcompounds = Compound.objects.filter(ra_type=db_ra_type,project=project,int_id=new_int_id)
            compound_id = qcompounds.values_list('id', flat=True)[0]
            tserializer= TCompoundSerializer(data={'project':project,'compound':compound_id})
            tserializer.is_valid(raise_exception=True)
            tserializer.save()

            if data['cas_rn'] is None:
                data['cas_rn'] = []
            if len(data['cas_rn']) > 0:

                casrn_serializer = CompoundCASRNSerializer(many=True, data=[{"compound":compound_id, "cas_rn": casrn} for casrn in data['cas_rn']])
                casrn_serializer.is_valid(raise_exception=True)
                casrn_serializer.save()
            sserializer = SlugCompoundCASRNSSerializerNoValidation(data=data)
            sserializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(sserializer.data)
        return Response(sserializer.data, status=status.HTTP_201_CREATED, headers=headers)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class CompoundCreateListView(GenericAPIView, CreateModelMixin, ListModelMixin):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = SlugCompoundCASRNSSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    

    def _perform_create(self, serializer, data):
            try:
                self.perform_create(serializer)
            except IntegrityError as e:
                if str(e) == 'UNIQUE constraint failed: API_compound.project_id, API_compound.smiles':
                    smiles_list = [compound['smiles'] for compound in serializer.validated_data]
                    q_already_saves_compounds_smiles = Compound.objects.filter(project= self.kwargs['project'],smiles__in=smiles_list).values_list('smiles',flat=True)
                    duplicated_indexes = [i for i,smiles in enumerate(smiles_list) if smiles in q_already_saves_compounds_smiles]
                    del smiles_list
                    for index in duplicated_indexes:
                        serializer.validated_data.pop(index)
                        data.pop(index)
                    for row in serializer.validated_data:
                        row['project'] = row['project'].pk
                    serializer = CompoundSerializer(data=serializer.validated_data, many=True)
                    serializer.is_valid(raise_exception=True)
                    self._perform_create(serializer,data)
                elif str(e) == 'UNIQUE constraint failed: API_compound.project_id, API_compound.chembl_id':
                    chembl_id_list = [compound['chembl_id'] for compound in serializer.validated_data]
                    q_already_saves_compounds_chembl_id = Compound.objects.filter(project= self.kwargs['project'],chembl_id__in=chembl_id_list).values_list('chembl_id',flat=True)
                    duplicated_indexes = [i for i,chembl_id in enumerate(chembl_id_list) if chembl_id in q_already_saves_compounds_chembl_id]
                    del chembl_id_list
                    for index in duplicated_indexes:
                        serializer.validated_data.pop(index)
                        data.pop(index)
                    for row in serializer.validated_data:
                       row['project'] = row['project'].pk
                    serializer = CompoundSerializer(data=serializer.validated_data, many=True)
                    serializer.is_valid(raise_exception=True)
                    self._perform_create(serializer,data)
                else:
                    raise e
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
        #debug
        print(self.kwargs['ra_type'])
        if ra_type == 'sc':
            Compound.objects.filter(ra_type=1,project=project).delete()
        
        db_ra_type = compound_ra_type_abbreviation[ra_type]

        with transaction.atomic():
            last_int_id = self.get_queryset().aggregate(Max('int_id'))['int_id__max']
            counter = 0
            data = list(request.data)
            int_id_list = []
            for row in data:
                if (last_int_id is None):
                    new_int_id = 1 + counter
                else:
                    new_int_id = last_int_id + counter + 1
                row['int_id'] = new_int_id
                int_id_list.append(new_int_id)
                row['ra_type'] = db_ra_type
                if row['cas_rn'] is None:
                    row['cas_rn'] = []
                counter += 1
            serializer = CompoundSerializer(data=data, many=True)
            serializer.is_valid(raise_exception=True)
        self._perform_create(serializer, data)
        with transaction.atomic():
            qcompounds = Compound.objects.filter(ra_type=db_ra_type,project=project,int_id__in=int_id_list)
            compound_ids = qcompounds.order_by('int_id').values_list('id', flat=True)
            tc_data = []
            casrn_data = []
            for compound_id, row in zip(compound_ids, data):
                casrn_data += [{"compound":compound_id, "cas_rn": casrn} for casrn in row['cas_rn']]
                if row['ra_type'] == compound_ra_type_abbreviation['tc']:
                    tc_data.append({'project':project,'compound':compound_id})
            if len(tc_data) > 0:
                tserializer = TCompoundSerializer(many=True, data=tc_data)
                tserializer.is_valid(raise_exception=True)
                tserializer.save()
            
            if len(casrn_data) > 0:
                casrn_serializer = CompoundCASRNSerializer(many=True, data=casrn_data)
                casrn_serializer.is_valid(raise_exception=True)
                casrn_serializer.save()
        sserializer = SlugCompoundCASRNSSerializerNoValidation(many=True, data=data)
        sserializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(sserializer.data)
        return Response(sserializer.data, status=status.HTTP_201_CREATED, headers=headers)        

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')    
class CompoundByIntIdView(RetrieveUpdateDestroyAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = SlugCompoundCASRNSSerializer
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
        compound_id = instance.pk
        with transaction.atomic():
            CompoundCASRN.objects.filter(compound=compound_id).delete()
            if data['cas_rn'] is None:
                data['cas_rn'] = []
            if len(data['cas_rn']) > 0:
                casrn_serializer = CompoundCASRNSerializer(many=True, data=[{"compound":compound_id, "cas_rn": casrn} for casrn in data['cas_rn']])
                casrn_serializer.is_valid(raise_exception=True)
                casrn_serializer.save()
            serializer = self.get_serializer(instance, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            old_ra_type = instance.ra_type
            new_ra_type = serializer.validated_data['ra_type']
            if old_ra_type != new_ra_type:
                if new_ra_type == compound_ra_type_abbreviation['tc']:
                    tserializer= TCompoundSerializer(data={'project':project,'compound':compound_id})
                    tserializer.is_valid(raise_exception=True)
                    tserializer.save()
                elif new_ra_type == compound_ra_type_abbreviation['sc']:
                    TCompound.objects.filter(compound=compound_id).delete()
            try:
                self.perform_update(serializer)
            except IntegrityError as e:
                if str(e) == 'UNIQUE constraint failed: API_compound.project_id, API_compound.smiles':
                    message = 'Structure (SMILES) conflicts with an already saved one.'
                    raise serializers.ValidationError(message)
                else:
                    raise e

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
            # instance = self.get_object()
            # CompoundCASRN.objects.filter(compound=instance.id).delete()
            response = super().delete(request, project, ra_type, int_id)
            compounds_to_update = []
            for idx, q in enumerate(compounds_l):
                if (q.int_id != idx + 1):
                    q.int_id = idx + 1
                    compounds_to_update.append(q)
            Compound.objects.bulk_update(compounds_to_update,['int_id'])

            return response
        
@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class ChemblDataMatrixView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    def get(self, request, project, ra_type, int_id, compound_init_id):
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
        respdata = {'msg': 'OK'}
        respdata['CSRF_TOKEN'] = get_token(request) 
        return JsonResponse(respdata, status=status.HTTP_200_OK)
    def post(self, request, project, ra_type, int_id=None):
        chembl2data_matrix = {
            'assay_description': 'description',
            'standard_type': 'name',
            'standard_units': 'std_unit',
            'standard_value': 'std_value',
            'units': 'unit',
            'value': 'value',
            'assay_chembl_id': 'assay_id',
            'text_value': 'text_value',
            'assay_type': 'assay_type',
            
        }
        
        chembl2data_matrix_assay_type = {
            'calculated_pc': DataMatrixFields.AssayType.calculated_pc,
            'A': DataMatrixFields.AssayType.bioactivity,
            'P': DataMatrixFields.AssayType.pc,
        }
        
        
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
        
        if 'chembl_id' in request.data and int_id is not None:
            if 'chembl_id' is not None:
                with transaction.atomic():
                    instance = Compound.objects.get(project=project,ra_type=self.kwargs['ra_type'],int_id=int(int_id))
                    serializer = CompoundSerializer(instance, data={'chembl_id':request.data['chembl_id']}, partial=True)
                    serializer.is_valid(raise_exception=True)
                    serializer.save()


        if 'data' in request.data:
            request_data = request.data['data']
        else:
            request_data = request.data
        if int_id is not None:
            data_list = [{'int_id':int_id,'data':request_data}]
        else:
            data_list = request_data
            
        i = 0
        with transaction.atomic():
            for rdata in data_list:
                current_int_id = rdata['int_id']
                if rdata['data'] is None:
                    continue
                serializer = ChemblDataMatrixSerializer(data=rdata['data'], many=True)
                try:
                    serializer.is_valid(raise_exception=True)
                except Exception as e:
                    print(rdata['data'])
                    raise e
                data = serializer.data
                units_set = set()
                standard_units = {}
                for col in data:
                    if col is None:
                        continue
                    unit = col['units']
                    std_unit = col['standard_units']
                    if std_unit is None:
                        std_unit = unit
                    if unit is None and std_unit is not None:
                        col['units'] = col['standard_units']
                        col['value'] = col['standard_value']
                    elif  unit is None and std_unit is None:
                        standard_units[None] = [None, None]
                    if unit not in standard_units:
                        if (col['value'] is not None and col['standard_value'] is not None) and col['standard_value'] != 0:
                            equivalence = col['value'] / col['standard_value']
                        else:
                            equivalence = None
                        standard_units[unit] = [std_unit, equivalence]
                    units_set.add(unit)
                    units_set.add(std_unit)
                    

                units = Unit.objects.filter(symbol__in=list(units_set))
                defined_units = set([unit.symbol for unit in units])
                
                undefined_units = units_set - defined_units
                undefined_std_units = set()
                std_units = set()
                for unit in undefined_units:
                    if unit in standard_units:
                        if standard_units[unit][0] is not None: 
                            if standard_units[unit][0] not in defined_units:
                                undefined_std_units.add(standard_units[unit][0])
                            std_units.add(standard_units[unit][0])
                        else:
                            std_units.add(None)
                            if None not in defined_units:
                                undefined_std_units.add(None)
                new_std_std_units_data = []
                new_std_units_data = []
                for unit in undefined_std_units:
                    name = unit
                    if unit is None:
                        name = 'dimensionless'
                    new_std_std_units_data.append({'name': name, 'std_unit':None, 'project': project})
                    new_std_units_data.append({'name': name, 'type':None, 'equivalence': 1.0, 'symbol': unit})
                unit_type_serializer = UnitTypeSerializer(data=new_std_std_units_data, many=True)
                unit_type_serializer.is_valid(raise_exception=True)
                unit_type_serializer.save()
                if None in undefined_std_units:
                    undefined_std_units_no_none = set(undefined_std_units)
                    undefined_std_units_no_none.remove(None)
                    undefined_std_units_no_none.add('dimensionless')
                else:
                    undefined_std_units_no_none = undefined_std_units
                
                new_std_std_units = UnitType.objects.filter(name__in=list(undefined_std_units_no_none))

                unit_type_std_unit_name2id = { unit.name: unit.id for unit in new_std_std_units }
                for unit in new_std_units_data:
                    unit['type'] = unit_type_std_unit_name2id[unit['name']]
                unit_std_serializer = UnitSerializer(data = new_std_units_data, many=True)
                unit_std_serializer.is_valid(raise_exception=True)
                unit_std_serializer.save()
                new_std_units = Unit.objects.filter(name__in=list(undefined_std_units_no_none))
                std_unit_name2id = { unit.name: unit.id for unit in new_std_units }
                partial_new_std_std_units_data = []
                for unit in new_std_units_data:
                    partial_new_std_std_units_data.append({'id': unit_type_std_unit_name2id[unit['name']],
                                                        'std_unit': std_unit_name2id[unit['name']],
                                                        'project': project})
                partial_unit_type_serializer = UnitTypeSerializer(data=partial_new_std_std_units_data, many=True, partial=True)
                partial_unit_type_serializer.is_valid(raise_exception=True)
                partial_unit_type_serializer.save()
                non_std_undefined_units = undefined_units - undefined_std_units
                saved_std_units = Unit.objects.filter(symbol__in=list(std_units))
                saved_std_units_symbol2id = {unit.symbol: unit.id for unit in saved_std_units}
                new_units_data = []
                for unit in non_std_undefined_units:
                    name = unit
                    if unit is None:
                        name = 'dimensionless'
                    new_units_data.append({'name': name, 'type':saved_std_units_symbol2id[standard_units[unit][0]],
                                            'equivalence': standard_units[unit][1], 'symbol': unit})
                
                unit_serializer = UnitSerializer(data = new_units_data, many=True)
                unit_serializer.is_valid(raise_exception=True)
                unit_serializer.save()
                saved_units = Unit.objects.filter(symbol__in=list(units_set))
                saved_units_symbol2id = {unit.symbol: unit.id for unit in saved_units}
                    
                compound_id = Compound.objects.get(project=project, ra_type=self.kwargs['ra_type'],
                                                    int_id=current_int_id).pk
                
                new_data_matrix_data = {'compound': compound_id, 'project': project}
                if not DataMatrix.objects.filter(**new_data_matrix_data).exists():
                    data_matrix_serializer = DataMatrixSerializer(data=new_data_matrix_data,many=False)
                    data_matrix_serializer.is_valid(raise_exception=True)
                    data_matrix_serializer.save()
                row_id = DataMatrix.objects.get(**new_data_matrix_data).pk
                data = data.copy()
                fields_to_keep = set()
                for field in chembl2data_matrix:
                    fields_to_keep.add(chembl2data_matrix[field])
                for col in data:
                    for old_field in chembl2data_matrix.keys():
                        new_field = chembl2data_matrix[old_field]
                        if new_field in {'unit','std_unit'}:
                            if col[old_field] is not None:
                                col[new_field] = saved_units_symbol2id[col[old_field]]
                            else:
                                col[new_field] = None
                            if old_field != new_field:
                                col.pop(old_field)
                        elif new_field in {'text_value'}:
                            if col[old_field] is None:
                                col[new_field] = col['activity_comment']
                                col.pop('activity_comment')
                            else:
                                col[new_field] = col[old_field]
                            if old_field != new_field:
                                col.pop(old_field)
                        elif old_field == 'assay_type':
                            chembl_assay_type = col[old_field]
                            col[new_field] = chembl2data_matrix_assay_type[chembl_assay_type]
                        elif new_field != old_field:
                            col[new_field] = col[old_field]
                            col.pop(old_field)
                    for field in list(col.keys()):
                        if field not in fields_to_keep:
                            col.pop(field)
                    col['row'] = row_id
                

                try:

                    data_matrix_fields_serializer = DataMatrixFieldsSerializer(data=data,many=True)
                    data_matrix_fields_serializer.is_valid(raise_exception=True)
                except Exception as e:
                    print(data)
                    raise e
                data_matrix_fields_serializer.save()
        if int_id is not None:
            return Response(data_matrix_fields_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'msg':'OK'}, status=status.HTTP_201_CREATED)
        
@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class DataMatrixFieldsView(ListAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = DataMatrixFieldsReadSerializer
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
        
        q = DataMatrixFields.objects.annotate(int_id=F('row__compound__int_id'))
        q = q.annotate(ra_type=F('row__compound__ra_type'))
        q = q.annotate(project=F('row__project'))
        q = q.filter(project=self.kwargs['project'], ra_type=self.kwargs['ra_type'])
        q = q.select_related('unit').select_related('std_unit')
        return q
    
@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class DataMatrixView(ListAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = CompoundDataMatrixSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    queryset = Compound.objects.all()
    
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
        return super().get_queryset().filter(ra_type=self.kwargs['ra_type'],project=self.kwargs['project'])
    
@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class DataMatrixHeatmapView(GenericAPIView, ListModelMixin):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated,IsProjectOwner]
    serializer_class = CompoundDataMatrixSerializer
    lookup_field = 'project'
    lookup_url_kwarg = 'project'
    queryset = Compound.objects.all()
    
    def get_queryset(self):
        # The first thing that get(), post(), put() and delete() methods 
        # of a GenericView from Django REST framework is to call get_queryset()
        # directly or indirectly (the first thing that get_objects() method does
        # is calling get_queryset()). This way we are we are overwriting 
        # self.kwargs before they are used.
        self.kwargs['project'] = int(self.kwargs['project'])
        return super().get_queryset().filter(project=self.kwargs['project']).order_by('-ra_type','-int_id')
    
    def get(self,request, project, json, assay_type='bioactivity'):
        
        assay_types = {
            'bioactivity': {
                'value':[DataMatrixFields.AssayType.bioactivity],
                'title':" Min-max normalized activity",
            },
            'pc': {
                'value':[DataMatrixFields.AssayType.calculated_pc, DataMatrixFields.AssayType.pc],
                'title':" Min-max normalized Physicochemical property",
            }
        }
        
        chembl_molecular_species = {'ACID':1.0, 'NEUTRAL':0.45, 'ZWITTERION':0.65, 'BASE':0.0,None:np.nan,'N/A':np.nan}
        
        queryset = self.filter_queryset(self.get_queryset())

        # page = self.paginate_queryset(queryset)
        # if page is not None:
        #     serializer = self.get_serializer(page, many=True)
        #     return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data
        
        del queryset
        del serializer
        
        x_values_set = set()
        y_values = []
        values_dict_list = []
        values_unit_dict_list = []
        description_dict_list = []
        name_dict_list = []
        
        colums_dict = {'Compound': [],'Assay_ID': [], 'value': [], 'value_unit': [], 'description':[],'name':[], 'alpha2': []}
        i = 0
        for compound in data:
            # if i > 30 and compound_ra_type_code[compound['ra_type']] == 'sc':
            #     continue
            if len(compound['data_matrix']) > 0:
                if compound['name'] is None:
                    name = ''
                else:
                    name = compound['name']
                comp = compound_ra_type_code[compound['ra_type']] + ':#' + str(compound['int_id'])+': '+name
                y_values.append(comp)
                values_dict = {}
                values_unit_dict = {}
                description_dict = {}
                name_dict = {}
                for field in compound['data_matrix'][0]['data_matrix_fields']:
                    if field['assay_type'] not in assay_types[assay_type]['value']:
                        continue
                    
                    x_values_set.add(field['assay_id'])
                    description_dict[field['assay_id']] = field['description']
                    name_dict[field['assay_id']] = field['name']
                    if (field['std_value'] is None):
                        if field['value'] is None:
                            value = None
                            unit = None
                        else:
                            value = field['value']
                            unit = field['unit']

                    else:
                        value = field['std_value']
                        unit = field['std_unit']
                    
                    if value is None:
                        if field['text_value'] is None:
                            values_dict[field['assay_id']] = 'N/A'
                            values_unit_dict[field['assay_id']] = 'N/A'
                        else:
                            values_dict[field['assay_id']] = field['text_value']
                            values_unit_dict[field['assay_id']] = field['text_value']
                    else:
                        if unit is None:
                            unit_suffix = ''
                        else:
                            unit_suffix = ' ' + unit
                        values_dict[field['assay_id']] = value
                        values_unit_dict[field['assay_id']] = str(value) + unit_suffix
                values_dict_list.append(values_dict)
                values_unit_dict_list.append(values_unit_dict)
                description_dict_list.append(description_dict)
                name_dict_list.append(name_dict)
            i += 1
             
        del data
        x_values = sorted(list(x_values_set))
        compound_with_data_y_values = []
        for comp, values_dict, values_unit_dict, description_dict, name_dict in zip(y_values,
                values_dict_list, values_unit_dict_list, description_dict_list, name_dict_list):
            colums_dict_comp = dict(colums_dict)
            assay_counter = len(set(values_dict.keys()).intersection(x_values_set))
            if assay_counter > 0:
                for assay_id in x_values:
                    if assay_id in values_dict:
                        z_value = values_dict[assay_id]
                        z_value_unit = values_unit_dict[assay_id]
                        description = escape(description_dict[assay_id])
                        description = escape(description_dict[assay_id])
                        name = name_dict[assay_id]
                        assay_counter += 1
                    else:
                        z_value = None
                    if z_value is None:
                        z_value = 'N/A'
                        z_value_unit = 'N/A'
                        description = 'N/A'
                        name = 'N/A'

                    if isinstance(z_value, str) and z_value != 'N/A' and assay_id != 'molecular_species':
                        alpha2 = 1.0
                    else:
                        alpha2 = 0
                    colums_dict['Compound'].append(comp)
                    colums_dict['Assay_ID'].append(assay_id)
                    colums_dict['value'].append(z_value)
                    colums_dict['value_unit'].append(z_value_unit)
                    colums_dict['description'].append(description)
                    colums_dict['name'].append(name)
                    colums_dict['alpha2'].append(alpha2)
                compound_with_data_y_values.append(comp)
        
        del values_dict_list
        del values_unit_dict_list
        del description_dict_list
        del name_dict_list
                
        dataframe = pd.DataFrame(colums_dict)
        
        del colums_dict
        
        dataframe['fscaled_value'] = None
        for assay_id in x_values:
            idxs = np.where(dataframe['Assay_ID'] == assay_id)[0]
            if dataframe.loc[idxs,'alpha2'].any() != 0 or assay_id == 'molecular_species':
                dataframe.loc[idxs,'fscaled_value'] = 'N/A'
                if assay_id == 'molecular_species':
                    array = dataframe.loc[idxs,'value']
                    for species, value in chembl_molecular_species.items():
                        if species is None:
                            array.replace(to_replace='None',value=value,regex=False,inplace=True)
                            array.fillna(value=value,inplace=True)
                        else:
                            array.replace(to_replace=species,value=value,regex=False,inplace=True)
                    dataframe.loc[idxs,'fscaled_value'] = array
                continue
            array = dataframe.loc[idxs,'value'].replace('N/A', np.nan).to_numpy(dtype=np.float32)

            # array_min = np.nanmin(array)
            array_min = 0
            array_max = np.nanmax(np.abs(array))
            array_max_min = array_max - array_min
            if array_max_min == 0:
                dataframe.loc[idxs[dataframe.loc[idxs,'value'] != 'N/A'],'fscaled_value'] = 0.0
            else:
                array_fscaled = (array - array_min)*1/array_max_min
                dataframe.loc[idxs,'fscaled_value'] = array_fscaled
        dataframe['fscaled_value'] = dataframe['fscaled_value'].replace(np.nan,'N/A')
        if len(x_values) < 1 or len(y_values) < 1:
            return Response({"item": None,'heatmap_div_id': None,'status': 'No data'})
        #Map colors
        mapper = LinearColorMapper(palette=bokeh.palettes.RdYlBu[10], low = 0,
                         high = max([i for i in dataframe['fscaled_value'].to_list() if isinstance(i, numbers.Number) and not isinstance(i, bool)]))
    
        y_values = compound_with_data_y_values
        # Define a figure

        #pan=PanTool(dimensions="width")
        #mytools = ["hover","tap","save","reset","wheel_zoom",pan]

        mytools = ["hover","tap","save","reset","wheel_zoom","pan"]
        #w=int(len(df_t.columns)*40,)
        cw=275
        ch=30
        #h=int(((w-cw)*len(df_t.index)/len(df_t.columns))+ch)
        w= 760
        h= 132
        if (len(y_values) < 6 or len(x_values) < 6):
            min_border_right=100
            p = figure(
            min_border_right=min_border_right,
            #title="Example freq",
            y_range=y_values,
            x_range = x_values,
            tools=mytools, 
            x_axis_location="above",
            active_drag=None,
            toolbar_location="left",
            toolbar_sticky = False
            )
        elif assay_type == 'pc':
            width = 60*len(x_values)
            height = 80*len(y_values)
            min_border_right=150
            p = figure(
                plot_width=width,
                plot_height= height,
                min_border_right=min_border_right,
                y_range= y_values,
                x_range = x_values,
                tools=mytools, 
                x_axis_location="above",
                active_drag=None,
                toolbar_location="left",
                toolbar_sticky = False
                )
        else:
            width = 18*len(x_values)
            height = 80*len(y_values)
            min_border_right=100
            p = figure(
                plot_width=width,
                plot_height= height,
                min_border_right=min_border_right,
                #title="Example freq",
                y_range= y_values,
                x_range = x_values,
                tools=mytools, 
                x_axis_location="above",
                active_drag=None,
                toolbar_location="left",
                toolbar_sticky = False
                )

        # Create rectangle for heatmap
        mysource = ColumnDataSource(dataframe)
        del dataframe
        p.rect(
            y='Compound', 
            x='Assay_ID', 
            width=0.9, 
            height=1, 
            source=mysource,
            line_color=None, 
            fill_color=transform('fscaled_value', mapper),

            # set visual properties for selected glyphs
            selection_line_color="crimson",
            selection_fill_color=transform('fscaled_value', mapper),
            # set visual properties for non-selected glyphs
            nonselection_fill_alpha=1,
            nonselection_fill_color=transform('fscaled_value', mapper),
            nonselection_line_color=None

            )
        
        p.rect(
            y='Compound', 
            x='Assay_ID', 
            width=0.9, 
            height=1, 
            source=mysource,
            line_color=None, 
            fill_color='black',
            fill_alpha='alpha2',
            
            # set visual properties for selected glyphs
            selection_line_color="crimson",
            selection_fill_color='black',
            selection_fill_alpha='alpha2',
            # set visual properties for non-selected glyphs
            nonselection_fill_alpha='alpha2',
            nonselection_fill_color='black',
            nonselection_line_color=None

            )

        p.title.text = assay_types[assay_type]['title']
        p.title.align = "left"
        p.title.text_font_size = "25px"
        p.add_layout(Title(text="Compounds", align="right"), "left")
        p.add_layout(Title(text="Assays", align="left"), "above")

        # Add legend

        color_bar = ColorBar(color_mapper=mapper, ticker=BasicTicker(), 
                             formatter=PrintfTickFormatter(format=r'%.3f'),
                             orientation="vertical", label_standoff=12, location=(0,0),
                             major_label_text_font_size = "9pt",major_tick_line_color="black")
        
        
        p.add_layout(color_bar, 'left')


        p.axis.axis_line_color = None
        p.axis.major_tick_line_color = None
        p.xaxis.major_label_text_font_size = "9pt"
        p.yaxis.major_label_text_font_size = "8pt"
        p.axis.major_label_standoff = 0
        p.xaxis.major_label_orientation = 1#"vertical"
        
        TOOLTIPS = """
            <div style="max-width:20%">
            <div>
                <span href="#" data-toggle="tooltip" title="Compound">@Compound</span>
            </div>
            <div>
                <span href="#" data-toggle="tooltip" title="Assay ID">@Assay_ID</span>             
            </div>
            <div>
                <span href="#" data-toggle="tooltip" title="Value">@value_unit</span>
            </div><div>
              <span href="#" data-toggle="tooltip" title="Description">@description</span>
            </div><div>
                <span href="#" data-toggle="tooltip" title="Assay type">@name</span>                
            </div>
            </div>
        """
        
        
        #Hover tool:
        p.select_one(HoverTool).tooltips = [
         ('Compound', '@Compound'),
         ('Assay ID', '@Assay_ID'),
         ('Value', '@value_unit'),
         ('Description','@description{safe}'),
         ('Assay type', '@name')
        ]
        
        #p.select_one(HoverTool).tooltips = TOOLTIPS
    
        
        script, div = components(p)
        heatmap_div_id = "heatmap_datamatrix_"+assay_type+"_project_"+str(self.kwargs['project'])
        json_p = json_item(p,heatmap_div_id)
        json_p['doc']['title'] = heatmap_div_id
        if json is None:
            context={
                'script' : script , 
                'div' : div,
            }
            return render(request, 'API/datamatrix.html', context)
        else:
            root = ET.fromstring("<document>"+script+"</document>")
            scripts= []
            for tag in root.findall('script'):
                 scripts.append(tag.text)
            return Response({"item": json_p,'heatmap_div_id': heatmap_div_id,'status':'OK'})