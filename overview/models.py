from unicodedata import name
from django.db import models

# Create your models here.

class Listing(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=256, null=True)
    average_rating = models.DecimalField(decimal_places=1, max_digits=10, null=True)
    guests = models.CharField(max_length=256, null=True)
    room_type = models.CharField(max_length=256, null=True)
    house_type = models.CharField(max_length=256, null=True)
    beds = models.CharField(max_length=256, null=True)
    baths = models.CharField(max_length=256, null=True)
    is_new_listing = models.BooleanField()
    title = models.CharField(max_length=256, null=True)
    lat = models.DecimalField(decimal_places=7, max_digits=10, null=True)
    lng = models.DecimalField(decimal_places=7, max_digits=10, null=True)
    rate = models.CharField(max_length=256, null=True)
    amount = models.IntegerField(null=True)
    city = models.CharField(max_length=256, null=True, blank=True)
    country= models.CharField(max_length=256, null=True, blank=True)
    picture = models.CharField(max_length=256, null=True)
    reviews_count = models.IntegerField(null=True)

    
    def __str__(self):
        return self.name

    class Meta:
        ordering=['id', 'country', 'city', 'name','title',  'average_rating', 'room_type', 'house_type', 'beds', 'lat', 'lng', 'rate', 'amount', 'picture', 'reviews_count']

