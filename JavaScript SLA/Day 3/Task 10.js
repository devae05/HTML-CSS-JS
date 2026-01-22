//  0 + 2 / 2! + 4 / 4! + 6 / 6!....

let n = parseInt(prompt());
let result="";

for(let i=0; i<=n; i+=2)
{
    if(n==i)
    {
        result = result + i + "! + " +(i+2);
    }
    else if(i==0)
    {
        result = result +i+ " + " +(i+2) + " / ";
    }
    else{
        result = result + i + "! + " +(i+2) + " / ";
    }
}

console.log(result);
