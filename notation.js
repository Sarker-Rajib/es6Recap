const student = {
   name: 'mojid',
   id: 90,
   age: 15,
   marks: {
      math: 99,
      physics: 97,
      chemistry: 81
   },
};

const marks = student.marks;
const math = student.marks.math;

const subject = 'math';
const mathMark = student.marks[subject];

const chemistry = student['marks']['chemistry'];

console.log(chemistry);
console.log(mathMark);