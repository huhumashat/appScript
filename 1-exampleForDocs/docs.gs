function myFunction() {
  // Copy template document.
  var docName = "sampleDoc"; // Filename of copied template document.
  var tempDocId = "### template document ID ###"; // Template document ID.
  var id = DriveApp.getFileById(tempDocId).makeCopy(docName).getId();


  // Replace text of copied document.
  var document = DocumentApp.openById(id);
  var body = document.getBody();
  body.replaceText("{title}", "Weloce to app script");
  body.replaceText("{name}", "Hussein Mashat");


  // Save document.
  document.saveAndClose(); // IMPORTANT! Reflect edited document.


  // Send PDF file as email.
  var blob = document.getBlob(); // When blob is retrieved, mimeType is converted to PDF.
  var obj = {to: "email address", subject: "sample subject", body: "sample body", attachments: [blob]};
  MailApp.sendEmail(obj);
}