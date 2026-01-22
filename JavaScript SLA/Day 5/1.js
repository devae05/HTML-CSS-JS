let n = prompt("Enter Number :");
Fact1(n);

function Fact1(n)
{
    let fact = 1;
    for(let i=1; i<=n; i++)
    {
        fact = fact * i;
    }

    console.log(` Factorial of ${n} is ${fact}`);
}

