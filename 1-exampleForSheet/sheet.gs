function myFunction() {
  // Retrieve values from source sheet.
  var srcSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var values = srcSheet.getDataRange().getValues(); // All values of Sheet1 are retrieved.
  //There are two ways to do repetition
  // number one
  var copyValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i][2]) {
      copyValues.push(values[i]); // Retrieve rows that checkbox is checked.
    }
  }
  //number tow
//  var copyValues = values.filter(function(e) {return e[2]});

  // If there are rows for copying, put the values to destination sheet.
  if (copyValues.length > 0) {
    var dstSpreadsheetId = "Your Id";
    var dstSheet = SpreadsheetApp.openById(dstSpreadsheetId).getSheetByName("Sheet1");
    dstSheet.getRange(dstSheet.getLastRow() + 1, 1, copyValues.length, 3).setValues(copyValues);
  }
}
function onEdit(e) {
  var range = e.range;
  if (range.getValue()) {
    var row = range.getRow();
    var copyValues = e.source.getRange("A" + row + ":C" + row).getValues();
    var dstSpreadsheetId = "Your Id";
    var dstSheet = SpreadsheetApp.openById(dstSpreadsheetId).getSheetByName("Sheet1");
    dstSheet.getRange(dstSheet.getLastRow() + 1, 1, 1, 3).setValues(copyValues);
  }
}


// dont forget install trigger to onEdit() - in currentProject's triggers set"onEdit"to run, "From spreadsheet" and "On edit" to "Events"