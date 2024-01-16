// Retrieve the current time, for example for use in a chat bot !time command
function doGet() {
  const params = e.parameter
  const timezone = params.tz || 'GMT'
  const format = params.format || 'HH:mm'
  const now = new Date()
  // ref: https://developers.google.com/apps-script/reference/utilities/utilities#formatDate(Date,String,String)
  const formatted = Utilities.formatDate(now, timezone, format)
  const output = ContentService.createTextOutput(formatted)
  return output
}
