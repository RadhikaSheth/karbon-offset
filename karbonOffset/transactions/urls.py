
from django.urls import path

from . import views

urlpatterns = [
    path('view/', views.AddTransaction.as_view()),
    path('create/', views.GetTransaction.as_view()),
]