function fizzBuzzArray(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

const arr = fizzBuzzArray(100);

let fizzCount = 0;
let fizzBuzzCount = 0;

for (let val of arr) {
  if (val === "Fizz") fizzCount++;
  if (val === "FizzBuzz") fizzBuzzCount++;
}

console.log("Fizz:", fizzCount);
console.log("FizzBuzz:", fizzBuzzCount);
