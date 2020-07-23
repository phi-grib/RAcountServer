
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator,  RegexValidator
from .validators import CASRNValidator
from djchoices import ChoiceItem, DjangoChoices
# Create your models here.

class Projects(models.Model):

    name = models.CharField(max_length=50)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name','owner'], name='unique_name_owner'),
        ]

class NodeType(models.Model):
    name = models.CharField(max_length=255,blank=True,null=False,default='Unnamed')
    description = models.TextField(blank=True,null=False,default='')
    history_node_list = models.TextField(blank=True,null=True,default=None)


class Nodes(models.Model):

    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    inputs = models.TextField(blank=True,null=False,default='')
    inputs_comments = models.TextField(blank=True,null=False,default='')
    outputs = models.TextField(blank=True,null=False,default='')
    outputs_comments = models.TextField(blank=True,null=False,default='')
    node_seq = models.ForeignKey(NodeType, on_delete=models.DO_NOTHING)
    executed = models.BooleanField(default=False)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['project','node_seq'], name='unique_project_node_seq'),
        ]

class ProblemDescription(models.Model):
    project = models.ForeignKey(Projects,unique=True, null=False, on_delete=models.CASCADE)
    description = models.TextField(blank=True,null=False,default='')

class Resources(models.Model):

    node = models.IntegerField()
    resources_name = models.CharField(max_length=255)
    resources_link = models.URLField(max_length=255)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['node','resources_name'], name='unique_node_resources_name'),
            models.UniqueConstraint(fields=['node','resources_link'], name='unique_node_resources_link'),
        ]

class FileType(models.Model):
    name = models.CharField(max_length=40, blank=True, null=True)
    extension = models.CharField(max_length=10, blank=True, null=True)
    is_molecule = models.NullBooleanField()
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name','extension'], name='unique_name_extension'),
        ]

class File(models.Model):
    user_filename = models.CharField(max_length=80)
    filename = models.CharField(unique=True, max_length=125)
    file_type = models.ForeignKey(FileType,  models.DO_NOTHING, null=True) 
    description = models.CharField(max_length=40, blank=True, null=False, default="")
    update_timestamp = models.DateTimeField(auto_now=True)
    creation_timestamp = models.DateTimeField(auto_now_add=True)
    node =  models.ForeignKey(Nodes, on_delete=models.DO_NOTHING)
    part = models.IntegerField(blank=True, null=True)
    last_update_by = models.IntegerField(blank=True, null=True)
    filepath = models.CharField(unique=True,max_length=520, blank=True, null=True)
    url = models.CharField(unique=True,max_length=520, blank=True, null=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user_filename','node','part'], name='unique_user_filename_node_part'),
        ]
    
class ProblemDescriptionFile(models.Model):
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    file = models.ForeignKey(File, on_delete=models.CASCADE)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['project','file'], name='problem_unique_project_file'),
        ]

class CommentFile(models.Model):
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    file = models.ForeignKey(File, on_delete=models.CASCADE)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['project','file'], name='unique_project_file'),
        ]


class Compound(models.Model):
    class RAType(DjangoChoices):
        target = ChoiceItem(0, "Target compound")
        source = ChoiceItem(1, "Source compound")

    smiles = models.TextField(null=False, blank=False)
    cas_rn = models.CharField(null=True, blank=False, max_length=12, validators=[CASRNValidator()])
    name = models.TextField(null=True, blank=False)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    int_id = models.IntegerField(null=False, blank=False, validators=[MinValueValidator(1)])
    ra_type = models.IntegerField(null=False, blank=False, choices=RAType.choices)
    rdkit = models.TextField(null=True, blank=False, default=None)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['project','smiles'], name='unique_project_smiles'),
            models.UniqueConstraint(fields=['project','ra_type','int_id'], name='unique_project_ra_type_int_id'),

        ]

class DataMatrix(models.Model):
    compound = models.ForeignKey(Compound, on_delete=models.CASCADE)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)

class UnitType(models.Model):
    name = models.TextField(null=False, blank=False)
    std_unit = models.ForeignKey('Unit', null=True, on_delete=models.DO_NOTHING)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)

class Unit(models.Model):
    type = models.ForeignKey(UnitType, on_delete=models.DO_NOTHING)
    equivalence = models.FloatField()
    name = models.TextField(null=False, blank=False)
    symbol= models.TextField(null=False, blank=False, unique=True)
    

class DataMatrixFields(models.Model):
    name = models.TextField(null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    value = models.FloatField(null=True)
    std_value = models.FloatField(null=True)
    row = models.ForeignKey(DataMatrix, on_delete=models.CASCADE)
    unit = models.ForeignKey(Unit, null=True, related_name='datamatrixunit', on_delete=models.DO_NOTHING)
    std_unit = models.ForeignKey(Unit, null=True, related_name='datamatrixstdunit', on_delete=models.DO_NOTHING)
    assay_id = models.TextField(null=False, blank=False)
