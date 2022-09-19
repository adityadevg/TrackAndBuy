from consts import *
from email.message import EmailMessage
import smtplib


def send(message="Unable to get message contents"):
    msg = EmailMessage()
    msg.set_content(message)
    msg["Subject"] = "Buy stocks now!"
    msg["From"] = f"{GMAIL_USERNAME}"
    # Replace the number with your own, or consider using an argument\dict for multiple people.
    msg["To"] = f"{PHONE_NUMBER}{CARRIERS['chatr']}"

    # Establish a secure session with gmail's outgoing SMTP server using your gmail account
    server = smtplib.SMTP_SSL(SMTP_GMAIL, 465)
    server.ehlo()
    server.login(GMAIL_USERNAME, GMAIL_APP_TOKEN)
    server.set_debuglevel(1)
    # Send text message through SMS gateway of destination number
    server.send_message(msg)
    server.quit()
