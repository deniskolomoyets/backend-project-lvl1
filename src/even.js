import readlineSync from "readline-sync";

export default function runEvenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctCount = 0;

  while (correctCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question("Your answer: ");
    const correctAnswer = number % 2 === 0 ? "yes" : "no";

    if (answer === correctAnswer) {
      console.log("Correct!");
      correctCount += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log("Let's try again!");
      return;
    }
  }

  console.log("Congratulations!");
}
