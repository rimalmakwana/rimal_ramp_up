let c = 100; // it is shadowing

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(c);
// console.log(b);
// console.log(c);

// b and c is not accessiblt out side the block scope