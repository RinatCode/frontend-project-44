#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomIntegerFunc } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const brainPrime = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 1;

  while (i < 4) {
    const num = randomIntegerFunc();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    i += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

brainPrime(name);
