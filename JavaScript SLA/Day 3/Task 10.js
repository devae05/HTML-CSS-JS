//  0 + 2 / 2! + 4 / 4! + 6 / 6!....

let result = 0;
let fact = 1;
let ans = 0;

for(let i = 0; i <= 10 ; i++){
    result = 0;
    fact = 1;
    if(i % 2 == 0){
        for(let z = i; z>0 ;z--){   
            fact = fact * z;    
        }
        console.log(fact+i+2);
    }
}