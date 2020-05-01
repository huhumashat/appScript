function createFile() {
  DriveApp.createFile("sample.txt", "sample text", MimeType.PLAIN_TEXT);
}

function readFile(){
var fileName = "sample.txt";
var files = DriveApp.getFilesByName(fileName);
var file = files.next();
var content = file.getBlob().getDataAsString();
  
Logger.log(content)
}

function updateFile(){
var fileName = "sample.txt";
var files = DriveApp.getFilesByName(fileName);
var file = files.next();
  
file.setContent("new sample text");
var content = file.getBlob().getDataAsString();
  
Logger.log(content)
}

function deleteFile(){
var fileName = "sample.txt";
var files = DriveApp.getFilesByName(fileName);
var file = files.next();
file.setTrashed(true);

}