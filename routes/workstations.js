var express = require('express');
var router = express.Router();
var workstationEndpoint = require('../endpoints/endpoint_workstation');

router.get('/',workstationEndpoint.list);
router.post('/',workstationEndpoint.create)

module.exports = router;
