// const userRouter = express.Router();


// userRouter.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;
//     const hashedpwd = await bcrypt.hash(password, 10);
//     const user = {
//       name,
//       email,
//       password: hashedpwd,
//       role,
//     };
//     const result = await userModel.create(user);
//     res.status(201).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// });

// userRouter.patch("/:id", authenticate, authorize("admin"), async (req, res) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;
//     const result = await userModel.findByIdAndUpdate(id, body);
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(200).json("Something went wrong");
//   }
// });

// userRouter.delete(
//   "/:id",
//   authenticate,
//   authorize("admin"),
//   async (req, res) => {
//     try {
//       const id = req.params.id;
//       const result = await userModel.findByIdAndDelete(id);
//       res.status(200).json(result);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: "Something went wrong" });
//     }
//   }
// );

// userRouter.get("/users", authenticate, authorize("admin"), async (req, res) => {
//   try {
//     const result = await userModel.find();
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// });

// userRouter.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email });
//     if (user) {
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (isMatch) {
//         const userObj = {
//           name: user.name,
//           email: user.email,
//           role: user.role,
//         };
//         const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
//         res.status(200).json({ userObj, token });
//       } else {
//         res.status(400).json({ message: "Invalid password" });
//       }
//     } else {
//       res.status(400).json({ message: "User not found" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// });




import express from "express";
import { authenticate, authorize } from "./auth.js";
import {
  register,
  login,
  showUsers,
  userUpdate,
  userDelete,
} from "./userController.js";
const Router = express.Router();
Router.post("/register", register);
Router.patch("/:id", authenticate, authorize("admin"), userUpdate);
Router.delete("/:id", authenticate, authorize("admin"), userDelete);
Router.get("/users", authenticate, authorize("admin"), showUsers);
Router.post("/login", login);
export default Router;