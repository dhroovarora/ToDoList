const mongoose = require("mongoose")
mongoose.connect(process.env.DB,{
    
}).then(()=>{
    console.log("database working")
}).catch((err)=>{
    console.log("Not working")
    console.log(err)
})