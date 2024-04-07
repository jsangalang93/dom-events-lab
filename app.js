/*-------------------------------- Constants --------------------------------*/
const buttonElement = document.querySelectorAll(".button")
let numberButton = '';
let operatorButton = '';
let equalsButton = document.querySelector('.taDa')
let num1 ='';
let num2 = '';
let displayElement = document.querySelector('.display')
// let sum = '+';
// let minus = '-';
// let times = '*';
// let divide = '/';
let taDa = '';



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
                    // console.log(eval('num1' + 'num2'));


    }else if(numberButton.textContent === '/') {
        operatorButton = numberButton.textContent
            displayElement.textContent = num2
            console.log(operatorButton);  
                                    
    }else if(numberButton.textContent === '*') {
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
            num1 = ''
            num2 = ''
            taDa = ''
            operatorButton = ''

            console.log(operatorButton);
       
    }else if(numberButton.textContent !== '=') {
        if(operatorButton !== '') {
        num2 += numberButton.textContent
        displayElement.textContent = num2
    }else { 
            num1 += numberButton.textContent
            displayElement.textContent = num1
        }
//     }
// })
    
//     })

    // equalsButton.forEach (equalsButton => 
        equalsButton.addEventListener('click', () => {
            taDa = eval(num1 + operatorButton + num2)
            displayElement.textContent = taDa
            console.log(taDa);
        })
    
    }
})
    
}) 










//         if(numberButton.textContent === '=') {
//             taDa = eval(num1 + operatorButton + num2)
//             displayElement.textContent = taDa
//             console.log(taDa)
//     })
// });

// buttonElement.addEventListener('click', () =>{
//   if(numberButton.textContent === '=') {
//   }
// });     
    


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