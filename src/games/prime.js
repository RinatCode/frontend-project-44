import readlineSync from 'readline-sync';
import { randomIntegerFunc, isPrime } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const answer = () => readlineSync.question('Your answer: ');
const questionAndCorrectAnswerFunc = () => {
  const num = randomIntegerFunc(1, 9);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;

  return [question, correctAnswer];
};

export { task, answer, questionAndCorrectAnswerFunc };
