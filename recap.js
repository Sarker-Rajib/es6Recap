// 01. var let const
// break with var
// let const {block elements}
const numbers = [12, 23, 43, 88];
let salary = 450;
salary = 500;

// 02. default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 03. template string
const elementHTML = `
<div>
    <h1> Hello There! </h1>
    <p>${numbers}</p>
</div>
`

// 04. arrow function
const doubleIt = x = x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;



// 05. spread 
const ages = [22, 25, 29, 26];
const newAges = [...ages, 55, 58];

// 06. destructuring
const {x, y, ...z} = {x: 45, y: 44, z: 57, name: 'naman'};
