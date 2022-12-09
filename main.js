// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete the email property from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string from the previous array
// 26) Create an array with 100 random numbers in it
// 27) Write a function to get the maximum and minimum values from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays as parameters and returns the longest one
// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

console.log(`21)`);
let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);

console.log(`22)`);
let personal = {
  name: "Hardika",
  surname: "Moradiya",
  email: "hardika.moradiya@gmail.com",
};
console.log(personal);

console.log(`23)`);
delete personal.email;
console.log(personal);

console.log(`24)`);
let stringArray = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "fat",
  "google",
  "help",
  "i",
  "joy",
];
console.log(stringArray);

console.log(`25)`);
for (let i = 0; i < stringArray.length; i++) {
  stringArray[i];
}
console.log(stringArray);

console.log(`26)`);
let randomNumber = [];

for (let i = 0; i < 100; i++) {
  let n = Math.floor(Math.random() * 50) + 1;
  randomNumber.push(n);
}
console.log(randomNumber);
console.log("length of array: ", randomNumber.length);

console.log(`27)`);
let maxNum;
let minNum;
function minMaxNumber(num) {
  maxNum = Math.max(...num); //  maxNum = Math.max.apply(Math, num);
  console.log("max number ", maxNum);
  minNum = Math.min(...num); // minNum = Math.min.apply(Math, num);
  console.log("min number ", minNum);
}
minMaxNumber(randomNumber);

console.log(`28)`);

let n;
let arrayOfArrays = [];
for (let j = 0; j < 5; j++) {
  console.log("j", j);

  let array = [];
  for (let i = 0; i < 10; i++) {
    n = Math.floor(Math.random() * 10) + 1;
    array.push(n);
    console.log(array);
  }
  arrayOfArrays.push(array);
}
console.log(arrayOfArrays);

console.log(`29)`);
let array1 = [20, 30, 50, 80, 60];
let array2 = [5, 2, 3];

function longestArray(n1, n2) {
  if (n1.length > n2.length) {
    console.log("First array is longer!");
  } else if (n1.length < n2.length) {
    console.log("second is longer!");
  } else {
    console.log("length of array is equal");
  }
}
longestArray(array1, array2);
console.log(`30)`);

// DOM EXERCISES

//         31) Get the element with an id of "container" from the page
//         32) Get every <td> element from the page
//         33) Use a loop for printing the text inside of every <td> element in the page
//         34) Write a function to change the heading of the page
//         35) Write a function to add an extra row to the table
//         36) Write a function to add a class of "test" to each row in the table
//         37) Write a function to add a red background to every link in the page
//         38) Console log "Page loaded" when the page is correctly loaded
//         39) Write a function to add new items to a unordered list
//         40) Write a function to empty a list

console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
console.log(`31)`);
