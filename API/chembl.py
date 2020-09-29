
from rdkit import Chem
from rdkit.Chem import rdinchi

from chembl_structure_pipeline import standardizer as embl
from chembl_structure_pipeline import checker

from django.utils.decorators import method_decorator
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie, csrf_exempt

from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied


def chembl_standarize_rdkitmol(mol, parent=False):
    std_molblock = embl.standardize_molblock(Chem.MolToMolBlock(mol))
    issues = checker.check_molblock(Chem.MolToMolBlock(mol))
    if parent:
        std_molblock, exclude = embl.get_parent_molblock(std_molblock)
    return std_molblock

def chembl_standarize_smiles(smiles, parent=False, isomeric=True):
    mol = Chem.MolFromSmiles(smiles)
    if not isomeric:
        mol = Chem.MolFromSmiles(Chem.MolToSmiles(mol, isomericSmiles=False))
    std_molblock = chembl_standarize_rdkitmol(mol, parent)
    std_mol = Chem.MolFromMolBlock(std_molblock)
    return Chem.MolToSmiles(std_mol)

def chembl_standarize_smiles_to_inchikey(smiles, parent=False, isomeric=True):
    mol = Chem.MolFromSmiles(smiles)
    if not isomeric:
        mol = Chem.MolFromSmiles(Chem.MolToSmiles(mol, isomericSmiles=False))
    std_molblock = chembl_standarize_rdkitmol(mol, parent)
    inchi,code,msg,log,aux = rdinchi.MolBlockToInchi(std_molblock)
    return rdinchi.InchiToInchiKey(inchi)

class ChEMBLSmiles(serializers.Serializer):
    smiles = serializers.CharField(allow_blank=False, trim_whitespace=True)

@method_decorator((csrf_exempt), name='dispatch')
class ChEMBLSmilesView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self, request, command):
        output = 'inchikey'
        parent = False
        isomeric = True
        parent_key = 'parent'     #GET
        isomeric_key = 'isomeric' #GET
        
        if command == 'smiles2inchikey':
            output ='inchikey'
        elif command == 'standarize_smiles':
            output ='smiles'
        
        #Parse GET parameters
        if parent_key in request.GET:
            try:
                if int(request.GET[parent_key]) == 1:
                    parent = True
                elif int(request.GET[parent_key]) == 0:
                    parent = False
            except Exception:
                pass
        if parent_key in request.GET:
            try:
                if int(request.GET[parent_key]) == 1:
                    parent = True
                elif int(request.GET[parent_key]) == 0:
                    parent = False
            except Exception:
                pass
        serializer = ChEMBLSmiles(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        smiles = data['smiles']
        if output == 'inchikey':
            inchikey = chembl_standarize_smiles_to_inchikey(smiles, parent=parent, isomeric=isomeric)
            return Response({'inchikey' : inchikey})
        elif output == 'smiles':
            std_smiles = chembl_standarize_smiles(smiles, parent=parent, isomeric=isomeric)
            return Response({'smiles' : std_smiles})