// src/games/progression.js
import gameEngine from "../index.js";

const task = "What number is missing in the progression?";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) =>
  Array.from({ length }, (_, i) => start + i * step);

const getGameData = () => {
  const progressionLength = 10;
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 5);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = "..";

  const question = progression.join(" ");
  return { question, correctAnswer };
};

export default () => gameEngine(task, getGameData);
