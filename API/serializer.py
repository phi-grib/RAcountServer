from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Projects, Nodes, Resources, ProblemDescription, Compound
from .validators import CASRNValidator

class ProjectSerializer (serializers.ModelSerializer):

    class Meta:
        model = Projects
        fields = "__all__"

class UserSerializer (serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('id','email','first_name','last_name')

class FullNodeSerializer (serializers.ModelSerializer):
    name = serializers.CharField(allow_blank=False, trim_whitespace=True)
    description = serializers.CharField(allow_blank=True, trim_whitespace=True)
    history_node_list = serializers.CharField(allow_null=True, allow_blank=True, trim_whitespace=True)
    class Meta:
        model = Nodes
        fields = ('name', 'description','history_node_list','inputs_comments','outputs', 'outputs_comments', 'project', 'node_seq','executed')

class NodeSerializer (serializers.ModelSerializer):
    class Meta:
        model = Nodes
        fields = ('inputs_comments','outputs', 'outputs_comments', 'project', 'node_seq','executed')

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
    
class CompoundSerializer(serializers.ModelSerializer):
    name = serializers.CharField(allow_blank=False, trim_whitespace=True)
    cas_rn = serializers.CharField(allow_blank=False, trim_whitespace=True)
    smiles = serializers.CharField(allow_blank=False, trim_whitespace=True)
    def validate_cas_rn(self, value):
        cas_rn_validator = CASRNValidator()
        cas_rn_validator(value)
        return value
    class Meta:
        model = Compound
        fields = "__all__"
