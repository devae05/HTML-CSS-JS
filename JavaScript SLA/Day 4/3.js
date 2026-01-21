{
                // for
    let n = prompt(" Enter Number :");
    let count = 0;
    console.log(` Limit is ${n}`)
    for(let z=2; z<=n; z++)
    {
        count = 0;
        for(let i=1; i<=z; i++)
        {
            if(z%i == 0)
            {
                count++;
            }
        }
        if(count == 2)
        {
            console.log(`${z}`);
        }
    }
}

{
                    // while
    let n = prompt(" Enter Number :");
    let count = 0;
    console.log(` Limit is ${n}`)
    let z=2;
    while(z<=n)
    {
        count = 0;
        let i=1;
        while(i<=z)
        {
            if(z%i == 0)
            {
                count++;
            }
            i++;  
        }
        if(count == 2)
        {
            console.log(`${z}`);
        }
        z++;
        i=1;
    }
}

{
                    // do-while
    let n = prompt(" Enter Number :");
    let count = 0;
    console.log(` Limit is ${n}`)
    let z=2;
    do
    {
        count = 0;
        let i=1;
        do
        {
            if(z%i == 0)
            {
                count++;
            }
            i++;  
        }while(i<=z);
        if(count == 2)
        {
            console.log(`${z}`);
        }
        z++;
        i=1;
    }while(z<=n);
}
