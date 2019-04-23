from rest_framework import serializers
from .models import Projects, Users, Nodes, Resources

class ProjectSerializer (serializers.ModelSerializer):

    class Meta:
        model = Projects
        fields = "__all__"

class UserSerializer (serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = "__all__"

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