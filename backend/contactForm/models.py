from django.db import models

# Create your models here.

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name= models.CharField(max_length=255)
    email=models.EmailField(max_length=255)
    phone_number=models.IntegerField()
    message=models.TextField()
    
    class Meta:
        ordering = ['name', 'email', 'phone_number', 'message']
        
    def __str__(self):
        return "Contato de: " + self.name