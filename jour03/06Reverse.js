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