const express=require("express")
const signuprouter=require("../models/user")
const bcrypt=require("bcryptjs")
const user = require("../models/user")

const router=express.Router()

hashedPasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
 
  let{data}={"data":req.body}
  let password=data.password
  hashedPasswordgenerator(password).then(
    (hashedPassword)=>{
        console.log(hashedPassword);
        data.password=hashedPassword
        console.log(data)
        let blog=new signuprouter(data)
        let result=blog.save()
    res.json({
        status:"success"
    })
}
)
})

module.exports=router