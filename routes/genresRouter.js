const express= require('express')
const joi =require('joi')
const router= express.Router()
const {Genre}=require('../Models/genreModel')
const auth=require('../middleware/auth')



router.get('',auth,async(req,res)=>{
const data=await Genre.find().sort({name:1})
    res.send(data)

})
router.get('/:id',async(req,res)=>{
    const data=await Genre.findById(req.params.id)
        res.send(data)
    
    })
router.post('',async(req,res)=>{
    const data=new Genre(req.body)
    
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