import readlineSync from 'readline-sync';
import { randomIntegerFunc, isEven } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const answer = () => readlineSync.question('Your answer: ');

const questionAndCorrectAnswerFunc = () => {
  const randomInteger = randomIntegerFunc();

  const question = `Question: ${randomInteger}`;
  const correctAnswer = isEven(randomInteger) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { task, answer, questionAndCorrectAnswerFunc };
