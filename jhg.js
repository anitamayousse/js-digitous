const words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
const allLetters = [];

function splitWordsAddInTab() {
  let word = "";
  let number0 = 0;
  for (let i = 0; i < words.length; i++){
    word = words[i].split("");
    let j = 0;

    while (j<word.length){
      allLetters.push(word[i]);
      j++;
    }

    for (let i = 0; i < words.length; i++){
      if (word[i] === "0"){
        number0 += 1;
      }
    }
  }
  return number0;
}
console.log(splitWordsAddInTab());