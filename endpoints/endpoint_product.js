var Product = require('../models/product');


var productEndpoint = {

  test: function(req,res) {
    return res.json('Test')
  },

  router: function() {
    var router = require('./router_factory')(Product);
    
    router.get('/test',this.test);
    
    return router;
  }
}


module.exports = productEndpoint;
