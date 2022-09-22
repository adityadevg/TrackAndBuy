from apscheduler.schedulers.blocking import AsyncIOScheduler
from consts import SYMBOLS
from main import Main


scheduler = AsyncIOScheduler(timezone="America/Toronto")

@scheduler.add_job("cron",day_of_week="mon-fri",hour="17")
def scheduled_job():
    for symbol in SYMBOLS:
        Main(symbol)


scheduler.start()
