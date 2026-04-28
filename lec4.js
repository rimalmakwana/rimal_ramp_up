// Hoisting


getName(); // output is Hello 
console.log(x); // output is undefined
console.log(getName); // output is print the whole function

var x= 7;

function getName(){
    console.log("Hello");
}


// this arrow function behave like a variable so if you want to acceess in top of the code this shows error like getname is not an function
// var getName = ()=>{
//     console.log("hello")
// }