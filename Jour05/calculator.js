function calculator (op1, op2, operation) {
    if (operation === 'sum' || operation === 'add'){
        return op1 + op2;
    }
    else if (operation === 'sub'){
        return op1 - op2;
    }
    else if (operation === 'mul'){
        return op1 * op2;
    }
    else if (operation === 'div'){
        return op1 / op2;
    }
    return 'Error';
}

var result = calculator(Number(process.argv[3]), Number(process.argv[4]), process.argv[2]);

console.log(result);