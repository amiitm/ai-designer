var mongoose = require("mongoose");

var layoutSchema = new mongoose.Schema({
    id: String,
    content : String,
});

module.exports = mongoose.model("layout", layoutSchema);