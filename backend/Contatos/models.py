from django.db import models
from django.contrib import admin
from django.utils.html import format_html

# Create your models here.

class Contato(models.Model):
    STATUS_CHOICES = (
        ('P', 'Pendente'),
        ('EP', 'Em processo'),
        ('C','Contatado'),
    )
    
    id = models.AutoField(primary_key=True)
    name= models.CharField(verbose_name="Nome", max_length=255)
    email=models.EmailField(verbose_name="E-mail", max_length=255)
    phone_number=models.CharField(verbose_name="Número de telefone", max_length=255)
    message=models.TextField(blank=True, null = True, verbose_name="Mensagem")
    status_field = models.CharField(verbose_name= "Status", max_length=2, choices=STATUS_CHOICES ,default="")
    contact_date = models.DateTimeField(verbose_name="Data de contato", auto_now=True, editable=False)
    
    @admin.display
    def status(self):
        if self.status_field == 'P':
            return format_html(
                '<span style="background-color: #ff0000; color: #ffffff;">Pendente</span>'
            )
        elif self.status_field == 'EP':
            return format_html(
                '<span style="background-color: #ffff00;">Em processo</span>',
            )
        elif self.status_field == 'C':
            return format_html(
                '<span style="background-color: #00ff00;">Contatado</span>',
            )
        else:
            return format_html(
                '<span font-weight= bold>Sem Status</span>'
            )
    
    class Meta:
        ordering = ['name', 'email', 'phone_number', 'message']
        
    def __str__(self):
        return "Contato de: " + self.name