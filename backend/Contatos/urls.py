from django.urls import path

from . import views

app_name = 'Contatos'

urlpatterns = [
    path('contacts/', views.ContatoAPIView.as_view(), name="Contacts List"),
]