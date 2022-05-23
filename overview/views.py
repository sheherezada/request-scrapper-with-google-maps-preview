from django.shortcuts import render
from django.shortcuts import render
from overview.models import Listing
from json import dumps
from django.core import serializers


# Create your views here.
def index(request):
    # one_bedrooms = Listing.objects.filter(bedrooms=1).values_list('bedrooms', flat=True)
    # print(Listing.objects.filter(is_new_listing=False))
    json_serializer = serializers.get_serializer("json")()
    rooms = json_serializer.serialize(Listing.objects.filter(is_new_listing=False), ensure_ascii=False)
    rooms_initial = json_serializer.serialize(Listing.objects.filter(is_new_listing=False), ensure_ascii=False)
    # print(rooms)
    query_2 = request.GET.get('query_2')
    query_2 = str(query_2)
    query_1= request.GET.get('query_1')
    query_1 = str(query_1)


    if query_2:
        if query_2 in rooms:

            rooms = json_serializer.serialize(Listing.objects.filter(is_new_listing=False,country__icontains=query_2), ensure_ascii=False)

            if query_1:
                rooms = json_serializer.serialize(
                    Listing.objects.filter(is_new_listing=False, country__icontains=query_2,city__icontains=query_1), ensure_ascii=False)


        entire_home = round((len(rooms) - rooms.count('entire_home')) / 100)
        private_room = round((len(rooms) - rooms.count('private_room')) / 100)



        return render(request, 'index.html', context={'rooms': rooms})
    else:
        entire_home = 100
        return render(request, 'index.html', context={'rooms': rooms})

