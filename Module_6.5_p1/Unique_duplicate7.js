const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const unique = [];
const duplicate = [];


numbers.forEach((number) => {
    if (unique.includes(number)) {
        if (!duplicate.includes(number)) {
            duplicate.push(number);
        }
    } else {
        unique.push(number);
    }
});


const trulyUnique = unique.filter((number) => !duplicate.includes(number));

console.log("Unique Numbers:", trulyUnique);
