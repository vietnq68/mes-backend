var Reason = require('../models/reason');


module.exports = function() {
	reasonEndpoint = {
      router : function() {
        return require('./router_factory')(Reason);
      }
    }
    return reasonEndpoint;
}
