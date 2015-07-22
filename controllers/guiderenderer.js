var parser = require('js-yaml');
var fs = require('fs');
var folderPath = "./guides"


module.exports = {
  //Todo: Use funct to determine file/folder :: DRY this up
  getFiles : function(pathToFile) {
    try {
      var path = folderPath + '/' + pathToFile || folderPath;
      var directoryContents = fs.readdirSync(path);
      var parsedFiles = [];
      directoryContents.forEach(function (f) {
        var filePath = path + "/" +f;
        var stats = fs.statSync(filePath);
        if (stats.isFile()) {
          parsedFiles.push(transform(path+"/"+f));
        }
      });
      return parsedFiles;
    } catch (e) {
      console.log("Failure to parse file list :~")
    }
  },


  getFolders : function(pathToFile) {
    try {
      var path = folderPath + '/' + pathToFile || folderPath;
      var directoryList = fs.readdirSync(path);
      var folderNames = [];
      directoryList.forEach(function(f) {
        var stat = fs.statSync(path + "/" + f);
        if (stat.isDirectory()) {
          var folderDetails = {};
          folderDetails.name=f.replace(/\_/, " ");
          folderDetails.link=f;
          folderNames.push(folderDetails);
        }
      });

      return folderNames;
    } catch(e) {
      console.error("Folder missing");
    }
  }
};

function transform (fileName) {
  try {
    var fileContents = fs.readFileSync(fileName, { encoding: 'utf8' });
  return parser.safeLoad(fileContents);
} catch(e) {
  console.error("Badly typed YAML");
  console.error("Offending file: " + fileName)
}

};
