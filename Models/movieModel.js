const mongoose=require('mongoose') 
const {Genre,genres}=require('../Models/genreModel')
const movies=new mongoose.Schema({
    title:String,
    genre:genres,
    numberInStock:{type:Number,min:0},
    dailyRentalRate:Number
})

const Movie= mongoose.model('Movie',movies)
module.exports=Movie
