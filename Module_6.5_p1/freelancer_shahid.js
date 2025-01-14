const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const monthlySavings = (a ) =>{
    let payment = 0;
    for(let i = 0;i<a.length;i++){
        payment += a[i];
        if(a[i] >=3000){
            let m = (a[i]*20)/100;
            payment -= m;
        }
    }
    return payment;
}
r1.question("Enter an array of numbers : ", (arrayInput) => {
    const a = arrayInput.split(',').map(Number);
 
    r1.question("Enter a single number: ", (numberInput) => {
        const number = Number(numberInput);
        if (isNaN(number) || a.some(isNaN)) {
            console.log("Invalid input");
        } 
        else {
            let ans = monthlySavings(a) - number ;
            
            if(ans < 0){
                console.log("earn more");
            }
            else if(ans >= 0){
                console.log(ans);
            }
        }

        r1.close();
    });
});
