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
if ( password.length > 5){
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

//Bonus
let random = Math.floor(Math.random()* 6) +1;
if((Math.floor(Math.random()* 6) +1) === 6){
    console.log ("Yes I win!")
}
else{
    console.log ("so close..")
}
//Bonus ll
let month = "January";
switch (month) {
    case "January":
        console.log("Winter");
        break;
    case "April":
        console.log("Spring");
        break;
    case "June":
        console.log("Summer");
        break;
    case "December":
        console.log("Fall");
        break;
    default:
        console.log("That's not a month...");
}
//Bonus lll
let roundedNumber = "3.6";
let decimals = roundedNumber - Math.floor(roundedNumber);
let x = roundedNumber - decimals;
if (decimals > 0 )
{
    console.log(x+(1));
}

