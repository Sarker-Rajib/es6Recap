const numbers = [3, 9, 5, 2, 9, 77, 12];
const bigNums = numbers.filter(n => n > 5);
const tinyNums = numbers.filter(n => n < 6);
const evenNums = numbers.filter(n => n % 2 === 0);

console.log(bigNums);
console.log(tinyNums);
console.log(evenNums);