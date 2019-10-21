from rest_framework import permissions
from .models import Projects

class IsProjectOwner(permissions.BasePermission):
    """
    Project permission check for project owner.
    """

    def has_permission(self, request, view):
        project_kwarg = 'project'
        assert project_kwarg in view.kwargs, type(view).__name__+" has no kwarg named 'project' for checking project owner."

        return Projects.objects.filter(pk=view.kwargs[project_kwarg]).values_list('owner',flat=True)[0] == request.user.id
