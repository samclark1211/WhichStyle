var guideRenderer = require('../controllers/guiderenderer');

exports.index = function(req,res){
    var sectionToWalk = req.params.nextdirectory || "";
    var folderList = guideRenderer.getFolders(sectionToWalk);
    var fileList = guideRenderer.getFiles(sectionToWalk)
    res.render('home', {
      "folderList": folderList,
      "fileList": fileList
    });
},

exports.create = function(req, res) {
  res.render('create/createYaml');
},

exports.guide = function(req, res){
  var parsedYaml = guideRenderer.transform(req.params.guideName);
  res.render('guides/generic', parsedYaml);
};
