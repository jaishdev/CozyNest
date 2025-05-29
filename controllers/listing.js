const Listing = require("../models/listing");
const cloudinary = require("cloudinary").v2;

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewListingForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.createListing = async (req, res, next) => {
    let { listing } = req.body;
    let { path, filename } = req.file
    listing.owner = req.user._id;
    listing.image = { path, filename };
    await Listing.create(listing);
    console.log(listing)
    req.flash("success", "New listing created")
    res.redirect("/listings");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "listing does not exist");
        res.redirect("/listings");
    }
    listing.reviews.forEach(review => {
        review.createdAtFormatted = new Date(review.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    });
    if (!listing.owner) {
        listing.owner = res.locals.currUser
    }
    // console.log(listing)
    res.render("listings/show.ejs", { listing });
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    if (!listing) {
        req.flash("error", "The listing you are trying to edit does not exist");
        res.redirect("/listings");
    }
    let originalImage = listing.image.path;
    originalImage = originalImage.replace("/upload" , "/upload/w_250");
    res.render("listings/edit", { listing , originalImage})
}

module.exports.updateListing = async (req, res) => {
    if (!req.body.listing) {
        throw new ErrorHandler(400, "send valid data for listing")
    };
    let { listing: newData  } = req.body; //newdata after edit button is pressed
    let { id } = req.params;
    let oldData = await Listing.findById(id)
    if (typeof req.file !== 'undefined') {
        if (oldData.image && oldData.image.filename) {
            await cloudinary.uploader.destroy(oldData.image.filename);
        }
        let { path, filename } = req.file;
        newData.image = { path, filename }
    }
    await Listing.findByIdAndUpdate(id, newData, { new: true, runValidators: true });
    req.flash("success", "Listing is edited")
    res.redirect(`/listings/${id}`);
}

module.exports.renderDeleteForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
    console.log(`'${listing.title}' , '${listing.country}'`);
    res.render("listings/delete", { listing })
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let data = req.body;
    let listing = await Listing.findById(id)
    console.log(data.title, "in", data.country, "is deleted");

    if (listing.title == data.title && listing.country == data.country) {
        await Listing.findByIdAndDelete(id)
        req.flash("success", "Listing is deleted")
        return res.redirect("/listings")
    }
    return res.send("something went wrong")
} 
