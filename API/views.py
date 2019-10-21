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

from django.db.models import F

from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Projects as ProjectsModel

from .models import Nodes as NodesModel
from .models import Resources as ResourcesModel

from .serializer import ProjectSerializer, UserSerializer, NodeSerializer
from .serializer import StatusSerializer, ResourcesSerializer



UserModel = get_user_model()


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
    permission_classes = [IsAuthenticated]



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
    permission_classes = [IsAuthenticated]

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
class ManageNodes(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, project, node):


        newdict = {}


        node_info = NodesModel.objects.get(project=project,node_seq=node)
        newdict.update(NodeSerializer(node_info, many=False).data)

        resources = ResourcesModel.objects.filter(node=node)
        resources = ResourcesSerializer(resources, many=True).data

        newdict['resources'] = resources

        i = 1
        inputs = []

        while i < node:
            historial = NodesModel.objects.get(project=project, node_seq=i)
            inputs.append({'name': historial.name, 'content': historial.outputs, 'comment': historial.outputs_comments})
            i = i+1

        newdict['inputs'] = inputs
        newdict['CSRF_TOKEN'] = get_token(request)
        return Response(newdict, 200)

    def post(self, request, project, node):

        output = request.POST.get ('output')
        output_comments = request.POST.get('output_comments')

        node = NodesModel.objects.get(project=project, node_seq=node)

        node.outputs = output
        node.outputs_comments = output_comments
        node.executed = True
        node.save()

        return JsonResponse({'Ok':'ok'}, status=200)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class User(APIView):
    def get(self,request,logout):
        return JsonResponse({'CSRF_TOKEN':get_token(request)}, status=200)
    def post(self,request,logout):
        if logout == "logout":
            if request.user.is_authenticated:
                auth_logout(request)
                return JsonResponse({'Ok':'ok'}, status=200)
        else:
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(username=username, password=password)
            
            if user is not None:
                login(request, user)
                return Response(UserSerializer(user, many=False).data, 200)

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



