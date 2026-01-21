{
                    // for 
    let n = prompt("Enter Number :");

    let fact = 1;
    for(let i=1; i<=n; i++)
    {
        fact = fact * i;
    }

    console.log(` Factorial of ${n} is ${fact}`);
}

{
                    // do-while
    let n = prompt("Enter Number :");

    let fact = 1;
    let i = 1;
    do
    {
        fact = fact * i++;
    }while(i<=n);

    console.log(` Factorial of ${n} is ${fact}`);}

{
                    // while
    let n = prompt("Enter Number :");

    let fact = 1;
    let i = 1;
    while(i<=n)
    {
        fact = fact * i++;
    }
    console.log(` Factorial of ${n} is ${fact}`);
}