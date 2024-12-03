document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').innerText = 'Cannot divide by zero.';
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
