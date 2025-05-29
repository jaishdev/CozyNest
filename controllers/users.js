const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs")
}

module.exports.createUser = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        // console.log(email , username , password)
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser, function (err) {
            if (err) { return next(err); }
            req.flash("success", `Welcome to CozyNest`);
            console.log()
            let redirectUrl = res.locals.redirectOriginalUrl || '/listings'
            res.redirect(`${redirectUrl}`);
        });
    }
    catch (err) {
        req.flash("error", err.message)
        // console.log(err.message)
        res.redirect("/signup")
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
}

module.exports.loginUser = async (req, res) => {
    req.flash("success", `welcome back ${req.user.username}`)
    let redirectUrl = res.locals.redirectOriginalUrl || '/listings';
    res.redirect(`${redirectUrl}`);
    // res.redirect('/listings');
}

module.exports.logoutUser = function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash("success", "logged out")
        res.redirect('/listings');
    });
}
