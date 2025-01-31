var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", function(req, res,next ) {
  //res.render() is used for rendering the view
  //views are located in the views folder
  //about is the name of the view
  res.render("about", { title: "About" });
});

module.exports = router;
