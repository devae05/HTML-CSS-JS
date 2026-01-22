// 0 2 4 6 8    series of even 0 to 20
let n = parseInt(prompt());

let a = "";

for(let i=0; i<=n; i++){
    if(i % 2 == 0)
    {
        a = a + i + " ";
    }
}
console.log(a);