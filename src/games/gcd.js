import gameEngine from "../index.js";

const task = "Find the greatest common divisor of given numbers.";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const getGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return { question, correctAnswer: answer };
};

export default () => gameEngine(task, getGameData);
