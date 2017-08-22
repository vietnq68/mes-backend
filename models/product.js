var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  status: Boolean,
  next_wrkstn_id: Schema.Types.ObjectId,
  checked_at_next: Boolean,
  pcb_id: String,
  scan_time: Date,
},{strict: false});

productSchema.methods = {

};

productSchema.statics = {

};

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
