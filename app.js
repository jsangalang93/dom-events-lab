/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".button")
const button0Element = document.querySelector()
const button1Element = document.querySelector()
// const button2Element = document.querySelector()
// const button3Element = document.querySelector()
// const button4Element = document.querySelector()
// const button5Element = document.querySelector()
// const button6Element = document.querySelector()
// const button7Element = document.querySelector()
// const button8Element = document.querySelector()
// const button9Element = document.querySelector()
// const equalsButton = document.querySelector()
// const minusButton = document.querySelector()
// const timesButton = document.querySelector()
// const divideButton = document.querySelector()
// const clearButton = document.querySelector()
// const plusButton = document.querySelector()

/*-------------------------------- Variables --------------------------------*/
let operator = '';
let numA = '';
let numB = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value goes here...
    });
  });

//   if(button.target.id === 0) {
//   return 0;
//   }

//   if(button === '+') function() {
//       operator = button;
//       console.log('awesome');
//   } else if {(button === '-') => {
//     console.log()
//   }} else if {(button === '%') => {
//     console.log()
//   }} else if {(button === '*') => {
//         console.log()
//     }} else {(button === '=') => {
//         console.log()
//     }
// }


/*-------------------------------- Functions --------------------------------*/

