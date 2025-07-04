import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const SECRET = "secret";

app.listen(8000, ()=>{
    console.log("server stared");
})

const users = [{
    email:"Jonh@gmail.com",
    password:"12345",
    role:"user",
},
{
    email:"sunny@gmail.com",
    password:"12345",
    role:"admin",
}];

app.use(express.json());

const authenticate = (req,res,next) =>{

}

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    const found = users.find((user)=>user.email === email && user.password === password);
    if(found){
        const tolken = jwt.sign(found, SECRET, {expiresIn: "1h"});
        res.json({user : found},{token});
    }
    else{
        res.status(401).json({message: "Invalid credentials"});
    }
})


