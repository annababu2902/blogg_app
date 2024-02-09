const express=require("express")
const signuprouter=require("../models/user")
const router=express.Router()
const bcrypt=require("bcrypt")


hashedpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/signup",async(req,res)=>{
//let data=req.body
    //let users=new signrouter(data)
    //let response=await users.save()
    let {data}={"data" :req.body}
    let password=data.password
    hashedpasswordgenerator(password).then(
        (hashedpassword)=>
        {console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let users=new signuprouter(data)
            let response= users.save()
            res.json(
                {
                    status:"Success"
                }
            )
        

        }
    )
})
    router.post("/signin",async(req,res)=>{
        let input=req.body
        let emailid=req.body.emailid
        let data=await signuprouter.findOne({"email":emailid})

      
        console.log(data)
        let dbpassword=data.password
        let inputpassword=req.body.password
        console.log(dbpassword)
        console.log(inputpassword)
        const match=await bcrypt.compare(inputpassword,dbpassword)
        if(!match)
        {
            return res.json({
                status:"incorrect"
            })
        }
        else
        {
            res.json(
                {
                    status:"Success"
                }
            )
        }
    
    
})

module.exports=router