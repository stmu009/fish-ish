const router = require('express').Router(); //created this instance of the router that has these routes attached to it
//and then we are exporting with all of these routes attached to it to app.js
const passport = require('passport'); 

//auth login
router.get('/login', (req, res) => {
    res.render('login'); //rendering the login page or this route
});

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('logging out'); 
}); 


//auth with google
router.get('/google', 
(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*"); //My frontend APP domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
},
passport.authenticate('google', {
    scope: ['profile']// we can manipulate what we want captured in this array as long as we check google for what we can capture
}));

//callback routes for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user); //passport can then access that 'code' when directed to this site
    res.redirect('/profile/'); 
}); 

module.exports = router; 