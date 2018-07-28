// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Fish = require('./models/home');
var routes = require("./routes")
// Set up port
var PORT = process.env.PORT || 5000;

// Instantiate our Express App
var app = express();

// Set up an Express Router
var router = express.Router();

// Require our routes file pass our router object
// require("./routes")(router);
app.use(routes);

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));


// Use bodyParser in out app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Have every request go through our router middleware
app.use(router);

// if deployed use the deployed database. Otherwise use the local mongoHeadlines db
var db = process.env.MONGODB_URI || "mongodb://localhost/Fish";

// Connect Mongoose to db
mongoose.connect(db, function (error) {
    // Log any errors connection with mongoose
    if (error) {
        console.log(error);
    }
    // or log a success message
    else {
        console.log("mongoose connection is successfull");
        Fish.create({
            fishName:"Bob"
        })
    }
});

// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});