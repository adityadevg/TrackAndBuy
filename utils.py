from concurrent import futures
from consts import *
from tqdm import tqdm
import threading
import sys
import time
import requests
import notify

SYNC_LOCK = threading.Lock()


def thread_safe_print(text=""):
    with SYNC_LOCK:
        print(text, file=sys.stdout)


def safe_parallel_run(**kwargs):
    if not hasattr(kwargs, "symbol"):
        raise EnvironmentError(f"Missing symbol in {SYMBOLS}")

    symbol = kwargs["symbol"]
    with futures.ThreadPoolExecutor(max_workers=10) as executor:
        errors_map = {}
        all_results = []
        thread_safe_print(f">> Starting to query {symbol} data")
        future = executor.submit(kwargs["fn"], kwargs)
        errors_map[future] = symbol
        time.sleep(15)
        completed = futures.as_completed(errors_map)
        completed = tqdm(completed, total=len(SYMBOLS), desc=symbol)
        thread_safe_print(completed)
        for c in completed:
            result = c.result()
            if result:
                all_results += result
        thread_safe_print(f">> Finished querying {symbol} data")


def _get_str_from_obj(obj):
    return "&".join(f"{key}={obj[key]}" for key in obj)


def get_symbol_data(**kwargs):
    response = requests.get(API_URL % _get_str_from_obj(PARAMS))
    return response.json()["Global Quote"]["10. change percent"]


def send_notification(**kwargs):
    symbol = kwargs["symbol"]
    change_percent = kwargs["change_percent"]
    notify.send(f"{symbol} has now increased by {change_percent} today")
