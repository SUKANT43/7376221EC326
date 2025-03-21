const express=require("express")
const app=express()
const cors=require('cors')
const dotenv=require("dotenv").config()
const port=process.env.PORT||1002;
const average=require('./routes/averageRoute')
const user=require('./routes/userRoutes')
const db=require('./config/db')
const axios=require('axios')
const postRoutes=require('./routes/post')
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

app.use('/api/average',average)
app.use("/posts", postRoutes);

  
  


  

app.listen(port,()=>{
    console.log("app is connected to:"+port)
    db()
})