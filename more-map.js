const numbers = [2, 3, 4, 6];
const half = numbers.map( n => n/2);
const thirds = numbers.map(x => x/3);

const friends = ['abul', 'mokbul', 'sam', 'ram'];
const firstLetters = friends.map(friend => friend[0]);

const nameLengths = friends.map(friend => friend.length)

// console.log(firstLetters);
// console.log(nameLengths);

const products = [
   {id: 1, name: 'laptop1', price: 44500},
   {id: 2, name: 'laptop2', price: 44501},
   {id: 3, name: 'laptop3', price: 44502},
   {id: 4, name: 'laptop4', price: 44503}
];

// const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items);
console.log(prices);