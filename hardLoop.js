/*01- Sum */
var arr = [];
while(arr.length < 50){
    var num = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(num) === -1) arr.push(num); 
    }
console.log(arr);
    
function sumArray(arr){
    let sum = 0;
    let i = 0;
    while (i < arr.length){
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log(sumArray(arr));

/*02 - Max*/
var arr = [];

while(arr.length < 50){
    var num = Math.floor(Math.random() * 200) + 50;
    if(arr.indexOf(num) === -1) arr.push(num);
}
console.log(arr);

var temp = 0;
arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`The largest number in the array: ${temp}`);

/*3- Unique*/

let numbers = [];
let k=0;
for (let i = 0; i<=50; i++) {
  var num = Math.floor(Math.random() * (150+1) + 50);
  if(numbers.indexOf(num) === -1)numbers.push(num);
  console.log(numbers[0]);
  while (k>= 75 && k<= 100){
    console.log(numbers[k]);
  }
  k++
  break;
}

/*04 - Nested Loop*/

const words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

function splitWordsAddInTab() {

  let word = "";
  let numberO = 0;

  for (let i = 0; i < words.length; i++) {
    word = words[i].split("");

    for (let j = 0; j < word.length; j++) {
      if (word[j] === "o") {
        numberO +=1;
      }
    }
  }
  return numberO;
}
console.log(splitWordsAddInTab());