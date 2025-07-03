import express from 'express';

const app = express()

app.listen(3000,() =>{
    console.log("Server Started");
})

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

// app.get("/products",(req,res)=>{
//     // res.send("Product List");
//     res.status(201).json({id :1, name: "Product 1", price: 25});
// })

// app.get("/ab*cd",(req,res)=>{
//     res.send("Hellooo");
// })



// app.get("/name",(req,res)=>{
//     res.send("Good Morning");
// })

// app.get("/:name",(req,res)=>{
//     res.send(req.params.name);
// })

// app.get("/name/:name",(req,res)=>{
//     res.send(req.params.name)
// })

// localhost:3000/siddu/20
// app.get("/:name/:age",(req,res)=>{
//     res.send(req.params.name+req.params.age);
// })


//localhost:3000/name/siddu/age/20
// app.get("/name/:name/age/:age",(req,res)=>{
//     res.send(req.params.name+req.params.age);
// })

app.get("/",(req,res)=>{
    res.send(req.headers.authorization);
})


// GET,POST,PATCH





//======================================================================================================================


// import express from "express";

// const app = express();

// app.listen(8080, () => {
//   console.log("Server started");
// });

// // app.get("/", (req, res) => {
// //   res.send("Hello World");
// // });

// // app.get("/products", (req, res) => {
// //   //res.send("Product List");
// //   res.status(201).json({ id: 1, name: "Product 1", price: 25 });
// // });

// // app.get("/ab*cd", (req, res) => {
// //   res.send("Hello");
// // });

// //localhost:8080/name
// // app.get("/name",(req,res)=>{
// //     res.send("Good Morning")
// // })

// //localhost:8080/name
// // app.get("/:name",(req,res)=>{
// //     res.send(req.params.name)
// // })

// // app.get("/name/:name",(req,res)=>{
// //     res.send(req.params.name)
// // })

// //localhost:8080/john/21
// // app.get("/:name/:age",(req,res)=>{
// //     res.send(req.params.name+req.params.age)
// // })

// //localhost:8080/name/john/age/21
// // app.get("/name/:name/age/:age",(req,res)=>{
// //     res.send(req.params.name+req.params.age)
// // })

// // app.get("/",(req,res)=>{
// //     res.send(req.headers.authorization)
// // })

// //locahost:8080/?name=john&age=21
// // app.get("/",(req,res)=>{
// //     res.send(req.query.name+req.query.age)
// // })

// app.get("/", (req, res) => {
//   res.send("Get Request");
// });

// app.post("/", (req, res) => {
//   res.send("Post Request");
// });

// app.delete("/", (req, res) => {
//   res.send("Delete Request");
// });

// app.patch("/", (req, res) => {
//   res.send("Path Request");
// });


//==================================================================================