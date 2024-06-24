const Product=require('../models/cartModels')
const mongoose=require('mongoose')

//posting 
const postProduct= async (req,res)=>{
    console.log(req.body)
    
    const {title,description,price,category,product}=req.body
    try{
        const item=await Product.create({title,description,price,category,product})
        res.status(200).json(item)
    }
    catch{
        res.status(400).json('error occured')
    }
   
}
//getting all item
const getProducts=async(req,res)=>{
    const item=await Product.find({}).sort({createdAt:-1})
    res.status(200).json(item)
}
module.exports={
    postProduct,
    getProducts
}