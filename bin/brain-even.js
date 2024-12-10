#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomIntegerFunc = (min = 0, max = 100) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isEven = (int) => (int % 2 === 0 ? 'yes' : 'no');

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const brainEven = (usrName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;

  while (i < 4) {
    const randomInteger = randomIntegerFunc();
    const correctAnswer = isEven(randomInteger);
    console.log(`Question: ${randomInteger}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${usrName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${usrName}!`);
};

brainEven(name);
