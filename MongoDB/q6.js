db.employees.deleteOne({
    email:"brian@gmail.com"
})

db.employees.deleteMany(
    {department:"IT"}
)



db.employees.getIndexes()

db.employees.createIndex({email:1})

db.employees.dropIndex("email_1")
