// callBack Function

setTimeout(function(){
    console.log("timer")
}, 3000);

function x(y){
    console.log("X");
    y();
}

x(function y(){
    console.log("y");
});

