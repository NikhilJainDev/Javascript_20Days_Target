function printHello(){
    console.log(" Hello Users ");
}

// printHello();

function PrintTable(n){
    for(let i=1; i<=10; i++){
        console.log(` ${n} x ${i} = ${n * i}`);
    }
}

// PrintTable(8);

function getAvg(n1,n2,n3){
    let avg = (n1 + n2 + n3)/3;
    return avg;
}
console.log(getAvg(5,11,6));

// Store Function inside a variable 

let getMultiplication =  function(num1 , num2){
    return num1 * num2;
}

console.log(getMultiplication(5,12));

// Sum of Numbers - Arrow Function 

let getSum = (w,x,y,z) => {
    let ans =   w + x + y + z;
    return ans;
}

console.log(getSum(11,12,13,14));







