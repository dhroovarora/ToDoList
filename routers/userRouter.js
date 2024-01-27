const express = require("express")
const userRouter = express.Router()
const {register} = require("../controllers/userControl")
userRouter.post("/register",register)

module.exports={userRouter}