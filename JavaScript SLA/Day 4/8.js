    let s = parseInt(prompt(" Enter start no "));
    let n = parseInt(prompt(" Enter end no "));
    let ans = 0;
    let i=s;
    while(i<=n)
    {
        ans = ans + i;
        i++;
    }
    console.log(` Sum of ${s} to ${n} is ${ans}`);