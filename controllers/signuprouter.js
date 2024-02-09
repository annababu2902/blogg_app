const express=require("express")
const signuprouter=require("../models/user")


const router=express.Router()

router.post("/signin",async(req,res)=>{
    let data=req.body
    let user=new signuprouter(data)
    let result=await user.save()

    res.json({
        status:"success"
    })
})

module.exports=router