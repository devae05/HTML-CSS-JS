// 0 + 5 + 10 + 15 + 20 + .....

let n=55;
let result = 0;
for(let i=0; i<=n; i++){
    if(i % 5 == 0){
        result=result+i;
        
    }
}
console.log(result);