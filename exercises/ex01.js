// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(stack, a, b) {
  let posA = -1;
  let posB = -1;
  let index = 0;
  const temp = new Stack();

  while (!stack.isEmpty()) {
    const item = stack.pop();
    temp.push(item);
    if (item === a) posA = index;
    if (item === b) posB = index;
    index++;
  }

  while (!temp.isEmpty()) {
    stack.push(temp.pop());
  }

  return Math.abs(posA - posB);
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance(students, "Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance(students, "Joe", "Jill");
console.log(distance2); // 2
