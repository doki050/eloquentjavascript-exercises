// 1.
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
}
console.log("\n");

// 2.
for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
console.log("\n");

//3.
//let size = Number(prompt("Board size: "));
let size = 8;
let field = "";
for (let i = 0; i < size; i++) {
  for (let y = 0; y < size; y++) {
    if ((i + y) % 2 == 0) {
      field += " ";
    } else {
      field += "#";
    }
  }
  field += "\n";
}
console.log(field);
console.log("\n");

//4.
// Function min that takes two arguments and returns their minimum. 
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(0, 10));
// -> 0
console.log(min(0, -10));
// -> -10
console.log("\n");

//5.
// Define a recursive function / The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1)  return false; 
  else if (n < 0) return isEven( -n );
  else return isEven( n - 2 );
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//6.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(str) {
  count = 0;
  for(let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
}

//6.B
/* Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/
function countChar(givenString, charToFind) {
  countNumber = 0;
  for(let i = 0; i < givenString.length; i++) {
    if (givenString[i] === charToFind) {
      countNumber++;
    }
  }
  return countNumber;
}

//6.c
function countBs2(string) {
  return countChar(string, "B");
}

console.log("\n")
console.log(countBs("Benjamin"));
// → 1
console.log("\n");

// 7.
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function customRange(start, end, step = start < end ? 1 :_-1) {
  let numbers = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) numbers.push(i);
  } else {
    for (let i = start; i >= end; i += step) numbers.push(i);
  }
  return numbers;
}

//console.log(customRange(1, 10));

// 7.b
//write a sum function that takes an array of numbers and returns the sum of these numbers
function customSum(array) {
  let sum = 0;
  for(let value of array) {
    sum += value
  }
  return sum;
}
console.log(customSum(customRange(1, 10, 1)));
console.log("\n");

//8.
//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace.
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

console.log(reverseArray(["Apple", "Banana", "Citron"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]