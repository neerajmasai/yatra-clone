//PLACE MODEL

const mongoose = require("mongoose");
const { Schema } = mongoose;

//place schema
const placeSchema = new Schema({

    placeName: { type: String, required: true },
    placeCode: { type: String, required: true },
    airportName: { type: String, required: true },
    countryName: { type: String, required: true },
    countryLogo: { type: String, required: false },
    apiCode: { type: String, required: false },


}, {timestamps: false, versionKey: false});

//creating model for place
const Place = mongoose.model("Place", placeSchema);

//export
module.exports = Place;