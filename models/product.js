var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  status: String,
  current_wrkstn_id:Schema.Types.ObjectId,
  next_wrkstn_id: Schema.Types.ObjectId,
  checked_at_next: Boolean,
  pcb_id: String,
  scan_time: Date,
  error_reason:Schema.Types.ObjectId,
  process:String,
},{strict: false});

productSchema.methods = {

};

productSchema.statics = {

};

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
