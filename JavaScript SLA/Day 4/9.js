let pal = prompt();

let rev = pal.split("").reverse().join("");
console.log(rev);
if(pal==rev){
    console.log(true);
}
else{
    console.log(false);
}