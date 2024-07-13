function calculatCarPrice(...num1){
    return  num1
}

console.log(calculatCarPrice(200,300,400));
// console.log(calculatCarPrice);

const user ={
    username:"Ricky",
    price:90,
}

function handLobject(anyobj){
    console.log(`Usernmae is ${anyobj.username} and price is ${anyobj.price}` );
}

// handLobject(user)

handLobject({
    username:"sam",
    price:400,
})


const newArr = [200,300,400,500,700];

function newArr_2(getarr){
    return getarr[1]
}

// console.log(newArr_2(newArr));
console.log(newArr_2([100,200,300,400]));