const mongoose = require("mongoose");
const urlSchema = require('./schema');



module.exports = mongoose.model("shortSchema", urlSchema);