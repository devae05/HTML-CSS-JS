{
    let am = 999;
    let a=0;
    let b=0;
    //let c=0;

    console.log(` Given no : ${am}`);

    for(let i=153; i<=am; i++)
    {
        b=0;
        for(let z = i ; z>0;)
        {
            a = z % 10;
            b = b + a * a * a;
            z = parseInt(z / 10);
        }
        if(b==i)
        {
            console.log(` ${b} is an armstrong number.`);
        }
    }

}