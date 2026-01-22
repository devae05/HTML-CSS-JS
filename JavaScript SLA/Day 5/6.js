let n = parseInt(prompt());
fib(n);

function fib(n)
{
    let a = 0;
    let b = 1;
    let z = 0;
    let ans = 0;

    console.log(a);
    console.log(b);

    while (ans < n)
    {
        z = b;
        ans = a + b;
        console.log(ans);
        b = ans;
        a = z;
    }
}

