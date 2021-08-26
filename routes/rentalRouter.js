const express= require('express')
const Movie = require('../Models/movieModel')
const router= express.Router()
const Rental=require('../Models/rentalModel')
const Customer=require('../Models/customerModel')



router.get('',async(req,res)=>{
const data=await Movie.find().sort({name:1})
    res.send(data)

})
router.get('/:id',async(req,res)=>{
    const data=await Genre.findById(req.params.id)
        res.send(data)
    
    })
router.post('',async(req,res)=>{

    const customer=await Customer.findById(req.body.customerId)
    const movie=await Movie.findById(req.body.movieId)
    if(movie.numberInStock===0)
    {
        return res.send('Movie Rental out of stock')
    }
movie.numberInStock=movie.numberInStock-1
movie.save()
    const data=new Rental({customer,movie})


    
const save= await data.save()

res.send(save)
})

router.delete('/:id',async(req,res)=>{
  const data=await Genre.findByIdAndRemove(req.params.id)
    res.send(data)
})

router.put('/:id',async(req,res)=>{
const data=  await  Genre.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name}},{new:true})
res.send(data)


})

const validate=(genre)=>{
    const schema=joi.object({name:joi.string().min(3).required()})
    const error= schema.validate(genre)

    return error
    
}
module.exports=router