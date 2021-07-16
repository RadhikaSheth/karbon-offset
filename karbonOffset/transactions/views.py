from .models import Transaction
from .serializer import TransactionSerializer
from rest_framework.generics import CreateAPIView,ListAPIView
from rest_framework.views import APIView
from datetime import datetime
from rest_framework.response import Response

class AddTransaction(APIView):
    def post(self,request):
        username = request.data.get("username")
        amount = request.data.get("amount")
        date = datetime.now()
        transactionData={"username":username, "date":date, "amount": amount}
        serializer = TransactionSerializer(data=transactionData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class GetTransaction(APIView):
    def post(self,request):
        name = request.data.get("username")
        snippets = Transaction.objects.filter(username=name)
        serializer = TransactionSerializer(snippets, many=True)
        return Response(serializer.data)