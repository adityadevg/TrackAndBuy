from consts import *
import requests
import sys
import notify


def get_str_from_obj(obj):
	return "&".join(f"{key}={obj[key]}" for key in obj)


if len(sys.argv) != 2:
	raise ValueError("Needs only 1 argument - Company Tickr. Eg: python main.py VUG")

symbol = sys.argv[1]
PARAMS["symbol"] = symbol
response = requests.get(API_URL % get_str_from_obj(PARAMS))
change_percent = response.json()["Global Quote"]["10. change percent"]
notify.send(f"{symbol} has now increased by {change_percent} today")
