const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signuprouter=require("./controllers/signuprouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anna29:annababu23@cluster0.hfzaiis.mongodb.net/blogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/blog",signuprouter)

app.listen(3001)