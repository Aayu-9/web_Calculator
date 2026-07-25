function add (num1, num2) {
  return (num1+num2);
};

function subctract (num1, num2) {
	return (num1-num2);
};

function multiply (num1, num2)
{
    return (num1*num2);
}

function divide (num1, num2)
{
    return (num1/num2);
}

const power = function(base, exponent) {
  return base**exponent;
};

const factorial = function(num) {
  let answer = 1;
	for (let i=num; i>0; i--)
  {
    answer *=i;
  }
  return answer;
};

function operator (num1, operator, num2)
{
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subctract(num1, num2);
            break;
        case "*":
            multiply(num1, mum2);
            break;
        case "/":
            multiply(num1, num2);
            break;
        case "!":
            factorial(num);
            break;
        case "^":
            power(num1, num2);
            break;
    }
}
