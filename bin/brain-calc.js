#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomIntegerFunc = (min = 0, max = 100) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const brainCalc = (userName) => {
  console.log('What is the result of the expression?');

  let i = 1;

  while (i < 4) {
    const operators = ['+', '-', '*'];
    const currentOperator = operators[randomIntegerFunc(0, 2)];
    const num1 = randomIntegerFunc();
    const num2 = randomIntegerFunc();
    let correctAnswer;

    switch (currentOperator) {
      case '+':
        correctAnswer = (num1 + num2);
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

    console.log(`Question: ${num1} ${currentOperator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    i += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

brainCalc(name);
