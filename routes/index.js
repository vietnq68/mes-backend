var express = require('express');
var router = express.Router();
var Product = require('../models/product')
/* GET home page. */
router.get('/', function(req, res, next) {
  product = new Product({
    status: true,
    prevWorkstation: 1
  })
  product.save(err=>{
    if (err) console.log(err);
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
