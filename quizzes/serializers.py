#serializers.py

from rest_framework import serializers

from .models import Quiz, QuestionBlock

class QuestionSerializer(serializers.ModelSerializer):
    choices = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = QuestionBlock
        fields = ('question', 'choices', 'correctChoice')


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Quiz
        fields = ('title', 'questions')
