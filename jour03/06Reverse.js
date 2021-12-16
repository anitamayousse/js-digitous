function reverseInPlace(str) {
    var sentence = [];
    sentence = str.split("\s+");
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        return result += sentence[i].split('').reverse().join('');
    }
}
{console.log(reverseInPlace("Hello Konexio!"))
}
//ou

const sentence = "Hello Konexio!";
let result = "";

for (let i = sentence.length -1; i>= 0; i--) {
    result += sentence[i];  
}

console.log(result);

