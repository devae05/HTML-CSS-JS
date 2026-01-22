let n = prompt(" Enter Number :");

console.log(` Limit is ${n}`)

for(let z=2; z<=n; z++)
{
    Prime(z);
}

function Prime(z){
    let count = 0;
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