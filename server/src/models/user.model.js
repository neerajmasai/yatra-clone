//USER MODEL

const mongoose = require("mongoose");
const { Schema } = mongoose;

//user schema
const userSchema = new Schema({

    //basic auth fields
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    phone:{type:String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    token : {type:String, required:true}
}, {
    timestamps: false, 
    versionKey: false});

//creating model for user
const User = mongoose.model("User", userSchema);

//export
module.exports = User;