const mongoose = require(`mongoose`);
const testSchema = new mongoose.Schema({name:String,duc:String}, { collection: "admin"});
module.exports = mongoose.model(`admin`, testSchema);;
