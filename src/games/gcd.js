import readlineSync from 'readline-sync';
import { randomIntegerFunc, gcd } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';
const answer = () => readlineSync.questionInt('Your answer: ');
const questionAndCorrectAnswerFunc = () => {
  const num1 = randomIntegerFunc();
  const num2 = randomIntegerFunc();
  const question = `Ques1tion: ${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [question, correctAnswer];
};

export { task, answer, questionAndCorrectAnswerFunc };
