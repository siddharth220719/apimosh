const mongoose=require('mongoose') 
const customers=new mongoose.Schema({
    isGold:Boolean,
    name:{type:String,required:true,minlength:5},
    phone:{type:Number,maxlength:10,required:true}
})

const Customer= mongoose.model('Customer',customers)
module.exports=Customer