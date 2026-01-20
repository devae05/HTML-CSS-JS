// 1 / 1! + 3 / 3! + 5 / 5!....

let fact = 1;
console.log(fact);

for(let i = 1; i <= 10; i++){

    fact = 1;

    if(i % 2 != 0){

        for(let z = i; z > 0; z--){

            fact = fact * z;
        }

       console.log(fact+i+2);
    }
}