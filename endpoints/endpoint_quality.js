var Quality = require('../models/quality');


module.exports = function() {
	qualityEndpoint = {
      router : function() {
        return require('./router_factory')(Quality);
      }
    }
    return qualityEndpoint;
}
