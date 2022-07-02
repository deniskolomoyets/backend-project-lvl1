import gameEngine from './index.js';
import getRandomInt from './utils.js';

const task = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, lengthOfProgression) => {
  const result = [];
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    result.push(firstNumber + step * i);
  }
  return result;
};

const getGameData = () => {
  const lengthOfProgression = getRandomInt(9, 10);
  const firstNumber = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = getProgression(firstNumber, step, lengthOfProgression);
  const hiddenNumber = getRandomInt(1, 9);
  const correctAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const randomNum = progression.join('  ');
  return [randomNum, String(correctAnswer)];
};
export default () => gameEngine(task, getGameData);
