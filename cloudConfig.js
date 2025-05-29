// config/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure your Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'cozynest_DEV',         // Optional: Folder in Cloudinary
    allowed_formats: ['jpg', 'png','jpeg'],    // Optional: restrict file formats
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

module.exports = { cloudinary, storage };
