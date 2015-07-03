var guideRenderer = require('../controllers/guiderenderer');

exports.index = function(req,res){
    res.render('home');
},

exports.guide = function(req, res){
  var parsedYaml = guideRenderer.transform(req.params.guideName);
  res.render('guides/generic', parsedYaml);
};
