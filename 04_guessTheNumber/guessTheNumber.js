const randomNumber = parseInt(Math.random() * 100 + 1);

const submitNumber = document.querySelector("#subt")
const userInput = document.querySelector(".guessField")
const preguess = (document.querySelector(".guesses"))
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submitNumber.addEventListener("click",function(event_1){
        event_1.preventDefault();

        const input = parseInt(userInput.value)
        //console.log(input);
        validateGuess(input)
    })
}
function validateGuess(input){
    if(isNaN(input)){
        alert("Please Enter a valid number")
    }else if (input < 1){
        alert("Please enter a number more than 1")
    }else if (input > 100){
        alert("Please enter a number less than 100")
    }else{
        preguess.push(input)
        if(numGuess === 11){
            displayGuess(input)
            displayMessage("Game Over , Random Number was ${randomNumber} ")
            endGame()
        }else{
            displayGuess(input)
            checkGuess(input)
        }
    }
}

function checkGuess(input){
       if(input === randomNumber){
        displayMessage("Correct Guess")
        endGame()
       }else if (input < randomNumber){
         displayMessage("Number is too low")
       }else if (input > randomNumber){
         displayMessage("Number is too high")
       }
}

function displayGuess(input){

}

function displayMessage(message){

}

function newGame(){

}

function endGame(){

}