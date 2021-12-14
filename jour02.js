//01 - Number
let integer = 102;
let float = 13.9;
console.log(integer,float);
//02 - Convert
let basic = 34;
let stringified = basic.toString();
console.log(stringified);
//03 - Round
let rounded = Math.round(1.5);
console.log(rounded);
//04 - Arithmétique 
let test = 12;
let bis = 5;
console.log (test + bis);
//05 - Comparaison 
let test1 = 143;
let bis1 = 219;
console.log(test1 > bis1);
//06 - Condition 
let limit = 50;
let score = 64;
if ( score >= limit){
    console.log("OK good!");
} else {
    console.log("Oh nooo...");}
//07 - Condition ll
let password = "azerty";
if ( password.length > 5);{
    console.log("The password is secure");}
//08 - Condition lll
if ((score >= limit) && (password.length > 5)){
    console.log("Everything is good");
}
else {
    console.log("Nothing is good");}
if ((score >= limit) || (password.length > 5)){
    console.log("Something is good");
}
else {
    console.log("Nothing is good");}
