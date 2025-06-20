// objects

const student = {
    name: "Siddu",
    age: 20
}
// console.log(student);

student.city = 'Dharmavaram';
console.log(student.name);
console.log(student.age);
student.city = 'Anantapur';
console.log(student);
console.log(student.name);
console.log(student["name"]);
delete student.city;
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));

