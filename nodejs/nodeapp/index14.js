import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const SECRET = "sometext";
const app = express();

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

//models > userModel
const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    console.log(err);
    return res.json({ message: "Invalid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (role === req.role) {
      next();
    } else {
      return res.json({ message: "Unauthorized access" });
    }
  };
};
app.use(express.json());

app.use("/api", userRouter);