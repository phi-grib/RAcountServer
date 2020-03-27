"""RAcountServer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path,re_path
from .views import ListProjects, ProjectStatus, ManageProject, ManageNodes, User, Resources, FileUploadView
from .views import ProblemDescriptionView
from .chembl import ChEMBLSmilesToInChIKeyView

urlpatterns = [
    #path("RX", ListModels.as_view()),
    re_path('^RX/user/(?P<logout>logout)?/?$', User.as_view()),
    path("RX/user/projects/", ListProjects.as_view()),
    path("RX/project/<int:project>/status/", ProjectStatus.as_view()),
    path("RX/project/<int:project>/node/<int:node>/", ManageNodes.as_view()),
    path("RX/node/<int:node>/resources/", Resources.as_view()),
    path("RX/project/<int:project>/problem_description/",ProblemDescriptionView.as_view()),
    path("RX/upload/<int:project>/<int:node>/<int:part>/", FileUploadView.as_view()),
    path("RX/chembl/smiles2inchikey/", ChEMBLSmilesToInChIKeyView.as_view())

]