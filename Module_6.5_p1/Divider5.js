
const div3 = []
const div5 = []

for(let i =1;i<=50;i++){
    if(i%3 == 0){
        div3.push(i);
    }
    else if(i%5 == 0){
        div5.push(i);
    }
}

console.log("Divisible of 3 : ")
for(let i=0;i<div3.length;i++){
    console.log(div3[i]);
}

console.log("Divisible of 5 : ")
for(let i=0;i<div5.length;i++){
    console.log(div5[i]);
}

