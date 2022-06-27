import gameEngine from './index.js';

const getRandomInt = (from = 1, to = 100) => Math.floor(Math.random() * (to - from) + from);

const isEven = (number) => number % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const randomNum = getRandomInt();
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export default () => gameEngine(task, getGameData);
