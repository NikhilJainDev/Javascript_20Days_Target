function generateOTP(n){
    let otp = '';
    for(let i=1; i<=n; i++){
        otp = otp + Math.floor(Math.random()*10);
    }
    return otp;
}

console.log(process.argv);

console.log(` Generated 4 digit OTP is : ${generateOTP(4)}`);
console.log(` Generated 6 digit OTP is : ${generateOTP(6)}`);



