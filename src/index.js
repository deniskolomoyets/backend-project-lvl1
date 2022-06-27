import readlineSync from 'readline-sync';

const MAX_ATTEMPTS = 3;

const gameEngine = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(`${task}\n`);

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const [randomNum, correctAnswer] = getGameData();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
