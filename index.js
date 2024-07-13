function sayMyname() {
  console.log("R");
  console.log("I");
  console.log("C");
  console.log("K");
  console.log("Y");
};

sayMyname()

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2){
    // let result = Number1 + Number2;
    // return result

    return Number1 + Number2
}
const result = addTwoNumbers(3,10);
console.log(result);


function loginUserMessage(usersName = "Nothing"){
    // if(!usersName){
    //     console.log(`Enter Name`);
    //     return
    // }
    return `${usersName} Just logged in`;
}

// console.log(loginUserMessage("Ricky"))
console.log(loginUserMessage())