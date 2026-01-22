// 0 5 10 15 20 25(5 series)
let n = parseInt(prompt());
let a = "";

for(let i = 0;i<=n;i++){
    if(i % 5 == 0)
    {
        a = a + i + " ";
    }
}
console.log(a);