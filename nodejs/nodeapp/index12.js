// let name ="John";

// let name = process.argv[2]; // we can take the input while compiling it ,like giving a input 
// console.log("Hello " + name); // 2==> prints the second value which is name

// node index12.js Siddu
// Hello Siddu

// let name1 = process.argv[2];
// let name2 = process.argv[3];

// console.log(`Hello ${name1} and ${name2}`);

// let name = process.argv[2] || "Siddu"      // if we don't give any name while compiling it will take default value using or operator
// console.log("Hello "+name);

// import express from 'express';


// const PORT = process.argv[2] || 4000;
// const app = express();

// app.listen(PORT,()=>{
//     console.log(`Server started in port ${PORT}`);
// })

// app.get("/",(req,res)=>{
//     res.send(`Hello world from port ${PORT}`);
// })


import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  console.log("MongoDB connected");
  app.listen(4000, () => console.log("Server running on 4000"));
});

const User = mongoose.model("User", new mongoose.Schema({
  username: { type: String, required: true }
}));

app.post("/register", async (req, res) => {
  if (!req.body.username) return res.status(400).json({ msg: "Username required" });
  const user = await User.create({ username: req.body.username });
  res.status(201).json(user);
});
