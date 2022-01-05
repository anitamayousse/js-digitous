function calculator (n1, n2, operation) {
    if (operation === 'sum' || operation === 'add'){
        return n1 + n2;
    }
    else if (operation === 'sub'){
        return n1 - n2;
    }
    else if (operation === 'mul'){
        return n1 * n2;
    }
    else if (operation === 'div'){
        return n1 / n2;
    }
    return 'Error';
}

var result = calculator(Number(process.argv[2]), Number(process.argv[4]), process.argv[3]);

console.log(result);