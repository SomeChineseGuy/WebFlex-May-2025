// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

// Read the command line
// console.log(process.argv)

// Make Variables
// const are values that do not change and will always stay the same
const argument = process.argv;
const newArgv = argument.slice(2)


// Test early and TEST EVERYTHING
console.log(newArgv);

// we want to loop over our array
// 3 ways of doing
// for loops
// c -style loop
// for(let i = 0; i < newArgv.length; i++) {
//   // console.log(newArgv[i]);
// }

// for....in is the only loop for Objects
// for(let number in newArgv) {
//   console.log(newArgv[number]);
// }

// for....of mainly used for Arrays
let startingNum = 0
for(let number of newArgv) {
  const fullNum = Number(number);
  // console.log(Number.isInteger(fullNum));
  if(fullNum > 0) {
    if(Number.isInteger(fullNum)) {
      startingNum += fullNum
    }
    
  }
}

console.log(startingNum);

// const myNumber = 10;
// const myName = 'Alvin '
// const myColor = 'Purple'

// console.log(myNumber + myName);