var Product = require('../models/product');
var productEndpoint = {
  list : function(req,res) {
    return Product.find({},function(err,products) {
      return res.json(products);
    });
  },

  create: function(req,res) {
    var product = new Product();
    product.status = req.body.status;
    product.prevWorkstation = req.body.prevWorkstation;

    return product.save(function(err,doc) {
      return res.json(doc);
    })
  }
}

module.exports = productEndpoint;
