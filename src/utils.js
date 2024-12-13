const randomIntegerFunc = (min = 0, max = 100) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const gcd = (a, b) => {
  let answer = 1;
  for (let i = 1; i < Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      answer = i;
    }
  }
  return answer;
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export { randomIntegerFunc, gcd, isPrime };
