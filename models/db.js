const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://Vineet:Vineet@cluster0.gnz5z9r.mongodb.net/Usertask")
.then(()=> console.log("connected!!!"))
.catch((err)=> console.log(err.message))