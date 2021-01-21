from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Projects, Nodes, Resources, ProblemDescription, InitialRAxHypothesis, Compound
from .models import DataMatrix, UnitType, Unit, DataMatrixFields
from .validators import CASRNValidator, SMILESValidator

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
    scope = serializers.CharField(allow_blank=True, trim_whitespace=False)
    decision_context = serializers.CharField(allow_blank=True, trim_whitespace=False)
    endpoints = serializers.CharField(allow_blank=True, trim_whitespace=False)
    uncertainty = serializers.CharField(allow_blank=True, trim_whitespace=False)
    class Meta:
        model = ProblemDescription
        fields = "__all__"
        
class InitialRAxHypothesisSerializer(serializers.ModelSerializer):
    ana_cat_approach  = serializers.CharField(allow_blank=True, trim_whitespace=False)
    metabolism = serializers.CharField(allow_blank=True, trim_whitespace=False)
    quantitative_var_approach = serializers.CharField(allow_blank=True, trim_whitespace=False)
    class Meta:
        model = InitialRAxHypothesis
        fields = "__all__"
    
    
class CompoundSerializer(serializers.ModelSerializer):
    name = serializers.CharField(allow_blank=False, allow_null=True, trim_whitespace=True)
    cas_rn = serializers.CharField(allow_blank=False, allow_null=True, trim_whitespace=True)
    smiles = serializers.CharField(allow_blank=False, trim_whitespace=True)
    chembl_id = serializers.CharField(allow_blank=False, allow_null=True, trim_whitespace=True)
    def validate_cas_rn(self, value):
        if value is None:
            return value
        cas_rn_validator = CASRNValidator()
        cas_rn_validator(value)
        return value
    def validate_smiles(self, value):
        smiles_validator = SMILESValidator()
        smiles_validator(value)
        return value
    class Meta:
        model = Compound
        fields = "__all__"

class DataMatrixSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataMatrix
        fields = "__all__"

class UnitTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitType
        fields = "__all__"    

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = "__all__"    
    
class DataMatrixFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataMatrixFields
        fields = "__all__"

class DataMatrixFieldsReadSerializer(serializers.ModelSerializer):
    unit = serializers.SlugRelatedField(slug_field='symbol', read_only=True)
    std_unit = serializers.SlugRelatedField(slug_field='symbol', read_only=True)
    class Meta:
        model = DataMatrixFields
        fields = "__all__"    

class NestedDataMatrixFiledsSerializer(serializers.ModelSerializer):
    data_matrix_fields = DataMatrixFieldsReadSerializer(many=True, read_only=True, source='datamatrixfields_set')
    class Meta:
        model = DataMatrix
        fields = "__all__"
        
class CompoundDataMatrixSerializer(serializers.ModelSerializer):
    data_matrix = NestedDataMatrixFiledsSerializer(many=True, read_only=True, source='datamatrix_set')
    class Meta:
        model = Compound
        fields = "__all__"


class ChemblDataMatrixSerializer(serializers.Serializer):
    assay_description = serializers.CharField(allow_blank=False, trim_whitespace=True)
    standard_type = serializers.CharField(allow_blank=True, trim_whitespace=True)
    standard_units = serializers.CharField(allow_blank=True,allow_null=True, trim_whitespace=True)
    standard_value = serializers.FloatField(allow_null=True)
    units = serializers.CharField(allow_blank=True,allow_null=True, trim_whitespace=True)
    value = serializers.FloatField(allow_null=True)
    assay_chembl_id = serializers.CharField(allow_blank=False, trim_whitespace=True)
    text_value = serializers.CharField(allow_blank=False,allow_null=True, trim_whitespace=True)
    activity_comment = serializers.CharField(allow_blank=False,allow_null=True, trim_whitespace=True)
    assay_type = serializers.CharField(allow_blank=False,allow_null=False, trim_whitespace=True)
