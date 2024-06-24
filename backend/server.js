const express =require('express')
const mongoose=require('mongoose')


require('dotenv').config()
const data=require('./router/router')


const app=express()

app.use(express.json())

app.use('/api/data',data)


//connecting to mongo db database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('running on port',process.env.PORT)
})

})
.catch((error)=>{console.log(error)})

 




