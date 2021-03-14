import mongoose from "mongoose";
import dbConst from "../constants/db.json";

export default class DBConfig {
    static init() {
      var mongoDB = dbConst.localhost;
      mongoose.set('useCreateIndex', true)
      mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
};

