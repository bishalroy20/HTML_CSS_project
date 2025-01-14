const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your result : ", (input) => {
    const res = Number(input);

    if(res < 0){
        console.log("failed");
    }
    else if(res >= 0 && res <= 39){
        console.log("C grade");
    }
    else if(res >= 40 && res <= 59){
        console.log("B grade");
    }
    else if(res >= 60 && res <= 69){
        console.log("A- grade");
    }
    else if(res >= 70 && res <= 79){
        console.log("A grade");
    }
    else if(res >= 80 && res <= 100){
        console.log("A+ grade");
    }
    r1.close();
});


