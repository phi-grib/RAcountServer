from django.http import HttpResponse
from rest_framework import status
from django.http import JsonResponse


from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Projects as ProjectsModel
from .models import Users as UsersModel
from .models import Nodes as NodesModel
from .models import Resources as ResourcesModel

from .serializer import ProjectSerializer, UserSerializer, NodeSerializer, StatusSerializer, ResourcesSerializer


class ManageProject(APIView):
    """
    Add Project
    """

    def put(self, request, user, projectname):
        """
        Publishes a new version of the model
        TODO: Complete  error handling and error status
        """
        p = Projects(owner=user, name=project)
        p.save()
        return Response(['ok'], status=status.HTTP_201_CREATED)

    def get(self, request, project_id):

        projects = NodesModel.objects.filter(project_id=project_id)
        projects = projects.values('node_seq','executed')
        return Response(StatusSerializer(projects, many=True).data, 200)

class ListProjects(APIView):

    def get(self, request, user):

        projects = ProjectsModel.objects.filter(owner_id=user)
        return Response(ProjectSerializer(projects, many=True).data, 200)

class ManageNodes(APIView):

    def get(self, request, project, node):

        node_info = NodesModel.objects.get(project_id=project,node_seq=node)
        return Response(NodeSerializer(node_info, many=False).data, 200)

    def post(self, request, project, node):

        output = request.POST.get ('output')
        output_comments = request.POST.get('output_comments')

        node = NodesModel.objects.get(project=project, node_seq=node)

        node.outputs = output
        node.outputs_comments = output_comments
        node.executed = True
        node.save()

        return JsonResponse({'Ok':'ok'}, status=200)


class Users(APIView):

    def get(self,request,user):

        user = UsersModel.objects.get(mail=user)
        return Response(UserSerializer(user, many=False).data, 200)

class Resources(APIView):

    def get(self, request, node):

        resources = ResourcesModel.objects.filter(node=node)
        return Response(ResourcesSerializer(resources, many=True).data, 200)



