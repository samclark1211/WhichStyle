var guideRenderer = require('../controllers/guiderenderer');

exports.index = function(req,res){
    var fileList = guideRenderer.getList();
    res.render('home', {"fileList": fileList});
},

exports.create = function(req, res) {
  res.render('create/createYaml');
},

exports.guide = function(req, res){
  var parsedYaml = guideRenderer.transform(req.params.guideName);
  res.render('guides/generic', parsedYaml);
};
