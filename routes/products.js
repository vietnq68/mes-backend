var express = require('express');
var router = express.Router();
var productEndpoint = require('../endpoints/endpoint_product')

router.get('/',productEndpoint.list);
router.post('/',productEndpoint.create)

module.exports = router;
