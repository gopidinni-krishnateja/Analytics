const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const areaSchema = new Schema({

  area:{
    "x-area":[{length:Number,width:Number}],
    "y-area":[{length:Number,width:Number}]
  }

});

module.exports = mongoose.model('area',areaSchema,'area');
