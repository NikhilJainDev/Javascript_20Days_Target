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