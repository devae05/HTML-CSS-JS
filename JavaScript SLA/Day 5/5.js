let n = parseInt(prompt());

console.log(`Given no : ${n}`);

series(n);

function series(am) {
    let a = 0;
    let b = 0;

    for (let i = 153; i <= am; i++) {
        b = 0;
        for (let z = i; z > 0; ) {
            a = z % 10;
            b = b + a * a * a;
            z = parseInt(z / 10);
        }
        if (b == i) {
            console.log(`${b} is an Armstrong number.`);
        }
    }
}
