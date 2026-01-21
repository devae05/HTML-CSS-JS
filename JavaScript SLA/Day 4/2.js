{
                // for
    let n = prompt(" Enter Number :");
    let count = 0;
    for(let i=1; i<=n; i++)
    {
        if(n%i == 0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        console.log(` ${n} is a prime number.`);
    }
    else
    {
        console.log(` ${n} is not a prime number.`);
    }

}

{
                // while
    let n = prompt(" Enter Number :");
    let count = 0;
    let i = 0;
    while(i<=n)
    {
        if(n%i == 0)
        {
            count++;
        }
        i++;
    }
    if(count == 2)
    {
        console.log(` ${n} is a prime number.`);
    }
    else
    {
        console.log(` ${n} is not a prime number.`);
    }
}

{
                // do-while
    let n = prompt(" Enter Number :");
    let count = 0;
    let i = 0;
    do
    {
        if(n%i == 0)
        {
            count++;
        }
        i++;
    }while(i<=n);
    if(count == 2)
    {
        console.log(` ${n} is a prime number.`);
    }
    else
    {
        console.log(` ${n} is not a prime number.`);
    }
}