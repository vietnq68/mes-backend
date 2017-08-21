var WorkStation = require('../models/workstation');


module.exports = function() {
	workstationEndpoint = {
      router : function() {
        return require('./router_factory')(WorkStation);
      }
    }
    return workstationEndpoint;
}
