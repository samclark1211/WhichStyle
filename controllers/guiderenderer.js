var parser = require('js-yaml');
var fs = require('fs');
var folderPath = "./guides"


module.exports = {
  transform: function (fileName) {
    try {
      var fileContents = fs.readFileSync(
        folderPath + '/' + fileName + '.yaml',
        { encoding: 'utf8' }
      );
    return parser.safeLoad(fileContents);
  } catch(e) {
    console.error("Badly typed YAML");
    console.error("Offending file: " + fileName)
  }

  },

  getList : function() {
    try {
      var fileList = fs.readdirSync(folderPath)
      var fileNames = [];
      for (var i =0 ; i < fileList.length ; i++) {
        fileNames.push(fileList[i].replace(/\..*$/,""));
      }
      return fileNames;
    } catch(e) {
      console.error("Folder missing");
    }
  }
};
