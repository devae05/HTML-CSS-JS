let n = prompt(" Enter Number :");
let count = 0;

let isPrime = Prime(n,count);

console.log(` ${n} is Prime => ${isPrime}`);

        function Prime(n,count)
        {
        for(let i=1; i<=n; i++)
            {
                if(n%i == 0)
                {
                    count++;
                }
            }
            if(count == 2)
            {
                return true;
            }
            else
            {
                return false;
            }
        }