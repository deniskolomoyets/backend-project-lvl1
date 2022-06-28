import gameEngine from './index.js';
import getRandomInt from './utils.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return false;
  }
  return result;
};

const getRandomOperation = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
};

const getGameData = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operation = getRandomOperation();

  const randomNum = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation);
  return [randomNum, String(correctAnswer)];
};
export default () => gameEngine(task, getGameData);
