var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var qualitySchema = new Schema({
  name: String,
  success_count: Number,
  error_count: Number,
});

var Quality = mongoose.model('Quality',qualitySchema);

module.exports = Quality;
