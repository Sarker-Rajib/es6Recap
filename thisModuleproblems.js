// ***********************************************************
//Practice problem using map(), filter(), and find() functions
//Problem Number one
const numArr = [1, 3, 5, 7, 9];

let evenArr = [];
for (const oddArr of numArr) {
   const newEven = oddArr + 1;
   evenArr.push(newEven);
}
//Problem console.log(evenArr);

// Number two
const arr2 = [33, 50, 79, 90, 101, 30];

const tenDevisible = arr2.filter(n => n % 10 === 0);
// console.log(tenDevisible);


//Problem Number Three
const tenDevisibleFirst = arr2.find(n => n % 10 === 0);
// console.log(tenDevisibleFirst);
/**
 * find function return only condition matched first element 
*/
// ***********************************************************




// ***********************************************************
//Practice problem using reduce()
//Problem Number one
const numbers = [1, 9, 17, 22];

// sum using for loop
let sum = 0;
for (const number of numbers) {
   sum += number;
}
// console.log(sum);


// sum using .reduce() method
const sum2 = numbers.reduce((sum, number) => sum + number, 0);
// console.log(sum2);


// problem number two
const people = [
   { name: 'Meena', age: 20 },
   { name: 'Rina', age: 15 },
   { name: 'Suchorita', age: 22 }
];


let sumOfAge = 0;
for (const n of people) {
   const age = n.age;
   sumOfAge += age;
}
// console.log(sumOfAge);

const profiles = [
   { name: 'Meena', age: 20 },
   { name: 'Rina', age: 15 },
   { name: 'Suchorita', age: 22 }
];

// Transform the profiles into an object keyed by the userId:
const sumOfAges = profiles.reduce((sum, profile) => {
   const { age } = profile;
   return sum + age;
}, 0);


console.log(sumOfAges);




// access object value
const student = {
   name: 'Fredie',
   age: 26,
}
// console.log(student.age);

let data = {
   location: [
      {
         latitude: '34.5, 37.8',
         longitude: '98.77, 58.7',
         city: 'Hyderabad',
         country: 'india',
      }
   ]
}


const user = {
   "id": 1,
   "name": "Leanne Graham",
   "username": "Bret",
   "email": "Sincere@april.biz",
   "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
      }
   },
   "phone": "1-770-736-8031 x56442",
   "website": "hildegard.org",
   "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
   }
}

// console.log(user.email);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.geo.lat);
// console.log(user.company.name);

// const profiles = [
//    { name: 'Meena', age: 20 },
//    { name: 'Rina', age: 15 },
//    { name: 'Suchorita', age: 22 }
// ];

// // Transform the profiles into an object keyed by the userId:
// const sumOfAges = profiles.reduce((sum, profile) => {
//    const { age } = profile;
//    return sum + age;
// }, 0);


// console.log(sumOfAges);