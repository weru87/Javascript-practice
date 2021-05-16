import { inventors } from "./arraydata1.js";
import { people } from "./arraydata1.js";

//practice based on Wes Bos' array cardio 1
//https://javascript30.com

console.log(people);
console.log(inventors);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornin1500 = inventors.filter(
  (inventor) => inventor.year > 1500 && inventor.year < 1600
);
console.log(bornin1500);

// Array.prototype.map()
// returns a new array with the same length
// while doing something with the elements
// 2. Give us an array of the inventors first and last names
const nameArray = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.log(nameArray);

// Array.prototype.sort()
// you got TWO items! and have to compare those two
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedArray = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(sortedArray);

//sort by how many years lived
//console log the years lived with the inventor's last name
const otherSort = inventors
  .sort((a, b) => (a.passed - a.year > b.passed - b.year ? 1 : -1))
  .map((inventor) => `${inventor.last}: ${inventor.passed - inventor.year}`);
console.log(otherSort);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalLivedYears = inventors.reduce((total, inventor) => {
  return total + inventor.passed - inventor.year;
}, 0);
console.log(totalLivedYears);

// 5. Sort the inventors by years lived
// ua. mint fentebb
const oldest = inventors.sort((a, b) => {
  return a.passed - a.year > b.passed - b.year ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// try this by copying into console
