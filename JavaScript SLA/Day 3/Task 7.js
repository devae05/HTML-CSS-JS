// 1 + 3 + 5 + 7 + 9.....

let n=20;
let res=0;

for(let i=0; i<=n; i++){

    if(i % 2 != 0){
        res+=i;
    } 
}
console.log(res);