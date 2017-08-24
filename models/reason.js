var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reasonSchema = new Schema({
  type: String,
  code: String,
  name: String,
  count: Number,
});

var Reason = mongoose.model('Reason',reasonSchema);

module.exports = Reason;
