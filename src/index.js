import readlineSync from 'readline-sync';

export default (task, randomExpression, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  let i = 0;

  while (i < roundsCount) {
    const [question, correctAnswer] = randomExpression();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    i += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
