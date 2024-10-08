// Problem 1: Manage a Todo List
// You have an array representing a todo list. Perform the following operations on the array:

// Step 1: Add the task "Buy groceries" to the end of the list.
// Step 2: Add the task "Clean room" to the beginning of the list.
// Step 3: Remove the last task from the list and store it in a variable.
// Step 4: Find the index of "Clean room" and remove it from the list.
// Step 5: Print the current length of the list and log the remaining tasks.

//code
let todoList = ["Do laundry", "pay bills" , " walk the dog"];
todoList.push("Buy Groceries");
console.log("after push Buy Groceries:",todoList)

todoList.unshift("Clean Room");
console.log("after unshift clean room:",todoList)

todoList.pop();
console.log("after pop cleran room:",todoList)

console.log("index of clean room is",todoList.indexOf("Clean Room")); 

todoList.shift();
console.log(todoList);

console.log("length of list is:",todoList.length);


// Problem 2: Guest List
// You are managing a guest list for an event. Perform the following tasks:

// Step 1: Add three guests to the list using push().
// Step 2: The first guest decides not to come. Remove them using shift().
// Step 3: A new guest arrives and should be added to the beginning of the list using unshift().
// Step 4: Find the index of the guest named "John Doe" and print it.
// Step 5: Log the total number of guests by printing the array length.

let guest = ["alice" , "bob"];

guest.push("Tushar", "Sunny", "Imon");

guest.shift();

guest.unshift("John Doe");

console.log("index of John Doe is:",guest.indexOf("John Doe"));

console.log("length of guest list is:",guest.length);

// Problem 3: Grade Evaluation
// You need to develop a grading system. Based on a student's score, assign a letter grade:

// Step 1: If the score is 90 or higher, assign grade "A".
// Step 2: If the score is 80 or higher but less than 90, assign grade "B".
// Step 3: If the score is 70 or higher but less than 80, assign grade "C".
// Step 4: If the score is 60 or higher but less than 70, assign grade "D".
// Step 5: If the score is below 60, assign grade "F".

let score = 85;

if (score >= 90) {
    console.log("grade is A");
};

if (score >= 80 && score < 90) {
    console.log("grade is B");
};

if (score >= 70 && score < 80) {
    console.log("grade is C");
};

if (score >= 60 && score < 70) {
    console.log("grade is D");
};

if (score < 60) {
    console.log("grade is F");
};

// Problem 4: Modify an Array of Colors
// You have an array of color names. Complete the following operations:

// Step 1: Add the color "Yellow" to the end of the array using push().
// Step 2: Remove the first color using shift().
// Step 3: Add the color "Purple" to the beginning using unshift().
// Step 4: Find the index of the color "Blue" and remove it from the array.
// Step 5: Print the current array and its length.

let colors = ["red","blue","green"];

colors.push("yellow");

colors.shift();

colors.unshift("purple");

console.log(colors.indexOf("blue"));

console.log(colors.length);