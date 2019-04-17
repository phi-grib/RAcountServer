
from django.db import models
from django import forms

# Create your models here.

class Users(models.Model):

    user = models.CharField(max_length=255)
    mail = models.CharField(max_length=255)
    password = forms.CharField(widget=forms.PasswordInput)

class Projects(models.Model):

    name = models.CharField(max_length=50)
    owner = models.CharField(max_length=50)


class Nodes(models.Model):

    id_project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    inputs = models.TextField()
    inputs_comments = models.TextField()
    outputs = models.TextField()
    outputs_comments = models.TextField()
    resources_name = models.CharField(max_length=255)
    resources_link = models.CharField(max_length=500)