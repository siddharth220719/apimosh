const express= require('express')
const joi =require('joi')
const router= express.Router()
const Customer=require('../Models/customerModel')



router.get('',async(req,res)=>{
const data=await Customer.find().sort({name:1})
    res.send(data)

})
router.get('/:id',async(req,res)=>{
    const data=await Customer.findById(req.params.id)
        res.send(data)
    
    })
router.post('',async(req,res)=>{
    const data=new Customer(req.body)
    
const save= await data.save()

res.send(save)
})

router.delete('/:id',async(req,res)=>{
  const data=await Customer.findByIdAndRemove(req.params.id)
    res.send(data)
})

router.put('/:id',async(req,res)=>{
const data=  await  Customer.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name}},{new:true})
res.send(data)


})

const validate=(Customer)=>{
    const schema=joi.object({name:joi.string().min(3).required()})
    const error= schema.validate(customers)

    return error
    
}
module.exports=router