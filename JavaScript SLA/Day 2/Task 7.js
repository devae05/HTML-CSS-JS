let tm = prompt(" Enter Total Marks scorded : ");
tm = parseInt(tm);
console.log("Mark = ",tm)

let grade = (tm >= 0 && tm <= 100) ? 
                (tm <= 100 && tm >=90) ? "GRADE A" : (tm >= 75 && tm <90) ? 
                    "GRADE B" : (tm >= 50 && tm <75) ? 
                        "GRADE C": "Fail" 
            : "Invalid Mark";

console.log(grade);