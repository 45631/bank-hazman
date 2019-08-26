const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  userId: Number,
  date: String,
  category: String,
  to: Number,
  pull: Boolean,
  push: Boolean
});
module.exports = mongoose.model("useraccount", accountSchema);
