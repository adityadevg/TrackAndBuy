import os

missing_env = []
MANDATORY_ENVS = ["FINANCE_ALPHAVANTAGE_API_KEY", "GMAIL_APP_TOKEN", "GMAIL_USERNAME", "PHONE_NUMBERS"]
for env in MANDATORY_ENVS:
	if not os.getenv(env):
		missing_env.append(env)

if missing_env:
	raise EnvironmentError(f"Missing environment variables: {missing_env}")

BASE_URL = "https://www.alphavantage.co"
API_KEY = os.getenv("FINANCE_ALPHAVANTAGE_API_KEY")
FUNCTION = "GLOBAL_QUOTE"
SMTP_GMAIL = "smtp.gmail.com"
GMAIL_APP_TOKEN = os.getenv("GMAIL_APP_TOKEN")
GMAIL_USERNAME = os.getenv("GMAIL_USERNAME")
PHONE_NUMBER = os.getenv("PHONE_NUMBER")

API_URL = f"{BASE_URL}/query?%s"
PARAMS = {
	"apikey": f"{API_KEY}",
	"function": f"{FUNCTION}"
}
CARRIERS = {
	"att": "@mms.att.net",
	"tmobile": "@tmomail.net",
	"verizon": "@vtext.com",
	"sprint": "@page.nextel.com",
	"rogers": "@sms.rogers.com",
	"chatr": "@sms.rogers.com",
}
SYMBOLS = os.getenv("PORTFOLIO_STOCKS", [])
