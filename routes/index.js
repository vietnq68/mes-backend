var express = require('express');

var productEndpoint  = require('../endpoints/endpoint_product')
var workstationEndpoint = require('../endpoints/endpoint_workstation')

//Router
module.exports = function(app) {
	app.use('/products',productEndpoint.router());
	app.use('/workstations',workstationEndpoint.router());
	return app;	
}
