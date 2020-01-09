from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Projects, Nodes, Resources, ProblemDescription

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
        fields = ('name', 'description','inputs_comments','outputs', 'outputs_comments', 'project', 'node_seq','executed')

class ResourcesSerializer (serializers.ModelSerializer):

    class Meta:
        model = Resources
        fields = "__all__"

class StatusSerializer(serializers.Serializer):

    node_seq = serializers.IntegerField()
    executed = serializers.URLField()

class ProblemDescriptionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProblemDescription
        fields = "__all__"

class ProblemDescriptionSerializerInput(serializers.Serializer):
    project = serializers.IntegerField()
    description = serializers.CharField(allow_blank=True, trim_whitespace=False)
