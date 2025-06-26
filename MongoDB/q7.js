

 db.employees.aggregate([
     {$match:{department:"IT"}},
   {$project:{name:1,salary:1}},
])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     salary: 2000
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     salary: 2456
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     salary: 3456
//   }
// ]



 db.employees.aggregate([
     {$match:{department:"IT"}},
     {$project:{name:1,salary:1}},
     {$sort:{salary:1}}
])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     salary: 2000
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     salary: 2456
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     salary: 3456
//   }
// ]



 db.employees.aggregate([
      {$match:{department:"IT"}},
      {$project:{name:1,salary:1}},
      {$sort:{salary:1}},
      {$limit:3}
])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     salary: 2000
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     salary: 2456
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     salary: 3456
//   }
// ]

db.employees.aggregate([
    {$group:{_id:"$department",total: {$sum:"$salary"}}}
])

// [
//   { _id: 'IT', total: 7912 },
//   { _id: null, total: 0 },
//   { _id: 'Admin', total: 1500 }
// ]

 db.employees.aggregate([
   { $project: { name: 0 } }
 ])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'MERN' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685ccceadb8d06adae748a60'),
//     email: 'brian@gmail.com'
//   }
// ]


 db.employees.aggregate([
   {
     $project: {
       _id: 0,
       name: 1,
       salary: 1,
       bonus: { $multiply: ["$salary", 2] }  // use "$salary" here
     }
   }
 ])

[
//   { name: 'John Smith', salary: 2000, bonus: 4000 },
//   { name: 'Mike Joseph', salary: 2456, bonus: 4912 },
//   { name: 'Cathy G', salary: 3456, bonus: 6912 },
//   { name: 'Rafeal', salary: 1500, bonus: 3000 },
//   { name: 'Brian', bonus: null }



// ====> display name,email,salary of all IT employees

db.employees.aggregate([
   {
     $match: { department: "IT" }
   },
   {
     $project: {
       _id: 0,        // Optional: exclude _id
       name: 1,
       email: 1,
       salary: 1
     }
   }
 ])


//   { name: 'John Smith', email: 'john@gmail.com', salary: 2000 },
//   { name: 'Mike Joseph', email: 'mike@gmail.com', salary: 2456 },
//   { name: 'Cathy G', email: 'cathy@gmail.com', salary: 3456 }





// ====> display annual salary of all employees


db.employees.aggregate([
   {
     $project: {
       _id: 0,
       name: 1,
       salary: 1,
       Annualsalary: { $multiply: ["$salary", 12] }
     }
   }
 ])


//   { name: 'John Smith', salary: 2000, Annualsalary: 24000 },
//   { name: 'Mike Joseph', salary: 2456, Annualsalary: 29472 },
//   { name: 'Cathy G', salary: 3456, Annualsalary: 41472 },
//   { name: 'Rafeal', salary: 1500, Annualsalary: 18000 },
//   { name: 'Brian', Annualsalary: null }




// ====> display employees whose salary is greater than 3000 and show CTC instead of salary field

db.employees.aggregate([
  {
    $match: {
      salary: { $gt: 3000 }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      CTC: { $multiply: ["$salary", 12] }  // CTC = Annual Salary
    }
  }
])

// [ { name: 'Cathy G', email: 'cathy@gmail.com', CTC: 41472 } ]



// new Collection

// Student


// create a collection named student

// Calculate the average age of the student

// update the age of the student named "Alice" to 24

// add a new course "Chemistry" to a student's course array, only if it doesn't already exist

// Increment age by 1 for all enrolled students

// return only name and age for students, excluding_id

// remove a course "Physics" from Alice's courses.

db.student.insertOne({
  name: "Alice",
  age: 23,
  courses: ["Math", "Physics"],
  enrolled: true
})


db.student.insertMany([
  {
    name: "Bob",
    age: 21,
    courses: ["Chemistry", "Biology"],
    enrolled: true
  },
  {
    name: "Charlie",
    age: 24,
    courses: ["Math", "Computer Science"],
    enrolled: false
  },
  {
    name: "Diana",
    age: 22,
    courses: ["English", "History"],
    enrolled: true
  }
])


db.student.aggregate([ // ==> average age
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" }
    }
  }
])


// [ { _id: null, averageAge: 22.5 } ]


 db.student.updateOne(
   { name: "Alice" },
   { $set: { age: 24 } }
 )


db.student.find()
// [
//   {
//     _id: ObjectId('685cde94db8d06adae748a61'),
//     name: 'Alice',
//     age: 24,
//     courses: [ 'Math', 'Physics' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a62'),
//     name: 'Bob',
//     age: 21,
//     courses: [ 'Chemistry', 'Biology' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a63'),
//     name: 'Charlie',
//     age: 24,
//     courses: [ 'Math', 'Computer Science' ],
//     enrolled: false
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a64'),
//     name: 'Diana',
//     age: 22,
//     courses: [ 'English', 'History' ],
//     enrolled: true
//   }
// ]


db.student.updateMany(
  {},
  { $addToSet: { courses: "Chemistry" } }
)

db.student.find()
// [
//   {
//     _id: ObjectId('685cde94db8d06adae748a61'),
//     name: 'Alice',
//     age: 24,
//     courses: [ 'Math', 'Physics', 'Chemistry' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a62'),
//     name: 'Bob',
//     age: 21,
//     courses: [ 'Chemistry', 'Biology' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a63'),
//     name: 'Charlie',
//     age: 24,
//     courses: [ 'Math', 'Computer Science', 'Chemistry' ],
//     enrolled: false
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a64'),
//     name: 'Diana',
//     age: 22,
//     courses: [ 'English', 'History', 'Chemistry' ],
//     enrolled: true
//   }
// ]


db.student.updateMany(
  { enrolled: true },
  { $inc: { age: 1 } }
)


 db.student.find()
// [
//   {
//     _id: ObjectId('685cde94db8d06adae748a61'),
//     name: 'Alice',
//     age: 25,
//     courses: [ 'Math', 'Physics', 'Chemistry' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a62'),
//     name: 'Bob',
//     age: 22,
//     courses: [ 'Chemistry', 'Biology' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a63'),
//     name: 'Charlie',
//     age: 24,
//     courses: [ 'Math', 'Computer Science', 'Chemistry' ],
//     enrolled: false
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a64'),
//     name: 'Diana',
//     age: 23,
//     courses: [ 'English', 'History', 'Chemistry' ],
//     enrolled: true
//   }
// ]


db.student.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1
    }
  }
])


// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 24 },
//   { name: 'Diana', age: 23 }
// ]

db.student.updateOne(
  { name: "Alice" },
  { $pull: { courses: "Physics" } }
)

 db.student.find()
// [
//   {
//     _id: ObjectId('685cde94db8d06adae748a61'),
//     name: 'Alice',
//     age: 25,
//     courses: [ 'Math', 'Chemistry' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a62'),
//     name: 'Bob',
//     age: 22,
//     courses: [ 'Chemistry', 'Biology' ],
//     enrolled: true
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a63'),
//     name: 'Charlie',
//     age: 24,
//     courses: [ 'Math', 'Computer Science', 'Chemistry' ],
//     enrolled: false
//   },
//   {
//     _id: ObjectId('685cdea2db8d06adae748a64'),
//     name: 'Diana',
//     age: 23,
//     courses: [ 'English', 'History', 'Chemistry' ],
//     enrolled: true
//   }
// ]
