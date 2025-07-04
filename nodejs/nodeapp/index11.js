// import express from 'express';
// import jwt from "jsonwebtoken";
// const SECRET = "some"
// const app = express()
// app.listen(4000,()=>{
//     console.log("Server Started")
// });
// const users=[{
//     email:"john@gmail.com",
//     pass:"1234",
//     role: "user",
// },{
//     email:"sai@gmail.com",
//     pass:"1234",
//     role: "admin",
// }];
// app.use(express.json());

// const authenticate = (req,res, next) =>{
//     try{

//     }
//     const token= req.headers.authorization;
//     token = token.split(" ")[1];
//     const user = jwt.verify(token,SECRET);
//     req.role= user.role;
//     next()
//     return res.json(token);
//     // return res.json({message: "Access Denied"});
// }
// app.post("/login",async (req,res)=>{
//     const { email,pass } = req.body;
//     const found = users.find(
//         (user) => user.email === email && user.pass === pass
//     );
//     if(found){
//         const token = await jwt.sign(found,SECRET,{expiresIn:'1h'});
//         res.status(200).json({ user: found, token });
//     }else{
//         res.status(403).json({ message: "Access Denied "});
//     }
// });

//====================================================================================================
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
const SECRET = "secret";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
let users = [];
app.use(express.json());

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.role === "admin") {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized Access" });
    }
  };
};

app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const existingUser = users.find((user) => user.email === email);
  const matchPass = await bcrypt.compare(pass, existingUser.pass);
  if (matchPass) {
    const token = jwt.sign(found, SECRET, { expiresIn: "1h" });
    res.status(200).json({ user: found, token });
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, pass, role } = req.body;
  const hashedpwd = await bcrypt.hash(pass, SECRET);
  const user = {
    name,
    email,
    pass: hashedpwd,
    role,
  };
  users.push(user);
  res.json(user);
});

app.get("/users", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});