// 0 + 5 + 10 + 15 + 20 + .....
let n = parseInt(prompt());
let j=" + ";
let a=""

for(let i=0; i<=n; i++)
{
    if(i==n)
    {
        if(i%5==0)
        {
            a = a + i;
        }
    }
    else if(i%5==0)
    {
        a = a + i + j;
    }  
    
    
}
console.log(a);