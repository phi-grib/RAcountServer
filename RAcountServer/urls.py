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
from django.conf import settings
from django.contrib import admin
from django.conf.urls import url, include
from django.views.generic import RedirectView
from django.contrib.staticfiles.views import serve as static_serve
from django.views.static import serve as debug_serve

if settings.DEBUG:
    urlpatterns = [
        url(r'^$', static_serve, kwargs={'path': 'index.html'}),
        url(r'^login$', static_serve, kwargs={'path': 'index.html'}),
        url(r'^main$', static_serve, kwargs={'path': 'index.html'}),
        url(r'^'+settings.MEDIA_URL[1:]+r'(?P<path>.*)$', debug_serve,
         kwargs={'document_root': settings.MEDIA_ROOT})
    ]
else:
    urlpatterns = []

urlpatterns += [
    url(r'^', include('API.urls')),
    url(r'^(?!/?static/)(?!/?media/)(?!/?'+settings.MEDIA_URL[1:]+r')(?P<path>.*\..*)$', RedirectView.as_view(url='/static/%(path)s', permanent=False))

]
