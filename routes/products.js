var express = require('express');
var router = express.Router();
var productEndpoint = require('../endpoints/endpoint_product')

router.get('/',productEndpoint.list);

module.exports = router;
