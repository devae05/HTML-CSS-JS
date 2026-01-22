// 1 + 2 + 3 + 4 + .....
let n = parseInt(prompt());
let j = " + ";
let a = "";
for(let i = 1; i<=n; i++){
    
    if(i == n){
        a = a + i;
    }
    else{
        a = a + i + j ;
    }
}
console.log(a);