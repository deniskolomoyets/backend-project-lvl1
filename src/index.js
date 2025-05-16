import readlineSync from 'readline-sync'

export default function runGame(gameDescription, getRoundData) {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  let correctCount = 0

  while (correctCount < 3) {
    const { question, correctAnswer } = getRoundData()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
