// Declare and initialize the variables for exercise 1 here:
//const engineIndicatorLight = ['green', 'green blinking']; 
const prompt = require('prompt-sync')();
const engineIndicatorLight = prompt('Enter engineIndicatorLight? ');
// BEFORE running the code, predict what will be printed to the console by the following statements:


if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}