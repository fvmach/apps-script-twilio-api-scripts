# apps-script-twilio-api-scripts
This repository lists useful scripts for invoking Twilio APIs from Google Sheets and other GSuite Apps that support Apps Script.

## Google Sheets WhatsApp Sender with Twilio
This script allows you to send WhatsApp messages using Twilio's API directly from a Google Sheet. It retrieves data from the sheet, constructs the necessary payload, and sends the messages via Twilio.

### Setup Instructions
#### Prerequisites
A Twilio account with an active WhatsApp sender.
A Google Sheet with columns for recipient numbers, sender ID, content SID, and content variables.
Google Sheet Setup

#### Create a Google Sheet with the following columns:
Column A: Recipient WhatsApp number (e.g., +1234567890)
Column B: Messaging Service SID (MGXXXXXXXXXXX)
Column C: Content SID (HXXXXXXXXXXX)
Column D: Content Variables (must be a valid JSON string)

#### Script Setup
Open Google Sheets:

Go to Extensions > Apps Script.
Copy and paste the "apps-script-twilio-api-scripts" script into the Apps Script editor.

Set Twilio Credentials:

Run the setTwilioCredentials function to store your Twilio credentials securely.
Replace YOUR_TWILIO_API_KEY, YOUR_TWILIO_API_SECRET, and YOUR_TWILIO_ACCOUNT_SID with your actual Twilio credentials.
Run the Script:

Use the sendWhatsAppMessages function to send messages. This function retrieves data from the Google Sheet and sends the messages via Twilio.
How to Use
Fill in the Google Sheet:

Ensure your Google Sheet has the necessary data in the correct columns.
Run the Script:

Go to Extensions > Apps Script and run the sendWhatsAppMessages function.
Check the logs (View > Logs) for details on the execution and any errors.

#### Troubleshooting
Check Logs: If you encounter any issues, check the logs for detailed error messages.
Content Variables: Ensure that the content variables in your Google Sheet are valid JSON strings.
