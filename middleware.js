const { listingSchema} = require('./Schema.js');
const { reviewSchema} = require('./Schema.js');  
const ErrorHandler = require('./utils/errorHandler.js');
const Listing = require("./models/listing.js");
const Review = require('./models/review.js');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // console.log(req.originalUrl);
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you are not logged in");
        return res.redirect("/login");
    }
    next();
};


module.exports.originalUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectOriginalUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
}

module.exports.validateListing=(req, res, next) => {
    let { error } = listingSchema.validate(req.body, { abortEarly: false });
    if (error) {
        console.log(error)
        let errMsg = error.details.map((detail) => detail.message);
        throw new ErrorHandler(400, errMsg);

    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body, { abortEarly: false });
    if (error) {
        let errMsg = error.details.map((detail) => detail.message).join(", ").replaceAll(".", " - ");
        throw new ErrorHandler(400, errMsg);
    } else {
        next();
    }
};


module.exports.isOwner = async (req,res,next) =>{
    let {id} = req.params;
        const listing = await Listing.findById(id)
        if(!listing.owner._id.equals(res.locals.currUser._id)) {
            req.flash("error","you are not the owner of the listing")
            return res.redirect(`/listings/${id}`)
        } 
        next();
}


module.exports.isReviewAuthor = async (req,res,next) =>{
    let { id , reviewId} = req.params;
        const review = await Review.findById(reviewId)
        if(!review.author.equals(res.locals.currUser._id)) {
            req.flash("error","you did not create this review.")
            return res.redirect(`/listings/${id}`)
        } 
        next();
}