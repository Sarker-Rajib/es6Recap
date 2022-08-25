// map, forEach, filter, find, reduce
const numbers = [3, 9, 5, 2, 9, 77, 12, 45];

// .reduce (accumulatorFunction, initial values)
// accumulator function use two parameters

// one line
const total = numbers.reduce((prev, cur) => prev + cur , 0);

// multi line
const total2 = numbers.reduce((prev, cur) => {
   return prev + cur;   
}, 0);


console.log(total);
console.log(total2);