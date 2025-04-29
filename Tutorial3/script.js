// Loops in Javascript - For executing a same type of work multiple time
// Types of Loops : For loop , While loop , Do while loop
for (let i = 1; i <= 10; i++) {
  console.log(" Nikhil Jain ");
}

// Q Count vowels in a string

let str = " Roop chand Jain ";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u" ||
    str[i] == "A" ||
    str[i] == "E" ||
    str[i] == "I" ||
    str[i] == "O" ||
    str[i] == "U"
  ) {
    count = count + 1;
  }
}
console.log(` Total Number of Vowels is : ${count}`);

// Q Check if a Number is Prime or Not :

let number = Number(prompt(" Enter a Number : "));
if (number < 2) {
  console.log(" Not a prime number ");
}
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    console.log(" Not a Prime Number ");
    break;
  } else {
    console.log(" Prime number ");
    break;
  }
}

// Use of Break and Continue keyword
// Break - To came out from the loop at a particular condition
for (let i = 1; i <= 6; i++) {
  if (i == 4) {
    break;
  }
  console.log(i);
}
// continue keyword - certain set of instructions ko loop me handle karta hh

for (let i = 0; i <= 50; i++) {
  if (i % 5 == 0 && i > 0) {
    console.log(i);
    continue;
  }
}

// while Loop
let x = 11;
while (x <= 21) {
  console.log(x);
  x = x + 1;
}
