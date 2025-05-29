const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    rating:{
        type:Number ,
        // required:true,
        min:1,
        max:5,
    },
    comment:{
        type:String,
        // required:true,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
})

const Review = mongoose.model('Review',reviewSchema);
module.exports = Review;