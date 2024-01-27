const mongoose = require("mongoose")
const {userSchema} = require("../models/userSchema")

// async function bcz we will use awaits ! awaits means we want data in async way
const register = async(req,res) => {
    try {
        const {fname,phoneNumber,email,password} = req.body;
        console.log(fname,phoneNumber,email,password)
    } catch (error) {
        console.log("schema error",error)
    }
}
module.exports={register}