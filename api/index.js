const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const app = express();


//conection the .env file
dotenv.config();
app.use(express.json())

//connecting mongoose database
mongoose.connect(process.env.MONGO_URI)
.then(console.log("connected to MongoDB"))
.catch(error=>console.log(error))

//routes
app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/post",postRoute)





app.listen("5000",()=>{

  console.log('Backend is running.')
})
