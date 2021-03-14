const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
  users : {type: Number},
  invoices: {type: Number},
  issues: {type: Number},
  projects:{type: Number},
  sales:[{
    year:{type: Number},
    type:{type: String},
    totalSales:{type: Number}
  }],
  area:{
    "x-area":[{length:Number,width:Number}],
    "y-area":[{length:Number,width:Number}]
  }

});

module.exports = mongoose.model('project',projectSchema,'project');
