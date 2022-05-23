# import requests
# import json
# import pandas as pd
# from overview.models import Listing
# import csv
# import html_to_json
# import time
# def clock_update():
#     headers = {
#         "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
#         "accept-encoding": "gzip, deflate, br",
#         "accept-language": "en-US,en;q=0.9",
#         "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
#     }
#     us_states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Washington DC',
#                  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
#                  'Kentucky',
#                  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
#                  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
#                  'North Carolina',
#                  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
#                  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
#                  'Wisconsin', 'Wyoming']
#
#     for x in us_states:
#         state = x.replace(' ', '+')
#         url = f'https://www.airbnb.com/s/{state}/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&source=structured_search_input_header&search_type=filter_change'
#
#         all_listings = {}
#
#         for i in range(1):
#             try:
#                 offset = 20 * i
#                 new_url = url + f'&items_offset={offset}&section_offset=1'
#                 all_listings[x] = new_url
#                 # time.sleep(1)
#             except IndexError:
#                 pass
#
#         # Get the page through get() method
#         # for link in all_listings:
#
#         for country, link in all_listings.items():
#             # html_response = requests.get(url=link, headers=headers)
#             html_response = requests.get(url=all_listings[country], headers=headers)
#             art = str(country)
#
#             html = html_response.text
#
#             json_string = html_to_json.convert(html)
#
#             # # Access String Attribute With All Data
#             value = str(json_string['html'][0]['body'][0]['script'][25]['_value'])
#
#             # Convert String Into JSON Format
#             value = json.loads(value)
#
#             json_objects = json.dumps(value, indent=4)
#
#             def find_values(id, json_repr):
#                 results = {}
#
#                 def _decode_dict(a_dict):
#                     try:
#                         results['items'] = a_dict[id]
#                     except KeyError:
#                         pass
#                     return a_dict
#
#                 json.loads(json_repr, object_hook=_decode_dict)
#                 return results
#
#             final_value = find_values('items', json_objects)
#             items = final_value
#             final_json = json.dumps(items, indent=4)
#
#             with open("another_four.json", "w+") as outfile:
#                 outfile.write(final_json)
#
#             final_json = json.loads(final_json)
#             final_json = final_json['items']
#             json_new = '{"items": []}'
#             json_new = json_new.replace('items', art)
#             json_obj = json.loads(json_new)
#
#             for item in final_json:
#                 js_obj = {}
#                 print('\n\n\n\n\n')
#
#                 js_obj['id'] = item['listing']['id']
#                 js_obj['name'] = item['listing']['name']
#                 js_obj['average_rating'] = item['listing']['avgRating']
#                 js_obj['guests'] = item['listing']['homeDetails'][0]['title']
#                 js_obj['room_type'] = item['listing']['homeDetails'][1]['title']
#                 js_obj['house_type'] = item['listing']['roomTypeCategory']
#                 js_obj['beds'] = item['listing']['homeDetails'][2]['title']
#                 js_obj['baths'] = item['listing']['homeDetails'][3]['title']
#                 js_obj['is_new_listing'] = item['listing']['isNewListing']
#                 js_obj['title'] = item['listing']['title']
#                 js_obj['lat'] = item['listing']['lat']
#                 js_obj['lng'] = item['listing']['lng']
#                 js_obj['rate'] = item['pricingQuote']['rate']['amountFormatted']
#                 js_obj['amount'] = item['pricingQuote']['rate']['amount']
#                 js_obj['picture'] = item['listing']['contextualPictures'][0]['picture']
#                 js_obj['reviews_count'] = item['listing']['reviewsCount']
#
#                 json_obj[art].append(js_obj)
#
#             json_obj = json_obj[art]
#
#             for element in json_obj:
#                 element["country"] = art
#                 print(element)
#             data_frame = pd.json_normalize(json_obj)
#
#             data_frame.to_csv('data.csv', mode='a', header=False)
#
#             with open('data.csv', encoding='utf8') as file:
#                 reader = csv.reader(file)
#                 next(reader)
#
#                 for row in reader:
#                     try:
#                         listing = Listing(
#                             id=row[1] if row[1] != '' else None,
#                             name=row[2] if row[2] != '' else None,
#                             average_rating=row[3] if row[3] != '' else 0.0,
#                             guests=row[4] if row[4] != '' else None,
#                             room_type=row[5] if row[5] != '' else None,
#                             house_type=row[6] if row[6] != '' else None,
#                             beds=row[7] if str(row[7]) != '' else None,
#                             baths=row[8] if str(row[8]) != '' else None,
#                             is_new_listing=row[9] if str(row[9]) != '' else None,
#                             title=row[10] if str(row[10]) != '' else None,
#                             lat=row[11] if str(row[11]) != '' else None,
#                             lng=row[12] if str(row[12]) != '' else None,
#                             rate=row[13] if row[13] != '' else None,
#                             amount=row[14] if row[14] != '' else None,
#                             picture=row[15] if row[15] != '' else None,
#                             reviews_count=row[16] if row[16] != '' else 0,
#                             city=list(row[10].split(' in '))[-1] if str(row[10]) != '' else None,
#                             country=row[-1]
#                         )
#
#                         listing.save()
#                     except:
#                         pass
