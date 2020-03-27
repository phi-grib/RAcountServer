
from rdkit import Chem
from rdkit.Chem import rdinchi

from chembl_structure_pipeline import standardizer as embl
from chembl_structure_pipeline import checker

from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

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

class ChEMBLSmilesToInChIKeySerializer(serializers.Serializer):
    smiles = serializers.CharField(allow_blank=False, trim_whitespace=True)

class ChEMBLSmilesToInChIKeyView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        parent=False
        isomeric=True
        parent_key = 'parent'     #GET
        isomeric_key = 'isomeric' #GET
        
        
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
        raw_data_dict = dict(request.data)
        serializer = ChEMBLSmilesToInChIKeySerializer(data=raw_data_dict)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        smiles = data['smiles']
        inchikey = chembl_standarize_smiles_to_inchikey(smiles, parent=parent, isomeric=isomeric)
        return Response({'inchikey' : inchikey})
        