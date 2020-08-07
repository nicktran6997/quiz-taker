from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from .models import Quiz
from .serializers import *

# Create your views here.
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    # #index Quizzes
    # @api_view(['GET'])
    # def list(self, request):
    #     queryset = Quiz.objects.all()
    #     serializer = QuizSerializer(queryset, context={'request': request}, many=True)
    #     return Response(serializer.data)
    
    # #show a specific Quiz
    # @api_view()
    # def retrieve(self, request, pk=None):
    #     queryset = Quiz.objects.all()
    #     quiz = get_object_or_404(queryset,pk=pk)
    #     serializer = QuizSerializer(quiz)
    #     return Response(serializer.data)
