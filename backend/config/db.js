const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URL)
        if(connection){
            console.log("Mongo db connected")
        }
    }catch(error){
        console.log(error)
    }
}

module.exports=connectDB