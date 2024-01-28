const {User} = require("../models/userSchema")
const validator = require("validator")
// async function bcz we will use awaits ! awaits means we want data in async way
const register = async(req,res) => {
    try {
        const {fname,phoneNumber,email,password} = req.body;
        if(!fname || !phoneNumber || !email || !password){
            return res.status(400).json({
                message:"Sab bharo bhai"
            })
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({
                message:"sahi email bharde jaani"
            })
        }
        if(phoneNumber.length != 10){
            return res.status(400).json({
                message:"phone number galat hai yarrrrrr"
            })
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({
                message:"password takda rakho bhai hack vack hojoge"
            })
        }
        const emailAlreadyExist = await User.find({email:email})
        if(emailAlreadyExist.length){
            return res.status(400).json({
                message:"Already exists with " + emailAlreadyExist[0].phoneNumber
            })
        }
        const phoneNumberAlreadyExist = await User.find({phoneNumber})
        if(phoneNumberAlreadyExist.length){
            return res.status(400).json({
                message:"Already exists with " + phoneNumberAlreadyExist[0].email
            })
        }
        const user = await User.create({
            fname,phoneNumber,email,password
        })
        if(user){
            console.log("Registered")
            res.status(200).json({
                data:user,message: "Registeration Success"
            })
        }
    }
    catch (error) {
        console.log("schema error",error)
    }
}

const login = async(req,res) => {
    try{
        const {email,phoneNumber,password} = req.body;
        if(!email || !phoneNumber || !password){
            return res.status(400).json({
                message:"bharde bhai sab"
            })
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({
                message:"email error"
            })
        }
        if(phoneNumber.length != 10){
            return res.status(400).json({
                message:"phone number 10 ka rakho"
            })
        }
        const dataexist = await User.find({email})
        if(!dataexist.length){
            return res.status(400).json({
                message:"Not Registered my love"
            })
        }
        if(phoneNumber != dataexist[0].phoneNumber){
            return res.status(400).json({
                message:"number he ni h bhai"
            })
        }
        if(dataexist[0].password != password){
            return res.status(400).json({
                message:"Wronggg password"
            })
        }
        if(dataexist){
            console.log("Logged in")
            res.status(200).json({
                data:User,message:"Logged in success"
            })
        }
    }
    catch (error) {
        console.log("schema error",error)
    }
}

module.exports={register,login}