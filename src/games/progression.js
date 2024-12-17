import readlineSync from 'readline-sync';
import { randomIntegerFunc } from '../utils.js';

const task = 'What number is missing in the progression?';
const answer = () => readlineSync.questionInt('Your answer: ');
const questionAndCorrectAnswerFunc = () => {
  const firstNumberOfProgression = randomIntegerFunc(0, 9);
  const mathProgressionStep = randomIntegerFunc(0, 9);

  const progression = [];

  for (let j = 0; j <= 10; j += 1) {
    const currentNumber = firstNumberOfProgression + j * mathProgressionStep;
    progression[j] = currentNumber;
  }

  const missingNumberIndex = randomIntegerFunc(0, 9);
  const missingNumber = progression[missingNumberIndex];
  progression[missingNumberIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;
  const correctAnswer = missingNumber;

  return [question, correctAnswer];
};

export { task, answer, questionAndCorrectAnswerFunc };
