console.log(" nikhil jain ");

// variable - variable is the name of memory location where data is stored 

// data types - Data types are the " types of data stored inside the memory (RAM)

// let, const , and var are the keywords to used variables 

//  let age = prompt(" Enter age : ")
//  console.log(` Your age is ${age}`)

 function generateOTP(){
    // Basic code to generate the 4 digits otp 
    let otp = Math.floor(Math.random()*10000);
    console.log(` OTP is : ${otp}`)
 }

 generateOTP();

 let x = "Nikhil";
 console.log(` Value of  x = ${x}`)
 console.log(` Type of x is : ${typeof(x)}`);

 // Thii shows we can update our variables 

 x = "Nikhil Jain";
 console.log(` Now, The value of x is : ${x}`)

 let p = 1 + "1"
 console.log(typeof(p)) // string 

 // Note : variable created by let is Blocked Scope it will only work inside the blocks 

 {
    let z = 20
    console.log(z)
 }

//  console.log(z)  it will throw an error // Because z is only accessible inside the block 

 // Use of const keyword in variable creation 

 const digit = 23
 console.log(" Digit value is : ", digit)
//  digit = digit + 1;  Error part ..... can't assign value to the constant variable 


        // Data Types in JS  1) primitive Datatypes 2) Non Primitive Data Types 
                // Primitive Data types -> The data types that are already created and provided by JS 
     //Non - Primitive Data types  -> That are created by the user like arrays , objects 




