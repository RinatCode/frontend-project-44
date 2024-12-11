#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomIntegerFunc } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const gcd = (a, b) => {
  let answer = 1;
  for (let i = 1; i < Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      answer = i;
    }
  }
  return answer;
};

const brainGCD = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 1;

  while (i < 4) {
    const num1 = randomIntegerFunc();
    const num2 = randomIntegerFunc();
    const correctAnswer = gcd(num1, num2);

    console.log(`Ques1tion: ${num1} ${num2}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    i += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

brainGCD(name);
