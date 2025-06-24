// const f1 = () =>{
//    setTimeout(()=>{
//      return 5;
//    },1000)
// }

// const f2 = (x) =>{
//     console.log(x+6);
// }

// const n = f1();
// f2(n);

// promises

// const f1 = () =>{    
//     return 5;
// }

// const f2 = (x) =>{
//     console.log(x+6);
// }

// const n = f1();
// f2(n);

// const f1 = () =>{
//     return new Promise((resolve,reject) =>{
//        // resolve(5);
//        reject("Something went wrong");
//     })
// }

// const f2 = (x) =>{
//     console.log(x+6);
// }

// const n = f1();
// f2(n);

// f1()
//   .then((n)=>f2(n))
//   .catch((err)=>console.log(err));




//Promise
// const f1 = () => {
//     return 5;
// };
// const f2 = (x) => {
//     console.log(x+5);
// }
// const n = f1();
// f2(n); // Output: 10
// setInterval(() => {
//     console.log("Hello World");
// }, 1000); // Output: Hello World every second



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 5000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Another promise resolved!");
//     }, 7000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Third promise resolved!");
//     }, 9000);
// });

// promise1.then((result) => {
//     console.log(result);
//     return promise2;
// }).then((result) => {
//     console.log(result);
//     return promise3;
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error("Error:", error);
// });



//fetching data from the internet
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res=>res.json())
//   .then((data)=>{
//     data.forEach(value =>{
//       console.log(value.name);
//       console.log(value.email);
//     })
//   })
//   .catch((err)=> console.log(err)); 


const fetchData = async() =>{ // function needs to be changed to async to write await 
  const res =  await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();
  data.map(value =>{
    console.log(value.name);
  })
}

fetchData();