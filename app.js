/*-------------------------------- Constants --------------------------------*/
const buttonElement = document.querySelectorAll(".button")
let numberButton = '';
let operatorButton = '';
let num1 ='';
let num2 = '';
let displayElement = document.querySelector('.display')



// V loops through all the buttons and logs all numbers as a whole
buttonElement.forEach (numberButton => {
    // console.log(numberButton.textContent)
    //^printing text 'textContent'
    numberButton.addEventListener('click', () =>{
                                
    if(numberButton.textContent === '+') {
        // store operator and clear display after storing 
        operatorButton = numberButton.textContent
            displayElement.textContent = num2
                    console.log(operatorButton);  

    }else if(numberButton.textContent === '/') {
        operatorButton = numberButton.textContent
            displayElement.textContent = num2
            console.log(operatorButton);  
                                    
    }else if(numberButton.textContent === '*') {
        operatorButton = numberButton.textContent
            displayElement.textContent = num2
            console.log(operatorButton);  

    }else if(numberButton.textContent === '+') {
        operatorButton = numberButton.textContent
            displayElement.textContent = num2
            console.log(operatorButton);

    }else if(numberButton.textContent === '-') {
        operatorButton = numberButton.textContent
            displayElement.textContent = num2
            console.log(operatorButton);                     
    }else if(numberButton.textContent === 'C') {
        operatorButton = numberButton.textContent
            displayElement.textContent = '',
            console.log(operatorButton);
       
    }else if(numberButton.textContent !== '=') {
        if(operatorButton !== '') {
        num2 += numberButton.textContent
        displayElement.textContent = num2
    }
        else { 
            num1 += numberButton.textContent
            displayElement.textContent = num1
        }
        
    } else {}
       
   });
});






// buttonElement.addEventListener('click', () =>{
    


/*-------------------------------- Variables --------------------------------*/





/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener("click", (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value goes here...
//     });
//   });

//   if(button.target.id === 0) {
//   return 0;
//   }

//   if(button === '+') => {
//     operator = button
//     console.log('awesome');
//    ) else if {(button === '-') => {
//     console.log()
//   } else if {(button === '%') => {
//     console.log()
//   }



/*-------------------------------- Functions --------------------------------*/
