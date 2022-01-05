function multiply(num) {
    
    for (let i = 0; i < 10; i++) {
        let result = i**2;
        console.table(`${num} x ${i} = ${result}`);
    }  
}
var result = multiply(process.argv[2]) ;

console.log(result);