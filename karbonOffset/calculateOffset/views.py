from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class GenerateOffsetAmount(APIView):
    def post(self,request):
        # delivery
        distance = request.data[0].get("details").get("distance")
        mode = request.data[0].get("details").get("mode")
        metricTonCO2e = 0.00
        if mode == "bike":
            metricTonCO2e = float(distance * 0.01) / float(90)
        trees = float(metricTonCO2e*6.00) / float(1.10231)
        amount = float(trees * 400.00) 

        #packaging
        typeOfPackaging = request.data[1].get("details").get("type")
        weight = request.data[1].get("details").get("weight")

        if typeOfPackaging == "plastic":
            metricTonCO2e += float(weight * 6) / float(1000000000)
        trees = float(metricTonCO2e*6.00) / float(1.10231)
        amount += float(trees * 400.00) 

        OffsetAmount = {
            "amount":float(amount),
            "carbon":metricTonCO2e
        }
        return Response(OffsetAmount)
    


