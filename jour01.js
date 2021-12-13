// 01 - Hello World
console.log("Hello World!");
// 02 - String
var test="test";
test ="My name is Anita";
console.log(test);
// 03 - Concatenation
var name ="Anita";
console.log("Nice to meet you " + name);
// 04 - String Length
var testlength ="I'm very long !";
console.log(testlength.length);
// 05 - Replace
var food = "croissant is meh";
food = food.replace("meh","so good");
console.log(food);
// 06 - Up and Down
var basic = "This is Cool";
var basicUp = basic.toUpperCase(); 
var basicDown = basic.toLowerCase();
console.log(basic, basicUp, basicDown);
// 07 - Split
var word = "banana";
var letters = word.split ("");
console.log(letters);
// 08 - Template
var age = 28;
var template = "I'm ___ years old";
template = template.replace("___" , age);
console.log (template);
//or

console.log (`I'm ${age} years old`)
