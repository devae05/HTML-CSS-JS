// 1 / 1! + 3 / 3! + 5 / 5!....

let n = parseInt(prompt());
let result="1 / ";

for(let i=1; i<=n; i+=2)
{
    if(n==i)
    {
        result = result + i + "! + " +(i+2);
    }
    else if(i==1)
    {
        result = result +i+ "! + " +(i+2) + " / ";
    }
    else{
        result = result + i + "! + " +(i+2) + " / ";
    }
}

console.log(result);
