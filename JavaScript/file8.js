// array methods

const marks = [10,20,30,40,50,60];
// marks.forEach(value =>{
//     console.log(value);
// })

// marks.forEach((value,index) =>{
//     console.log(value,index);
// })

// marks.forEach((value,index,arr) =>{ // 1st value allways will be value amd 2nd one allways will be index
//     console.log(value,index,arr);
// })

// marks.forEach((a,b,c) =>{
//     console.log(a,b,c);
// })

marks.forEach((a,b,c)=>{
    console.log(c[b]);
})