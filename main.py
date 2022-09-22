import utils
import time


class Main:
	def __init__(self, symbol):
		current_time = time.strftime("%Y/%M/%D-%H:%M:%S", time.localtime())
		change_percent = utils.safe_parallel_run(symbol=symbol, fn=utils.get_symbol_data)
		utils.thread_safe_print(f"{current_time}: {symbol}:{change_percent}")
		if change_percent > 5:
			utils.send_notification(symbol=symbol, change_percent=change_percent)
