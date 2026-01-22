// 1 + 3 + 5 + 7 + 9.....
let n = parseInt(prompt());
let j=" + ";
let a="";

for(let i=0; i<=n; i++)
{
    if(i==n)
    {
        if(i%2!=0)
        {
            a = a + i;
        }
    }
    else if(i%2!=0)
    {
        a = a + i + j;
    }  
    
    
}
console.log(a);