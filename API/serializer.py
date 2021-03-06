from django.contrib.auth import get_user_model
from django.db.models import Prefetch

from rest_framework import serializers
from .models import Projects, Nodes, Resources, ProblemDescription, InitialRAxHypothesis, Compound
from .models import DataMatrix, UnitType, Unit, DataMatrixFields, CompoundCASRN, TCompound
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
    smiles = serializers.CharField(allow_blank=False, trim_whitespace=True)
    chembl_id = serializers.CharField(allow_blank=False, allow_null=True, trim_whitespace=True)
    def validate_smiles(self, value):
        smiles_validator = SMILESValidator()
        smiles_validator(value)
        return value
    def validate(self, attr):
        if 'ra_type' in attr:
            if attr['ra_type'] == Compound.RAType.source:
                return attr
            try:
                tcompound = TCompound.objects.get(project=attr['project'].id)
            except TCompound.DoesNotExist as e:
                return attr
            except Exception as e:
                raise e
            print(tcompound)
            prev_tcompound_id = tcompound.compound_id
            if 'id' in attr:
                new_tcompound_id = attr['id']
            else:
                new_tcompound_id = None
            
            if prev_tcompound_id == new_tcompound_id:
                return attr
            message = 'Only one TC is allowed, please delete the current TC before saving a new one'
            raise serializers.ValidationError(message)
        else: 
            return attr 

    class Meta:
        model = Compound
        fields = "__all__"

class CompoundImageSerializer(serializers.Serializer):
    image = serializers.CharField(allow_blank=False, allow_null=True, trim_whitespace=False)

class CompoundImageImageSerializer(serializers.Serializer):
    compounds = CompoundSerializer(many=True,read_only=True)
    images = CompoundImageSerializer(many=True,read_only=True)

class TCompoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = TCompound
        fields = "__all__"

class CompoundCASRNSerializer(serializers.ModelSerializer):
    cas_rn = serializers.CharField(allow_blank=False, allow_null=True, trim_whitespace=True)

    def validate_cas_rn(self, value):
        if value is None:
            return value
        cas_rn_validator = CASRNValidator()
        cas_rn_validator(value)
        return value
    class Meta:
        model = CompoundCASRN
        fields = "__all__"


class SlugCompoundCASRNSSerializer(CompoundSerializer):
    cas_rn = serializers.SlugRelatedField(
        many=True,
        read_only=False,
        slug_field='cas_rn',
        allow_null=True,
        queryset=CompoundCASRN.objects.all()
    )
    

class SlugCompoundCASRNSSerializerNoValidation(SlugCompoundCASRNSSerializer):
    def validate_cas_rn(self, value):
        return value
    def validate_smiles(self, value):
        return value
    def validate(self, attr):
        return attr


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


class DataMatrixFieldsReadCountSerializer(serializers.ModelSerializer):
    #
    #calculated_pc_count = serializers.IntegerField(source='get_calculated_pc_count',read_only=True)
    #pc_count = serializers.SerializerMethodField
    #bioactivity_count = serializers.SerializerMethodField()

    def get_calculated_pc_count():
        serializer = serializers.IntegerField(source='datamatrixfields_set',read_only=True)
        count = 0
        for row in serializer.data:
            if row['assay_type'] == DataMatrixFields.AssayType.calculated_pc:
                count += 1
        return count


    class Meta:
        model = DataMatrixFields
        fields = ("id", "calculated_pc_count")    

# Need to be optimized: now is doing one query per compound
class NestedDataMatrixFiledsCountSerializer(serializers.ModelSerializer):
    id_count = serializers.IntegerField(source='datamatrixfields_set.count',read_only=True)
    #data_matrix_fields = DataMatrixFieldsReadSerializer(many=True, read_only=True, source='datamatrixfields_set')
    calculated_pc_count = serializers.SerializerMethodField()
    pc_count = serializers.SerializerMethodField()
    bioactivity_count = serializers.SerializerMethodField()

    def get_calculated_pc_count(self, data_matrix):
        serializer = DataMatrixFieldsReadSerializer(data_matrix.datamatrixfields_set,many=True, read_only=True)
        count = 0
        for row in serializer.data:
            if row['assay_type'] == DataMatrixFields.AssayType.calculated_pc:
                count += 1
        return {"calculated_pc_count":count}
    
    def get_pc_count(self, data_matrix):
        serializer = DataMatrixFieldsReadSerializer(data_matrix.datamatrixfields_set,many=True, read_only=True)
        count = 0
        for row in serializer.data:
            if row['assay_type'] == DataMatrixFields.AssayType.pc:
                count += 1
        return {"pc_count":count}

    def get_bioactivity_count(self, data_matrix):
        serializer = DataMatrixFieldsReadSerializer(data_matrix.datamatrixfields_set,many=True, read_only=True)
        count = 0
        for row in serializer.data:
            if row['assay_type'] == DataMatrixFields.AssayType.bioactivity:
                count += 1
        return {"bioactivity_count":count}

    class Meta:
        model = DataMatrix
        fields = ("id_count","calculated_pc_count","pc_count","bioactivity_count")


class CompoundDataMatrixCountSerializer(serializers.ModelSerializer):
    data_matrix = NestedDataMatrixFiledsCountSerializer(many=True, read_only=True, source='datamatrix_set')
    class Meta:
        model = Compound
        fields = ("__all__")