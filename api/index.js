const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const catRoute = require('./routes/categories')
const multer = require('multer')


const app = express();


//conection the .env file
dotenv.config();
app.use(express.json())

//connecting mongoose database
mongoose.connect(process.env.MONGO_URI)
.then(console.log("connected to MongoDB"))
.catch(error=>console.log(error))


//image storage
  const storage = multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,"images")
    },
    filename:(req,file,cb) =>{cb(null,req.body.name)}
  })

  const upload = multer({storage:storage});
  app.post("/api/upload",upload.single("file"),(req,res) =>{
     res.status(200).json("File hasbeen uploaded")
  })
//routes
app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/post",postRoute)
app.use("/api/categories",catRoute)






app.listen("5000",()=>{

  console.log('Backend is running.')
})
