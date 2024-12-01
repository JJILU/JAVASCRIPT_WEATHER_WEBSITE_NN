// Note: Data stored in localstorage must automately be a string.

const todos = [
  { text: "Buy groceries", author: "Naomi" },
  { text: "Study JavaScript", author: "Omi" },
  { text: "Complete Flutter project", author: "Walud" },
  { text: "Plan weekend trip", author: "Jeff" },
];

// [1] converts javascript array to json string
// console.log(JSON.stringify(todos));

// [2] store json string in local storage
localStorage.setItem('todos', JSON.stringify(todos));

// [3] get data
const stored = localStorage.getItem('todos');
console.log(stored);

// convert json to javascript object
// console.log(JSON.parse(stored));
const data = JSON.parse(stored);
console.log(data[1]['author']);





