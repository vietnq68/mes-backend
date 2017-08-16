var WorkStation = require('../models/workstation');

workstationEndpoint = {
  router : function() {
    return require('./router_factory')(WorkStation);
  }
  
}

module.exports = workstationEndpoint;
