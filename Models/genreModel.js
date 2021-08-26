const mongoose=require('mongoose') 
const genres=new mongoose.Schema({
    name:{type:String,required:true,minlength:5}})

const Genre= mongoose.model('Genre',genres)
module.exports={Genre,genres}