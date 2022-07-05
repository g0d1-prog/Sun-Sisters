from django.contrib import admin
from .models import Contato

@admin.register(Contato)

class ContatoAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'status', 'contact_date')