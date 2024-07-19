# apps-script-twilio-api-scripts

This repository lists useful scripts for invoking Twilio APIs from Google Sheets and other GSuite Apps that support Apps Script.

## Google Sheets WhatsApp Sender with Twilio

This script allows you to send WhatsApp messages using Twilio's API directly from a Google Sheet. It retrieves data from the sheet, constructs the necessary payload, and sends the messages via Twilio.

### Setup Instructions

#### Prerequisites

- A Twilio account with an active WhatsApp sender.
- A Google Sheet with columns for recipient numbers, sender ID, content SID, and content variables.

#### Google Sheet Setup

1. **Create a Google Sheet with the following columns:**
   - **Column A**: Recipient WhatsApp number (e.g., `+1234567890`)
   - **Column B**: Messaging Service SID (e.g., `MGXXXXXXXXXXX`)
   - **Column C**: Content SID (e.g., `HXXXXXXXXXXX`)
   - **Column D**: Content Variables (must be a valid JSON string)

#### Script Setup

1. **Open Google Sheets:**
   - Go to `Extensions > Apps Script`.
   - Copy and paste the script from this repository into the Apps Script editor.

2. **Set Twilio Credentials:**
   - Run the `setTwilioCredentials` function to store your Twilio credentials securely.
   - Replace `YOUR_TWILIO_API_KEY`, `YOUR_TWILIO_API_SECRET`, and `YOUR_TWILIO_ACCOUNT_SID` with your actual Twilio credentials.

3. **Run the Script:**
   - Use the `sendWhatsAppMessages` function to send messages. This function retrieves data from the Google Sheet and sends the messages via Twilio.

### How to Use

1. **Fill in the Google Sheet:**
   - Ensure your Google Sheet has the necessary data in the correct columns.

2. **Run the Script:**
   - Go to `Extensions > Apps Script` and run the `sendWhatsAppMessages` function.
   - Check the logs (`View > Logs`) for details on the execution and any errors.

### Troubleshooting

- **Check Logs**: If you encounter any issues, check the logs for detailed error messages.
- **Content Variables**: Ensure that the content variables in your Google Sheet are valid JSON strings.

### Additional Information

#### Twilio WhatsApp API

Twilio's WhatsApp API allows you to send and receive messages using WhatsApp. You need to have an approved WhatsApp sender and a Messaging Service SID to send messages.

Learn more: https://www.twilio.com/docs/whatsapp

#### Twilio Content API

Twilio's Content API allows you to manage message content templates that you can use for various channels, including WhatsApp. Each template has a unique Content SID, and you can pass dynamic variables to customize the content for each recipient.

Learn more: https://www.twilio.com/docs/content/content-api-resources


#### Script Properties UI

Google Apps Script provides a Properties Service to store and retrieve key-value pairs. You can use Script Properties to store your Twilio credentials securely. To access the Script Properties UI:

1. **Open Google Apps Script Editor:**
   - Go to `Extensions > Apps Script`.

2. **Access Project Settings:**
   - Click on the gear icon (Project Settings) on the left panel.

3. **Script Properties:**
   - Scroll down to the "Script Properties" section.
   - Click on "Add script property" to add each property:
     - `TWILIO_API_KEY`
     - `TWILIO_API_SECRET`
     - `TWILIO_ACCOUNT_SID`
   - Enter the respective values for each property.

This setup ensures that your credentials are stored securely and not hard-coded into your script.

For the complete script and more details, please refer to the [script in this repository](https://github.com/fvmach/apps-script-twilio-api-scripts/blob/main/send_whatsapp_content_teamplate.gs).
