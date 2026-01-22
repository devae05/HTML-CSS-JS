let s = parseInt(prompt("Enter start no "));
let n = parseInt(prompt("Enter end no "));
let ans = sum(s,n);

console.log(`Sum of ${s} to ${n} is ${ans}`);

function sum(s, n) {
    let ans = 0;
    let i = s;

    while (i <= n) {
        ans = ans + i;
        i++;
    }

    return ans;
}

