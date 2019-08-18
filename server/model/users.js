const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: String,
    userName:String,
    mail: String,
    phone: Number,
    city:String,
    domain:Array
    
});
module.exports = mongoose.model('users', UsersSchema)