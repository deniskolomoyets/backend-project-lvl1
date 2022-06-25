const getRandomInt = (from = 1, to = 100) => Math.floor(Math.random() * (to - from) + from);

const isEven = (number) => number % 2 === 0;

const getEven = () => {
  const randomNum = getRandomInt();
  const question = `${randomNum}`;

  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default getEven;
