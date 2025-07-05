
const someData = require("./math");   // it is importing from math.js 

let a = 5;
for(let i = 1; i<=a; i++){
    console.log(` ${i} : Hello `);
}

let arg = process.argv;
for(let i = 2; i<arg.length; i++){
    console.log(" Hello & welcome to : " , arg[i]);
}

console.log(someData);

// Now export the Data of Fruits Directoiry

let fruitsData = require("../Fruits/index.js");

console.log(" Apple Data : ", fruitsData[0]);
console.log(" Banana Data : ", fruitsData[1]);
console.log(" Orange Data : ", fruitsData[2]);

console.log(" Total length of fruitsData Array is -> ", fruitsData.length);

