from django.urls import path

from . import views

app_name = 'contactForm'

urlpatterns = [
    path('contacts/', views.ContactAPIView.as_view(), name="Contacts List"),
]