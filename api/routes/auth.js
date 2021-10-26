const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require('bcrypt')

//Register
router.post("/register",async (req,res)=>{
  try{
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt)
    const newUser = new User({
      username:req.body.username,
      email:req.body.email,
      password: hashedPass,
    })
    const user = await newUser.save();
    res.status(200).json(user)
  }catch(error){
    res.status(500).json(error)
  }
})

router.post("/login",async (req,res)=>{
  try{
    const user = await User.findOne({ username:req.body.username })
    // const email = await User.findOne({email:req.body.email})

    !user && res.status(400).json("wrong credentials")
    // if(user===true || email===true)return(res.status(400).json("wrong credentials"))

    const validated = await bcrypt.compare(req.body.password,user.password)
    !validated && res.status(400).json("Wrong credentials")

    const {password,...others}=user._doc
    res.status(200).json(others)

  }catch(error){
    res.status(500).json(error);
  }
})

//Login

module.exports = router
