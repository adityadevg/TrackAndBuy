from apscheduler.schedulers.blocking import BlockingScheduler
from consts import SYMBOLS
from main import Main


scheduler = BlockingScheduler()

@scheduler.add_job("cron",day_of_week="mon-fri",hour="17")
def scheduled_job():
    for symbol in SYMBOLS:
        Main(symbol)


scheduler.start()
