var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const big_num = (numbers) =>{
    let big = numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(big < numbers[i]){
            big = numbers[i];
        }
    }
    return big;
}

const ans = big_num(numbers);
console.log(ans);