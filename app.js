if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
};

const express = require('express');
const app = express();
const mongoose = require('mongoose');
DB_url = process.env.ATLAS_DB_URL;
const path = require("path");
const methodOverride = require('method-override')
const engine = require("ejs-mate");
const { error } = require('console');
const ErrorHandler = require('./utils/errorHandler.js')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user.js')

const listingsRouter = require('./routes/listings.js')
const reviewsRouter = require('./routes/reviews.js')
const userRouter = require('./routes/user.js')

main().then(() => { console.log("CozyNest connected"); }).catch((err) => { console.log("err") });

async function main() {
    await mongoose.connect(DB_url);
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", engine);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => 
    {
        res.redirect("/listings");
    });

const store=  MongoStore.create({ 
        mongoUrl: DB_url,
        crypto: {
            secret: process.env.SECRET,
        },
        touchAfter: 24 * 3600, 
    });

store.on("error", ()=>{
    console.log("error in mongo session----------- " , err)
})



app.use(session({
    store,
    secret : process.env.SESSION_SECRET ,
    saveUninitialized : false,
    resave : false,
}))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser((User.serializeUser()))
passport.deserializeUser((User.deserializeUser()))

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
// 
app.use("/listings", listingsRouter)
app.use("/listings/:id/reviews", reviewsRouter)
app.use("/", userRouter)



app.all("*" , (req, res, next) => {
    next(new ErrorHandler(404, "Page not found !!"))
})

app.use((err, req, res, next) => {
    let { statusCode = 500 , message = "something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message })
})

app.listen("3000", (req, res) => {
    console.log("port is working at 3000");
});
