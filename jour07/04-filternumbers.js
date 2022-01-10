const array = [1,"toto",34,"javascript",8];
const numbers = array.filter(function(num){
    return num.toString.length;
}
);

console.log(numbers);

