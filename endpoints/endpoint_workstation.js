var WorkStation = require('../models/workstation');

workstationEndpoint = {
  list: function(req,res) {
    return WorkStation.find({},function(err,workstations) {
      return res.json(workstations);
    });
  },
  create: function(req,res) {
    var wrkstn = new WorkStation();
    wrkstn.type = req.body.type;
    wrkstn.is_active = true;
    wrkstn.next_wrkstn_id = req.body.next_wrkstn_id;
    return wrkstn.save(function(err,doc) {
      return res.json(doc);
    })
  }
}

module.exports = workstationEndpoint;
