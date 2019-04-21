
from django.db import models

# Create your models here.

class Users(models.Model):

    user = models.CharField(max_length=255)
    mail = models.CharField(max_length=255)
    nickName = models.CharField(max_length=50)

class Projects(models.Model):

    name = models.CharField(max_length=50)
    owner = models.ForeignKey(Users, on_delete=models.CASCADE)

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