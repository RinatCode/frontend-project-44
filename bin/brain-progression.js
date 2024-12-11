#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomIntegerFunc } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const brainProgression = (UserName, progressionLength = 10) => {
  console.log('What number is missing in the progression?');
  let i = 1;
  const progression = [];

  while (i < 4) {
    const firstNumberOfProgression = randomIntegerFunc(0, 9);
    const mathProgressionStep = randomIntegerFunc(0, 9);

    for (let j = 0; j <= progressionLength; j += 1) {
      const currentNumber = firstNumberOfProgression + j * mathProgressionStep;
      progression[j] = currentNumber;
    }

    const missingNumberIndex = randomIntegerFunc(0, 9);
    const missingNumber = progression[missingNumberIndex];
    progression[missingNumberIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== missingNumber) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.`);
      console.log(`Let's try again, ${UserName}!`);
      return;
    }

    i += 1;

    console.log('Correct!');
  }

  console.log(`Congratulations, ${UserName}!`);
};

brainProgression(name);
