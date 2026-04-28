var x = 1;

a();
b();
console.log(1);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x= 100;
    console.log(x);
}


// first global execution context put on the call stack
// after a()
// after b()