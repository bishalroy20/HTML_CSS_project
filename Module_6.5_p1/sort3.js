const ar = [1,2,17,20,4,5,7,8,9,10,16,12,13,14,15,18,6,19,11,3];


for(let i=0;i<ar.length-1;i++){
    for(let j=i+1;j<ar.length;j++){
        if(ar[i] > ar[j]){
            let temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
    }
}

for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
}