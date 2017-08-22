//Router
module.exports = function(app) {
	var productEndpoint  = require('../endpoints/endpoint_product')();
  var workstationEndpoint = require('../endpoints/endpoint_workstation')();
	var reasonEndpoint = require('../endpoints/endpoint_reason')();
	app.use('/products/',productEndpoint.router());
	app.use('/workstations/',workstationEndpoint.router());
	app.use('/reasons/',reasonEndpoint.router());
}
