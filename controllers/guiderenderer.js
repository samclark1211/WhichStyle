var parser = require('js-yaml');
var fs = require('fs');
var folderPath = "./guides"


module.exports = {
  transform: function (fileName) {
    try {
      var fileContents = fs.readFileSync(
        folderPath + '/' + fileName + '.yml',
        { encoding: 'utf8' }
      );
    return parser.safeLoad(fileContents);
  } catch(e) {
    console.error("Badly typed YAML");
    console.error("Offending file: " + fileName)
  }

  }
};
