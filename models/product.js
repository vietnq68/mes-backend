var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  status: Boolean,
  prevWorkstation: Number
});

productSchema.methods = {

};

productSchema.statics = {

};

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
