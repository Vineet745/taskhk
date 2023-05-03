const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})


const user = mongoose.model('user',userModel);
module.exports = user;