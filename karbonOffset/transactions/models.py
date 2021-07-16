from django.db import models

# Create your models here.
class Transaction(models.Model):
    username = models.name = models.CharField(max_length=200)
    date = models.name = models.DateTimeField()
    amount = models.name = models.CharField(max_length=100)

    def __str__(self):
        return self.name