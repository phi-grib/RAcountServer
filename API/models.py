
from django.db import models
from django.conf import settings

# Create your models here.

class Projects(models.Model):

    name = models.CharField(max_length=50)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Nodes(models.Model):

    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    inputs = models.TextField()
    inputs_comments = models.TextField()
    outputs = models.TextField()
    outputs_comments = models.TextField()
    node_seq = models.IntegerField()
    executed = models.BooleanField(default=False)

class Resources(models.Model):

    node = models.IntegerField()
    resources_name = models.CharField(max_length=255)
    resources_link = models.URLField(max_length=255)