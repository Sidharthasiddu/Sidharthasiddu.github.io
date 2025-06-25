//db.users.insertOne({name:"Siddu",age:20})
//show collections ==>users
//db.users.find()
//db.users.findOne()
//db.users.drop()

db.users.insertOne({name:"siddu",age:20});

db.users.insertMany([
    {name:"a",age:11},
    {name:"b",age:12},
])

db.employees.insertOne({
    name:"Kane Williamson",
    email:"kanemama@gmail.com",
    department:"IT",
    salary:30000,
    location:["FL","OH"],
    date:Date()
})
