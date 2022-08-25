const numbers = [3, 9, 5, 2, 9, 77, 12, 45];
const fives = numbers.find(num => num % 5 === 0)
const fives1 = numbers.filter(num => num % 5 === 0)
// find will take first condition matched element

const products = [
   {id: 1, name: 'laptop1', price: 44500},
   {id: 2, name: 'laptop2', price: 44501},
   {id: 3, name: 'laptop3', price: 44502},
   {id: 4, name: 'laptop4', price: 44503}
];
const cheap = products.find(product => product.price < 44502);

console.log(fives);
console.log(fives1);
console.log(cheap);