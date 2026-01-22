let n = parseInt(prompt());
tab(n);

function tab(n) {
    let i = 1;
    do {
        console.log(`${i} x ${n} = `, i * n);
        i++;
    } while (i <= 10);
}

