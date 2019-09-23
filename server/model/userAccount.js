const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  date: String,
  category: String,
  traffic: String
});
module.exports = mongoose.model("useraccount", accountSchema);
