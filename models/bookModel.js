const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({

title:String,
name:String,
author:String

});

module.exports=mongoose.model("Book",bookSchema);