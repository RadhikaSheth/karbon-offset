
from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.AddTransaction.as_view()),
    path('view/', views.GetTransaction.as_view()),
]