// Students: userName

import express from 'express'
import mongoose from 'mongoose';
const app=express();



mongoose.connect("mongodb://127.0.0.1:27017/lpuStudent")
.then(()=>{

    app.listen(8080,(err)=>{
        if(err){
            console.log(`Something went wrong`);
        }
        else{
            console.log(`Server running at http://localhost:8080`)
        }
    })
})

const userSchema =new mongoose.Schema(
    {userName:{type:String}}
)
const userModel=mongoose.model("User",userSchema);

app.use(express.json());

app.post("/",async (req,res)=>{
    const {userName}=req.body;
    const user = await userModel.create({userName});
    res.status(201).json({message:"Data Saved",user})
})