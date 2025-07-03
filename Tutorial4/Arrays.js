console.log(" Arrays Intro ");

let arr = [1,2,3];
console.log(arr);

// creating objects in js 

let obj = {
    Name : "Nikhil Jain",
    Age : 20,
    Weight : 73,
    Address : "Alwar, Rajasthan",
    greet :  function() {
        console.log("Hello Ji kaise ho sare ");
    },
};

console.log(obj);

obj.greet();

let array = ["Nikhil Jain", 20, "Alwar, Rajasthan", "weight : 73 kg"];
for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}

// Arrays Methods in Javascript 

let brr = [];
brr.push(10);
brr.push(18);
brr.push(80);
brr.push(56);

console.log(brr);

brr.sort();

console.log(brr);


brr.pop();
brr.pop();

console.log(brr);



console.log(" Size of brr is : ", brr.length);


let new_arr = [18,96,54,23,78,41,26,98,45];
let ans = new_arr.find(78);
console.log(ans);