import readlineSync from "readline-sync";

const operations = ["+", "-", "*"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
  return operations[Math.floor(Math.random() * operations.length)];
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
}

export default function runCalcGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  let correctCount = 0;

  while (correctCount < 3) {
    const num1 = getRandomInt(1, 30);
    const num2 = getRandomInt(1, 10);
    const operator = getRandomOperation();
    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log("Correct!");
      correctCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
