var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
exports.add = function(req, res, next) {
    res.render('new', {
        title: "/new",
    });
}
module.exports = router;