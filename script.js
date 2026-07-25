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
            return add(num1, num2);
            break;
        case "-":
            return subctract(num1, num2);
            break;
        case "*":
            return multiply(num1, mum2);
            break;
        case "/":
            return multiply(num1, num2);
            break;
        case "!":
            return factorial(num);
            break;
        case "^":
            return power(num1, num2);
            break;
    }
}
