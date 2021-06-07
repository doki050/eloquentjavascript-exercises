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
