from . import views
from django.urls import path,include

urlpatterns = [
    path('getOffset/', views.GenerateOffsetAmount.as_view()),
    # path('getOffset/',views.add_transaction)
]