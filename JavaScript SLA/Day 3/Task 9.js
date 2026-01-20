// 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!.....

let n=6;
let result=0;

for(let i = 1;i <=n; i++){
    result = 0;
    let f=1;
    for(let z = i; z>0; z--){
        f = f * z;
    }
    console.log(f+i);
}

