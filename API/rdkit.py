from rdkit import Chem, DataStructs

from django.utils.decorators import method_decorator
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie, csrf_exempt

from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

from .validators import SMILESValidator

import json

query_fp_session_key = 'FingerPrintSimilarityFromSmilesQueryFp'

class FingerPrintFromSmilesSerializer(serializers.Serializer):
    smiles = serializers.CharField(allow_blank=False, trim_whitespace=True)
    def validate_smiles(self, value):
        smiles_validator = SMILESValidator()
        smiles_validator(value)
        return value
    
@method_decorator((csrf_exempt), name='dispatch')
class SetFingerPrintSimilarityFromSmilesView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self, request, option):
        serializer = FingerPrintFromSmilesSerializer(data=request.data, many=False)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        smiles = data['smiles']
        m = Chem.MolFromSmiles(smiles)
        fp = Chem.RDKFingerprint(m)
        request.session[query_fp_session_key] = fp
        return Response(data={'msg':'OK'}, status=status.HTTP_200_OK)
            
                
    
@method_decorator((csrf_exempt), name='dispatch')
class SimilarityFromSmilesView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self, request, cutoff):
        cutoff = float(cutoff)
        if not(cutoff >= 0 and cutoff <= 100):
            return Response(data={'detail':'cutoff must be an integer between 0 and 100.'}, status=status.HTTP_400_BAD_REQUEST)
        cutoff_1 = float(cutoff)/100 
        if not request.session[query_fp_session_key]:
            return Response(data={'detail':'Query fingerprint not set.'}, status=status.HTTP_400_BAD_REQUEST)
        fp0 = request.session[query_fp_session_key]
        serializer = FingerPrintFromSmilesSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        data = serializer.data

        out_smiles_order = []
        
        for idx, smiles_mol in enumerate(data):
            m = Chem.MolFromSmiles(smiles_mol['smiles'])
            fp = Chem.RDKFingerprint(m)
            similarity = DataStructs.FingerprintSimilarity(fp0,fp)
            if similarity >= cutoff_1:
                 out_smiles_order.append({'smiles': smiles_mol['smiles'],'index': idx})
        
        return Response(data={'molecules': out_smiles_order}, status=status.HTTP_200_OK)

            