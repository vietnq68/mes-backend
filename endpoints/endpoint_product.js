var Product = require('../models/product');
var productEndpoint = {
  list : function(req,res, next) {
    return Product.find({},function(err,products) {
      return res.json(products);
    });
  }
}

module.exports = productEndpoint;
