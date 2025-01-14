const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a year: ", (input) => {
    const year = Number(input);

    if (year <= 0) {
        console.log("Invalid input. Please enter a positive number.");
    } else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
    r1.close();
});
