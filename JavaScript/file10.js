let cart = {};

const products = [
    {id:1, name: "Product 1", price:25},
     {id:2, name: "Product 2", price:50},
      {id:3, name: "Product 3", price:75}
]

// function display(){
//     products.map((value) =>{
//         console.log(`${value.name}`);
//     })
// }

// display();

const addToCart = (id) =>{
    cart = {...cart,[id]:1};

}
addToCart(1);
addToCart(3);

console.log(cart);
const showCart = () =>{
    let str ="";

     products.map((value) =>{
        if(cart[value.id]){
        str += `${value.name}-${value.price}-${cart[value.id]}-${cart[value.id]*value.price}\n`;
    }
})
    console.log("**My Cart**");
    console.log(str);
}

showCart();

const increment = (id) =>{
    cart = {...cart,[id]: cart[id]+1};
}

const decrement =(id) =>{
    cart = {...cart,[id]:cart[id]-1};
}

// increment(1);
// increment(2); //id 2 was not there in cart so it will not be incremented;
// increment(1);
// increment(1);
// increment(1);
// decrement(1);
// decrement(1);
// decrement(3);
// increment(3);
// decrement(4);//id 4 is not  there in the cart so it will not be decremented;
// showCart();

const totalsum =()=>{
    return products.reduce((Sum,value) =>{
        return Sum+(cart[value.id] ? value.price*cart[value.id] : 0);
    },0);
}
console.log(totalsum());