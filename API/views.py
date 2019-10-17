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

from rest_framework.decorators import api_view
from rest_framework.views import APIView
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
class ManageProject(APIView):
    """
    Add Project
    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def put(self, request, user, projectname):
        """
        Publishes a new version of the model
        TODO: Complete  error handling and error status
        """
        # p = ProjectsModel(owner=user, name=project)
        # p.save()
        # return Response(['ok'], status=status.HTTP_201_CREATED)
        pass

    def get(self, request, project_id):

        projects = NodesModel.objects.filter(project_id=project_id)
        projects = projects.values('node_seq','executed')
        return Response(StatusSerializer(projects, many=True).data, 200)

class ListProjects(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):

        projects = ProjectsModel.objects.filter(owner_id=request.user.id)
        return Response(ProjectSerializer(projects, many=True).data, 200)

@method_decorator((csrf_protect,ensure_csrf_cookie), name='dispatch')
class ManageNodes(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, project, node):


        newdict = {}


        node_info = NodesModel.objects.get(project_id=project,node_seq=node)
        newdict.update(NodeSerializer(node_info, many=False).data)

        resources = ResourcesModel.objects.filter(node=node)
        resources = ResourcesSerializer(resources, many=True).data

        newdict['resources'] = resources

        i = 1
        inputs = []

        while i < node:
            historial = NodesModel.objects.get(project_id=project, node_seq=i)
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
        if logout == "logout":
            return JsonResponse({'CSRF_TOKEN':get_token(request)}, status=200)
        return render(request,'API/csrf_token.html')
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


class Resources(APIView):

    def get(self, request, node):

        resources = ResourcesModel.objects.filter(node=node)
        return Response(ResourcesSerializer(resources, many=True).data, 200)



