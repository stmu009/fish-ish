const express = require('express'); 
const authRoutes = require('./routes/auth-routes'); 
const profileRoutes = require('./routes/profile-routes'); 
const app = express(); 
const passportSetup = require('./config/passport-setup'); //when it runs it will require this file and runs the file
const mongoose = require('mongoose'); 
const keys = require('./config/keys'); 
const cookieSession = require('cookie-session'); 
const passport = require('passport'); 

//set up view engine
app.set('view engine', 'ejs'); 

//manage the user session - aka manage if the user is logged in or not
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //age of cookie that we send out
    keys: [keys.session.cookieKey]//encrypt the id in cookie
})); 

// initialize passport
app.use(passport.initialize()); 
app.use(passport.session()); 

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb'); 
}); 

//set up routes - we want to use some routes
app.use('/auth', authRoutes); //if you go to /auth then it will get you to login, logout
app.use('/profile', profileRoutes); 


//create home route
app.get('/', (req, res) => {
    res.render('home'); 
}); 

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000'); 
}); 