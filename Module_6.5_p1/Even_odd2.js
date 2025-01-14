const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number: ", (input) => {
    const num = Number(input);

    if(num & 1){
        console.log("Odd");
    }
    else{
        console.log("Even");
    }
    r1.close();
});