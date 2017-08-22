var Product = require('../models/product');

module.exports = function() {
	var productEndpoint = {
  		finishProduct: function(req,res) {
  			var io = req.app.get('socketio');
  			io.emit('finished_product_event','finish product');
  			return res.json("OK");
  		},

			errorProduct: function(req,res) {
  			var io = req.app.get('socketio');
  			io.emit('error_product_event','error product');
  			return res.json("OK");
  		},

			passWorkstation: function(req,res) {
				var filter = {}
				filter['_id'] = req.params.id;
				data = req.body;
				return model.findOne(filter,function(err,instance) {
					var io = req.app.get('socketio');
					io.emit('update_event',instance);
					return res.json("OK");
				})
  		},

  		router: function() {
   			var router = require('./router_factory')(Product);
   			router.post('/:id/finished',this.finishProduct);
				router.post('/:id/error',this.errorProduct);
				router.post('/:id/pass_wrkstn',this.passWorkstation);
    		return router;
  		}
	}
	return productEndpoint;
};
