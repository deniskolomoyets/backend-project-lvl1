import runGame from "../index.js";

const task = "What is the result of the expression?";
const operations = ["+", "-", "*"];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = () =>
  operations[Math.floor(Math.random() * operations.length)];

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRoundData = () => {
  const num1 = getRandomInt(1, 30);
  const num2 = getRandomInt(1, 10);
  const operator = getRandomOperation();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return { question, correctAnswer };
};

export default () => runGame(task, getRoundData);
