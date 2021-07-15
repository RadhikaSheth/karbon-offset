from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class GenerateOffsetAmount(APIView):
    def post(self,request):
        distance = request.data.get("distance")
        mode = request.data.get("mode")
        metricTonCO2e = 0.00
        if mode == "bike":
            metricTonCO2e = float(distance * 0.01) / float(90)
        trees = float(metricTonCO2e*6.00) / float(1.10231)
        amount = float(trees * 400.00) 
        OffsetAmount = {
            "amount":float(amount)
        }
        return Response(OffsetAmount)
    


