var Product = require('../models/product');
var Reason = require('../models/reason');

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
					var io = req.app.get('socketio');
					io.emit('update_event',req.body);
					return res.json("OK");
  		},
			processWorkstation: function(req,res) {
				var io = req.app.get('socketio');
				io.emit('workstation_process',req.body);
				return res.json("OK");
			},

			paretoChart: function(req,res) {
				return Reason.find({}).then(function(data){
					// var paretoData ={}
					// var value = []
					// var label = []
					// for (var d in data){
					// 	value.push(data[d]['count'])
					// 	label.push(data[d]['name'])
					// }
					// paretoData['value'] = value
					// paretoData['label'] = label
					// console.log(paretoData)
					var io = req.app.get('socketio');
					io.emit('paretoChart',data);
					return res.json("OK");
				})
				// return res.json("OK");
			},

  		router: function() {
   			var router = require('./router_factory')(Product);
   			router.post('/:id/finished',this.finishProduct);
				router.post('/:id/error',this.errorProduct);
				router.put('/:id/pass_wrkstn',this.passWorkstation);
				router.put('/:id/process',this.processWorkstation);
				router.put('/:id/pareto',this.paretoChart);
    		return router;
  		}
	}
	return productEndpoint;
};
