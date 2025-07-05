const sum = (num1, num2) => {
    return num1 + num2;
}

const mul = (x,y) => {
    return x*y;
}

const PI = 3.14;
const g = 9.8;

let obj = {
    add : sum(5,6),
    mult : mul(11,7), 
    pi : PI, 
    G : g,
};

module.exports =  obj;