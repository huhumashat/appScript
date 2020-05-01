function myFunction() {
  var values, horizontalAlignments, backgrounds, fontColors, fontWeights;
  var id = "Your id";
  [values, horizontalAlignments, backgrounds, fontColors, fontWeights] = getVeluesFromSpreadsheet(id);

  // Insert valuers from Spreadsheet as new table.
  var slidesPage = SlidesApp.getActivePresentation().getSlides()[0];
  var rows = values.length;
  var columns = values[0].length;
  var table = slidesPage.insertTable(rows, columns);
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < columns; c++) {
      var cell = table.getCell(r, c);
      cell.getText().setText(values[r][c]);
      cell.getFill().setSolidFill(backgrounds[r][c]);
      cell.getText().getTextStyle().setBold(fontWeights[r][c] == "bold" ? true : false);
      cell.getText().getTextStyle().setForegroundColor(fontColors[r][c]);
      var alignment = getAlighment(horizontalAlignments[r][c]);
      cell.getText().getParagraphStyle().setParagraphAlignment(alignment);
    }
  }
}

// Retrieve alignment for Slides.
function getAlighment(horizontalAlignments) {
  var alignment;
  switch(horizontalAlignments) {
    case "general-left":
      alignment = SlidesApp.ParagraphAlignment.START;
      break;
    case "general-right":
      alignment = SlidesApp.ParagraphAlignment.END;
      break;
    case "center":
      alignment = SlidesApp.ParagraphAlignment.CENTER;
      break;
  }
  return alignment;
}

// Retrieve values and formats from Spreadsheet.
function getVeluesFromSpreadsheet(id) {
  var sheet = SpreadsheetApp.openById(id).getSheetByName("Sheet1");
  var range = sheet.getRange("A1:C3");
  return [
    range.getDisplayValues(),
    range.getHorizontalAlignments(),
    range.getBackgrounds(),
    range.getFontColors(),
    range.getFontWeights()
  ];
}