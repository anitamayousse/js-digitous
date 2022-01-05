function calculate (num1, num2, [operator]) {
    let result;
    if ( operator == '+'){
        result = num1 + num2;
    }
    else if (operator == '-'){
        result = num1 - num2;
    }
    else if (operator == '*'){
        result = num1 * num2;
    }
    else if (operator == '/'){
        result = num1 / num2;
    }
    else if (operator == '%'){
        result = num1 % num2;
    }
    else {
        return 0;
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}
calculate(5,4,['*'])