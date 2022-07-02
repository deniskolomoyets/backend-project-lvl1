import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getGameData = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const randomNum = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [randomNum, String(correctAnswer)];
};

export default () => gameEngine(task, getGameData);
