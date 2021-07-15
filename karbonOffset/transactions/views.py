from .models import Transaction
from .serializer import TransactionSerializer
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView

class AddTransaction(CreateAPIView):
    queryset=Transaction.objects.all()
    serializer_class = TransactionSerializer

class GetTransaction(APIView):
    def get(self,request):
        username = request.data.get("username")
        snippets = Transaction.objects.filter(uname=username)
        serializer = TransactionSerializer(snippets, many=True)
        return Response(serializer.data)