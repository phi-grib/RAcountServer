from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Projects, Nodes, Resources

class ProjectSerializer (serializers.ModelSerializer):

    class Meta:
        model = Projects
        fields = "__all__"

class UserSerializer (serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('id','email','first_name','last_name')

class NodeSerializer (serializers.ModelSerializer):
    
    class Meta:
        model = Nodes
        fields = ('name', 'description', 'outputs', 'outputs_comments', 'project', 'node_seq')

class ResourcesSerializer (serializers.ModelSerializer):

    class Meta:
        model = Resources
        fields = "__all__"

class StatusSerializer(serializers.Serializer):

    node_seq = serializers.IntegerField()
    executed = serializers.URLField()