'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: String,
  cost: {type:Number, default:0, required:true},
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Player', PlayerSchema);
