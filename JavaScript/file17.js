// Closure

function main(){
    let b =1
    function sub(){
        return b++;
    }
    return sub;
}

let f1 = main();// f1 functon has what main is returning
console.log(f1());
console.log(f1());
console.log(f1());
