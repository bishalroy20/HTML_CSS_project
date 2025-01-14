var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const mxsize=(friends)=>{
    let mx = friends[0];
    for(let i=1;i<friends.length;i++){
        if(friends[i].length > mx.length){
            mx = friends[i];
        }
    }

    return mx;
}

const ans = mxsize(friends);
console.log(ans);