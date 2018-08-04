const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    username: String, 
    googleId: String //remember the user if logged in before
}); 

//create the model
const User = mongoose.model('user', userSchema); 


module.exports = User; 

