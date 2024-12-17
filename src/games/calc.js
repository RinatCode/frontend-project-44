import readlineSync from 'readline-sync';
import { randomIntegerFunc } from '../utils.js';

const task = 'What is the result of the expression?';

const answer = () => readlineSync.questionInt('Your answer: ');

const questionAndCorrectAnswerFunc = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[randomIntegerFunc(0, 2)];
  const num1 = randomIntegerFunc();
  const num2 = randomIntegerFunc();

  const question = `Question: ${num1} ${currentOperator} ${num2}`;

  let correctAnswer;

  switch (currentOperator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log('unknown operator');
  }
  return [question, correctAnswer];
};

export { task, answer, questionAndCorrectAnswerFunc };
