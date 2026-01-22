let n = parseInt(prompt());
let a="";

for(let i = 0; i<=n; i++)
{
    if(i % 2 != 0)
    {
        a = a + i + " ";
    }
}
console.log(a);