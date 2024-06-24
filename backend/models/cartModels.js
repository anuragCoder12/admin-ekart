const mongoose=require('mongoose')
const schema=mongoose.Schema

//creating new schema

const productSchema=new schema({
    image:String,
   
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
},{timestamps:true})
module.exports=mongoose.model('Product',productSchema)