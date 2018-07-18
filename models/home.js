//this is where we need to determine what data we want to caputure - points? lives? time? etc. 

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var homeSchema = new Schema({
    fishName: {
        type: String,
        required: true,
        unique: true
    },

});

var Fish = mongoose.model("Fish", homeSchema);

module.exports = Fish;