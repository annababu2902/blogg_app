const mongoose=require("mongoose")
const signuprouter=mongoose.Schema(
    {
    name:String,
    age:String,
    phoneno:String,
    address:String,
    pincode:String,
    emailid:String,
    password:String
  
}
)
module.exports=mongoose.model("Blog",signuprouter)