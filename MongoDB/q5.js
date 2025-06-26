db.employees.countDocuments()
//4

 db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:2000}})

 db.employees.findOne()
// {
//   _id: ObjectId('685b83e1ce273981c4748a6a'),
//   name: 'John Smith',
//   email: 'john@gmail.com',
//   department: 'IT',
//   salary: 2000,
//   location: [ 'FL', 'OH' ],
//   date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)'
// }

db.employees.updateOne({email:"john@gmail.com"},{$set:{points:1}})
db.employees.findOne()
// {
//   _id: ObjectId('685b83e1ce273981c4748a6a'),
//   name: 'John Smith',
//   email: 'john@gmail.com',
//   department: 'IT',
//   salary: 2000,
//   location: [ 'FL', 'OH' ],
//   date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//   points: 1
// }

 db.employees.updateMany({department: "IT"},{$inc :{points : 3}})

Enterprise lpua> db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     points: 4
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     points: 3
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     points: 3
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)'
//   }
// ]


db.employees.updateMany({},{$rename:{points:"score"}});

Enterprise lpua> db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     score: 4
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     score: 3
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     score: 3
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)'
//   }
// ]

db.employees.updateMany({},{$unset:{score:""}}); // removes score 

Enterprise lpua> db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)'
//   },
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
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)'
//   }
// ]

db.employees.updateMany({}{$push:{skills:"Java"}}); // adds java in skills array

db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   }
// ]


db.employees.updateMany({},{$push:{skills:"Python"}}); // adds python to the array
db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'Java', 'Python' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java', 'Python' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java', 'Python' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java', 'Python' ]
//   }
// ]


db.employees.updateMany({},{$pull:{skills:"Python"}}); // removes python
db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   }
// ]

db.employees.updateMany({email:"john@gmail.com"},{$addToSet:{skills : "MERN"}};) // if  u need unique element then use addToSet
//  or if u need duplicates then use push
db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'Java', 'MERN' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   }
// ]



db.employees.updateMany({email:"john@gmail.com"},{$pop:{skills : -1}})
db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'MERN' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   }
// ]

// if name was there it will update to brian if name was not there then it will add name
db.employees.updateOne({email:"brian@gmail.com"},  
    {$set:{name:"Brian"}},
    {upsert:true}
)



db.employees.insertOne({email:"brian@gmail.com"})

db.employees.updateOne({email:"brian@gmail.com"},
    {$set:{name:"Brian"}}, {upsert:true} )
db.employees.find()
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 2000,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)',
//     skills: [ 'MERN' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685cc43edb8d06adae748a5f'),
//     name: 'Rafeal',
//     email: 'rafeal@gmail.com',
//     department: 'Admin',
//     salary: 1500,
//     location: [ 'NY', 'TX' ],
//     date: 'Thu Jun 26 2025 09:23:34 GMT+0530 (India Standard Time)',
//     skills: [ 'Java' ]
//   },
//   {
//     _id: ObjectId('685ccceadb8d06adae748a60'),
//     email: 'brian@gmail.com',
//     name: 'Brian'
//   }
// ]


db.employees.deleteMany({department:"IT"}) // deletes all documents who are having department it

db.employees.getIndexes()

// [ { v: 2, key: { _id: 1 }, name: '_id_' } ]

 db.employees.createIndex({email:1})
email_1
db.employees.getIndexes()
// [
//   { v: 2, key: { _id: 1 }, name: '_id_' },
//   { v: 2, key: { email: 1 }, name: 'email_1' }
// ]