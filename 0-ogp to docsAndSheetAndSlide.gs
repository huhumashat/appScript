function sheet() {
  // open parent google sheet of container-bound script
  //  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // open google sheet by file id
  var spreadsheet = SpreadsheetApp.openById("your id");
  //get value or values
  var value = spreadsheet.getSheetByName("Sheet1").getRange("A1").getValue();
  var values = spreadsheet.getSheetByName("Sheet1").getRange("A1:C3").getValues();
  //put value or values
  var value = "a1";
  spreadsheet.getSheetByName("Sheet1").getRange("A1").setValue(value);

  var values = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];
  spreadsheet.getSheetByName("Sheet1").getRange("A1:C3").setValues(values); 
}

function docs(){
  // open parent google sheet of container-bound script
  //  var document = DocumentApp.getActiveDocument();
  // open google sheet by file id
  var document = DocumentApp.openById("your id");
  //get value
  var text = document.getBody().getText();
  //put value
  var text = "sample";
  document.getBody().setText(text);
  document.getBody().appendParagraph(text+"1");

}

function slide(){
// open parent google sheet of container-bound script
//  var slides = SlidesApp.getActivePresentation();
  // open google sheet by file id
  var slides = SlidesApp.openById("your id");
  // get value
  var string = slides.getSlides()[0].getShapes()[1].getText().asString();
  // put value
  var text = "sample";
  slides.getSlides()[0].getShapes()[0].getText().setText(text);

}