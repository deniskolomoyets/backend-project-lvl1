import runGame from "../index.js";

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? "yes" : "no";
  return { question, correctAnswer };
};

export default () => runGame(task, getRoundData);
