let n = parseInt(prompt());

let ans = arms(n);

console.log(`${n} is an Armstrong number - ${ans}`);

function arms(am) 
{
    let a = 0;
    let b = 0;
    let c = am;

    console.log(`Given no : ${am}`);

    while (c > 0) {
        a = c % 10;
        c = parseInt(c / 10);
        b = b + a * a * a;
    }

    if(am==b) 
    {
        return true;
    } 
    else
    {
        return false;
    }
}
