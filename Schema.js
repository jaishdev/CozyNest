const Joi = require('joi');
const path = require('path');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        price : Joi.number().min(1).required(),
        country : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        image : Joi.object({
          path:Joi.string(),
          filename:Joi.string(),
        }),
    }).required()
  })
module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        comment : Joi.string().required(),
        rating : Joi.number().min(1).max(5).required(),
    }).required()
  })    