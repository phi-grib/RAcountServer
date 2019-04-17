from django.http import HttpResponse
from rest_framework import status


from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Projects
from .serializer import ProjectSerializer


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

    def get(self, request, user, project):

        pass

class ListProjects(APIView):

    def get(self, request, user):
        
        projects = Projects.objects.all()
        return Response(ProjectSerializer(projects, many=True).data, 200)

class ManageNodes(APIView):

    def get(self, request, user, project, node):
        pass