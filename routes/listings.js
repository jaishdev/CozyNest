const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js')
const { isLoggedIn, validateListing, isOwner} = require('../middleware.js');
const listingController = require('../controllers/listing.js');
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({storage}) ; 

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post( isLoggedIn, upload.single('listing[image]') , validateListing, wrapAsync(listingController.createListing));
    // .post(upload.single('listing[image]') , (req,res)=>{
    //     res.send(req.file)
    // });
    
router.get("/new", isLoggedIn, listingController.renderNewListingForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn , isOwner, upload.single('listing[image]') ,validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn , isOwner, wrapAsync(listingController.destroyListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

router.get("/:id/delete", isLoggedIn , isOwner , wrapAsync(listingController.renderDeleteForm));

module.exports = router;