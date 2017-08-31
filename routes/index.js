//Router
module.exports = function(app) {
	var productEndpoint  = require('../endpoints/endpoint_product')();
  var workstationEndpoint = require('../endpoints/endpoint_workstation')();
	var reasonEndpoint = require('../endpoints/endpoint_reason')();
	var qualityEndpoint = require('../endpoints/endpoint_quality')();
	app.use('/products/',productEndpoint.router());
	app.use('/workstations/',workstationEndpoint.router());
	app.use('/reasons/',reasonEndpoint.router());
	app.use('/quality/',qualityEndpoint.router());
}
