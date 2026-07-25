// functions for calculation
function add(num1, num2) {
    return (+num1 + +num2);
};

function subctract(num1, num2) {
    return (num1 - num2);
};

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

const power = function (base, exponent) {
    return base ** exponent;
};

const factorial = function (num) {
    let answer = 1;
    for (let i = num; i > 0; i--) {
        answer *= i;
    }
    return answer;
};

// function which takes the input and calls for functions
function operator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subctract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "!":
            return factorial(num1);
        case "^":
            return power(num1, num2);
    }
}

// calculator's display (uses unredable input)
const display = document.querySelector("#display");

// arrays and variable to store input and keep track of numbers(help in calculation)
const value = []
const opeArr = []
let string = "";

// functions which takes the button input and decide which operation to perform
function listen(e) {
    let button = e.target.id;
    display.value += button;

    if (opeArr.length > 1 || button == "=") {
        value.unshift(+string);
        let answer = operator(value.pop(), `${opeArr.pop()}`, value.pop());
        display.value = +answer;
        value.length = 0;
        value.unshift(+answer);
        opeArr.length = 0;
        string = "";
        return;
    }

    switch (button) {
        case "clear":
            display.value = "";
            value.length = 0;
            opeArr.length = 0;
            string = "";
            break;
        case "+":
            opeArr.unshift(button);
            break;
        case "-":
            opeArr.unshift(button);
            break;
        case "*":
            opeArr.unshift(button);
            break;
        case "/":
            opeArr.unshift(button);
            break;
        case "!":
            opeArr.unshift(button);
            break;
        case "^":
            opeArr.unshift(button);
            break;
        default:
            string += `${button}`;
            console.log(string);
            return;
    }
    if (string != 0) {
        value.unshift(+string);
        string = "";
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", listen);
})
