from django import forms
from overview.models import Listing


class SearchRoomForm(forms.Form):
    city = forms.CharField(
        max_length=15,
        required = False)

    country = forms.CharField(max_length=15)


    def __init__(self, *args, **kwargs):
        super(SearchRoomForm, self).__init__(*args, **kwargs)
        self.fields['city'].widget.attrs['placeholder'] = self.fields['city'].label or 'City...'
        self.fields['country'].widget.attrs['placeholder'] = self.fields['country'].label or 'Country...'

