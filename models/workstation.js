var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var wrkStnSchema = new Schema({
  type: String,
  is_active: Boolean,
  next_wrkstn_id: Schema.Types.ObjectId,
  checked_at_next: Boolean,
  name: String,
});

var WorkStation = mongoose.model('WorkStation',wrkStnSchema);

module.exports = WorkStation;
