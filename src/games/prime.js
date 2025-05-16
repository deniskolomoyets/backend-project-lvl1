// src/games/prime.js
import gameEngine from "../index.js";

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const number = getRandomInt(2, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? "yes" : "no";
  return { question, correctAnswer };
};

export default () => gameEngine(task, getGameData);
