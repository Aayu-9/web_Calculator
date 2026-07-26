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
    if (num2 == 0) {
        alert("Error! can't divide by 0");
        return num1 / 1;
    }
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
    if (button != "." && button!="delete") {
        display.value += button;
    }

    // call operator and calculate the answer, limit decimal places too.
    if ((opeArr.length >= 1 && (button == "+" || button == "-" || button == "*" || button == "/" || button == "!" || button == "^")) || button == "=") {
        if (string != 0) {
            value.unshift(+string);
        }
        if (opeArr.length >= 1 && value.length == 1) {
            return;
        }
        let answer = operator(value.pop(), `${opeArr.pop()}`, value.pop());
        answer = Math.trunc(answer * 100000) / 100000;
        display.value = +answer;
        value.length = 0;
        value.unshift(+answer);
        opeArr.length = 0;
        string = "";
        if (button != "=") {
            display.value += button;
            opeArr.unshift(button);
        }
        return;
    }

    // switch to do different button's operations and add them arrays and variable.
    switch (button) {
        case "clear":
            display.value = "";
            value.length = 0;
            opeArr.length = 0;
            string = "";
            break;
        case "delete":
            let remove = display.value.slice(-1);
            if (Number.isFinite(+remove))
            {
                display.value = display.value.slice(0, -1);
                string = string.slice(0, -1);
                return;
            }    
            else if (remove == ".")
            {
                display.value = display.value.slice(0, -1);
                string = string.slice(0, -1);
                return;
            }
            else
            {
                display.value = display.value.slice(0, -1);
                string = string.slice(0, -1);
                opeArr.pop();
                return;
            }

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
        case ".":
            if (!string.includes(".")) {
                display.value += button;
                string += `${button}`;
                return;
            }
            return;
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

// detect click
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", listen);
})
