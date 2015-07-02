exports.index = function(req,res){
    res.render('home');
},

exports.guide = function(req, res){
  console.log(req)
  res.render('guides/'+ req.params.guideName)
};
