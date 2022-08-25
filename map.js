const numbers = [3, 9, 5, 2];

// const output = [];
// for(const number of numbers) {
//    const doubled = number * 2;
//    output.push(doubled);
// }

function getDouble(numbers) {
   const output = [];

   for (const number of numbers) {
      const doubled = doubleIt(number);
      output.push(doubled);
   }
   return output;
}

function doubleIt(num){
   return num * 2;
}

// const doubleItA = (num) => num * 2;

// console.log(getDouble(numbers));

// const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map(num => num * 2);
const makeDouble3 = numbers.map(x => x * 2);

console.log(makeDouble3);

/**
 * 1. Get an array 
 * 2. for every elements of the array do something
 * 3. store the result in the array
 * 4. return the result array
**/