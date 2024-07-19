function sendWhatsAppMessages() {
  // Get the stored credentials
  const scriptProperties = PropertiesService.getScriptProperties();
  const API_KEY = scriptProperties.getProperty('TWILIO_API_KEY');
  const API_SECRET = scriptProperties.getProperty('TWILIO_API_SECRET');
  const ACCOUNT_SID = scriptProperties.getProperty('TWILIO_ACCOUNT_SID');
  const BASE_URL = 'https://api.twilio.com/2010-04-01/Accounts/' + ACCOUNT_SID + '/Messages.json';

  // Get the active sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Iterate through each row in the sheet (starting from the second row)
  for (let i = 1; i < data.length; i++) {
    const to = 'whatsapp:' + data[i][0];
    const from =  data[i][1];
    const contentSid = data[i][2];
    const contentVariables = data[i][3];

    // Log content variables for debugging
    Logger.log('Original Content Variables for row ' + (i + 1) + ': ' + contentVariables);

    // Ensure ContentVariables is a valid JSON string
    const contentVariablesString = JSON.stringify(JSON.parse(contentVariables));

    // Prepare the payload for the Twilio API
    const payload = {
      To: to,
      From: from,
      ContentSid: contentSid,
      ContentVariables: contentVariablesString
    };

    // Log the payload for debugging
    Logger.log('Payload for row ' + (i + 1) + ': ' + JSON.stringify(payload));

    // Send the message via the Twilio API
    const options = {
      method: 'post',
      payload: payload,
      headers: {
        'Authorization': 'Basic ' + Utilities.base64Encode(API_KEY + ':' + API_SECRET),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(BASE_URL, options);
    const responseCode = response.getResponseCode();

    // Log the response for each message
    Logger.log('Response Code for row ' + (i + 1) + ': ' + responseCode);
    Logger.log('Response: ' + response.getContentText());

    if (responseCode !== 201) {
      Logger.log('Error for row ' + (i + 1) + ': ' + response.getContentText());
    }
  }
}
