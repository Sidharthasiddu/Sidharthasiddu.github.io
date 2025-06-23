
function add(x,y){
    return x+y;
}
function subract(x,y){
    return x-y;
}

// export {add,subract};

export default add;
export { subract };

// if the file contain only one function then we can also write
// export default function add(x,y){
//     return x+y;
// }