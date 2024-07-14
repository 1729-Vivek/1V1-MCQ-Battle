# serializers.py
from django.conf import settings
from rest_framework import serializers
from .models import Game, MCQ 

class OptionSerializer(serializers.Serializer):
    body = serializers.CharField(max_length=1000)
    is_correct = serializers.BooleanField()

class MCQSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    body = serializers.CharField(max_length=2000)
    explanation = serializers.CharField(max_length=2000)
    options = OptionSerializer(many=True)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ['id', 'first_name', 'last_name', 'email']


# Game Serializer
class GameSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    participants = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Game
        fields = ['game_id', 'owner', 'participants', 'status', 'created_at']