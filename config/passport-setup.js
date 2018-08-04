const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth20'); 
const keys = require('./keys'); 
const User = require('../models/user-model'); 

passport.serializeUser((user, done) => {
    //grabbing the mongo id for ppl that dont have google account
    done(null, user.id); //sending out id in a cookie
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user.id);  
    })
}); 

passport.use(
    new GoogleStrategy({
    //options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //check if user already exists in our db
    User.findOne({googleId:profile.id}).then((currentUser) => {
        if(currentUser){
            //already have user
            console.log('user is: ', currentUser);
            done(null, currentUser)
        } else {
            //if not, create user in db
            new User({
                username: profile.displayName, //this is the profile object returned to us from google
                googleId: profile.id
            }).save().then((newUser) => {
                console.log('new user created:' + newUser); 
                done(null, newUser); 
            });
            }
        }); 
    })
)
