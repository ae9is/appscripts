// Pass in some text and have it translated from source to target language
function doGet(e) {
  const params = e.parameter
  const text = params.text
  let translatedText = ''
  if (text) {
    // ref: https://developers.google.com/apps-script/reference/language/language-app#translate(String,String,String)
    translatedText = LanguageApp.translate(text, params.source, params.target)
  }
  const output = ContentService.createTextOutput()
  output.setMimeType(ContentService.MimeType.TEXT)
  output.setContent(translatedText)
  return output
}

// Alternative using post
function doPost(e) {
  const params = e.parameter
  const text = e.postData.contents
  let translatedText = ''
  if (text) {
    translatedText = LanguageApp.translate(text, params.source, params.target)
  }
  const output = ContentService.createTextOutput()
  output.setMimeType(ContentService.MimeType.TEXT)
  output.setContent(translatedText)
  return output
}
