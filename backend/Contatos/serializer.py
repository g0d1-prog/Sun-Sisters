from rest_framework import serializers

from .models import Contato

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = ('id', 'name', 'email', 'phone_number', 'message')
        read_only_fields = ['id']