function moveFile(){
  // you can move file or copy file :)
  var fileName = "sample.txt";
var destinationFolderName = "appScript";

var files = DriveApp.getFilesByName(fileName);
var file = files.next();
var fileParent = file.getParents().next();

var dstFolder = DriveApp.getFoldersByName(destinationFolderName).next();

dstFolder.addFile(file);
fileParent.removeFile(file);
}

function searchFiles(){
  // search files have word simpe
  //  var searchQuery = "title contains 'sample'";
  // search text file
  //  var searchQuery = "mimeType = 'text/plain'";
  // search files in a folder
  //  var searchQuery = "'### folder ID ###' in parents";
  // search files in trash box
  var searchQuery = "trashed = true";
  var files = DriveApp.searchFiles(searchQuery);
  while (files.hasNext()) {
    var file = files.next();
    Logger.log(file.getName())
  }
}

function searchFiles2(){
// Use MimeType enum to log the name of every Google Doc in the user's Drive.
var docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
while (docs.hasNext()) {
 var doc = docs.next();
 Logger.log(doc.getName())
}
}