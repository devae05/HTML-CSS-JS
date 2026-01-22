// 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!.....

let n = parseInt(prompt());
let result="";

for(let i=0; i<=n; i++)
{
    if(n==i)
    {
        result = result + i + "! + " +(i+1);
    }
    else if(i==0)
    {
        result = result +(i+1) + " / ";
    }
    else{
        result = result + i + "! + " +(i+1) + " / ";
    }
}

console.log(result);
