const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const salesSchema = new Schema({

  sales:{
   sales:[
     {
       "type":String,
       "year":String,
       "sales":Number
     }
   ]
  }

});

module.exports = mongoose.model('sales',salesSchema,'sales');
