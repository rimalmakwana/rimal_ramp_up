// global space & window & this

var a = 10 ;

function b(){
    var x = 10;
}

console.log(window.a); // output is 10 because window is global object a is also global variable so we can also access a.

console.log(a); // output is 10

console.log(this.a); // output is 10

// console.log(x); // give the reference error