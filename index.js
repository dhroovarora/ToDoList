const express = require("express")
const app = express()
const dotenv = require("dotenv")
const {userRouter} = require("./routers/userRouter")
const cors = require("cors")
const path = require("path")
dotenv.config();
require("./db/conn.js")
const port = process.env.port || 5000
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
        methods: ["GET","POST"]
    })
)
app.use(express.static(path.join(__dirname, "todo", "build"))); // static will tell kya what we used like css js files
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "todo", "build", "index.html")); //which ui to show which index.html file to pick
});
app.use(express.json()) // it is behvaing as middleware the data is coming in object and this line is converting it into json format
app.use("/api/user",userRouter)
app.get("/",(req,res)=> {
    res.send("dhroov")
    console.log("asda")
})
//  listen will tell the port which port to go
// you gave console log here why the output is not coming on the page and where will the output will cone
// node js provides us runtime environment that's why it provides output at backend and 
app.listen(port,()=>{
    console.log("working");
})
