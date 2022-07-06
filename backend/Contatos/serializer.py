from rest_framework import serializers

from .models import Contato

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = ('id', 'name', 'email', 'phone_number', 'event_date', 'guests_number')
        read_only_fields = ['id']