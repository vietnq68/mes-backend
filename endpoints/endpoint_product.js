var Product = require('../models/product');

module.exports = function() {
	var productEndpoint = {
  		finishProduct: function(req,res) {
  			var io = req.app.get('socketio');
  			io.emit('finished_product_event','finish product');
  			return res.json("OK");
  		},
  		router: function() {
   			var router = require('./router_factory')(Product);
   			router.post('/:id/finished',this.finishProduct);
    		return router;
  		}
	}
	return productEndpoint;
};
