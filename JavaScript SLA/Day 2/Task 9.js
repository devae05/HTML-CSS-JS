let unit = 110;
console.log("Units = ",unit);

let bill = (unit > 0 && unit <= 100) ? unit * 5 : (unit > 100 && unit <=200) ?
                unit * 7 : unit * 10;

console.log("Bill = Rs.",bill);