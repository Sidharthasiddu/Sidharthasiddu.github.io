db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
})

db.employees.insertMany([{
  name:"Mike Joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["FL","TX"],
    date:Date()
},
{
 name:"Cathy G",
    email:"cathy@gmail.com",
    department:"IT",
    salary:3456,
    location:["FL","TX"],
    date:Date()

}])


db.employees.find().skip(1) // Skips 1st data and prints 2nd and 3rd data
db.employees.find().limit(1) // prints first data
db.employees.find().skip(1).limit(1) // 1st one skips and prints the 1st one in remaining data(which is 2nd one)

db.employees.find().sort({name:1})// Sorts name based on alphabetical order

db.employees.find().sort({name:1}).limit(1) // prints the 1st data in sorted obj

db.employees.find({department:"IT"})

db.employees.find({},{name:1})// displays only the name  of all the employees 
//output
//   { _id: ObjectId('685b8385ce273981c4748a69'), name: 'John Smith' },
//   { _id: ObjectId('685b83e1ce273981c4748a6a'), name: 'John Smith' },
//   { _id: ObjectId('685b83edce273981c4748a6b'), name: 'Mike Joseph' },
//   { _id: ObjectId('685b83edce273981c4748a6c'), name: 'Cathy G' }

db.employees.find({},{_id:0,name:1})// displays the name without any object id

// { name: 'John Smith' },
//   { name: 'John Smith' },
//   { name: 'Mike Joseph' },
//   { name: 'Cathy G' }

db.employees.find({},{_id:0,name:1,department:1}) 

//   { name: 'John Smith', department: 'IT' },
//   { name: 'John Smith', department: 'IT' },
//   { name: 'Mike Joseph', department: 'IT' },
//   { name: 'Cathy G', department: 'IT' }

db.employees.find({},{EmpName:"$name"})
// [
//   { _id: ObjectId('685b8385ce273981c4748a69'), EmpName: 'John Smith' },
//   { _id: ObjectId('685b83e1ce273981c4748a6a'), EmpName: 'John Smith' },
//   { _id: ObjectId('685b83edce273981c4748a6b'), EmpName: 'Mike Joseph' },
//   { _id: ObjectId('685b83edce273981c4748a6c'), EmpName: 'Cathy G' }
// ]

db.employees.find({location:"TX"})
// [
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   }
// ]