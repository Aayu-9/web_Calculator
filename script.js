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

function operator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subctract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        case "!":
            return factorial(num1);
            break;
        case "^":
            return power(num1, num2);
            break;
    }
}

const display = document.querySelector("#display");


const value = []
const opeArr = []

function listen(e) {
    button = e.target.id;
    display.value += button;
    let string = "";


    if (opeArr.length==1 || button == "=")
    {
        if (button != "=")
        {
            value.unshift(button);
        }
        let answer = operator(value.pop(), `${opeArr.pop()}`, value.pop());
        display.value = answer;
        value.length = 0;
        value.unshift(answer);
        opeArr.length = 0;
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
            // value.unshift(string);
            string = "";
            break;
        case "-":
            opeArr.unshift(button);
            // value.unshift(string);
            string = "";
            break;
        case "*":
            opeArr.unshift(button);
            // value.unshift(string);
            string = "";
            break;
        case "/":
            opeArr.unshift(button);
            // value.unshift(string);
            string = "";
            break;
        case "!":
            opeArr.unshift(button);
            // value.unshift(string);
            string = "";
            break;
        case "^":
            opeArr.unshift(button);
            // value.unshift(string);
            string = "";
            break;
        default:
            string += `${button}`;
            value.unshift(button);
            console.log(string);
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", listen);
})
