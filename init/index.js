const mongoose = require('mongoose');
const initData = require('./data.js')
const Listing = require('../models/listing.js')

mongoUrl = "mongodb://127.0.0.1:27017/Roamio"


main().then(() => { console.log("Roamio connected"); }).catch((err) => { console.log("err"); });

async function main() {
    await mongoose.connect(mongoUrl);
}

const initDb = async () => {
    await Listing.deleteMany({})
    initData.data = initData.data.map((obj)=>({...obj, owner:"6817c2e532e502dffdc39de4"}))
    await Listing.insertMany(initData.data)
    console.log("data init");
    mongoose.connection.close();
};

initDb();