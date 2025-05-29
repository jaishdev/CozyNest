const express = require('express');
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync.js')
const {validateReview , isLoggedIn , isReviewAuthor} = require('../middleware.js');
const ReviewController = require("../controllers/reviews.js")

//reviews
router.post("/", validateReview,isLoggedIn, wrapAsync(ReviewController.NewReview))

//review delete
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(ReviewController.DeleteReview))

module.exports = router;