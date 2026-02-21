// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(stack, a, b) {
  const temp = new Stack();

  while (!stack.isEmpty()) {
    temp.push(stack.pop());
  }

  let skipping = false;
  while (!temp.isEmpty()) {
    const item = temp.pop();
    if (item === a || item === b) {
      stack.push(item);
      skipping = item === a;
      if (item === b) skipping = false;
    } else if (!skipping) {
      stack.push(item);
    }
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
