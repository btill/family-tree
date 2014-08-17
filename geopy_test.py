
from geopy.geocoders import GoogleV3

# key generated from the Google APIs console
# https://code.google.com/apis/console/?noredirect
api_key = 'AIzaSyDsQ_qGhhwpcPZJlCSNTHEfzsLoxagRDGo'

# instantiate GoogleV3 objet
gmaps = GoogleV3(api_key)

# latitude and longitude from address
address = '6363 Christie Ave. Emeryville, CA'
loc1 = gmaps.geocode(address)
print loc1.latitude, loc1.longitude

# reverse -- address from coordinates
coords = (loc1.latitude, loc1.longitude)
loc2 = gmaps.reverse(coords)
print loc2[0].address
