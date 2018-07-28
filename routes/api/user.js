    const router = require("express").Router();
    const userController = require("../../controllers/userController");

    // app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
    //                                                 failureRedirect: '/signup'}
    //                                                 ));

    // app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
    //                                                 failureRedirect: '/signin'}
    //                                                 ));

    // Matches with "/api/user"
    router.route("/")
    .get(userController.findAll)
    // .post(booksController.create);

    module.exports = router;