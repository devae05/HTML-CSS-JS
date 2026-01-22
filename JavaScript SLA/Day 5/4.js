    let am = 153;
    let a=0;
    let b=0;
    let c=am;

    console.log(` Given no : ${am}`);

    while(c > 0)
    {
        a = c % 10;
        c=parseInt(c/10);
        b=b+a*a*a;
    }
    if(am==b)
    {
        
        console.log(` ${am} is an Armstrong number `);
    }
    else
    {
        console.log(` ${am} is not a Armstrong number `);
    }
