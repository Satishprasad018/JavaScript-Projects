let randomNumber = parseInt(Math.random() * 100 + 1);

const submitNumber = document.querySelector("#subt");
const userInput = document.querySelector(".guessField");
const preguess = document.querySelector(".guesses");
const lowOrHigh = document.querySelector(".lowOrHi");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");

const newButton = document.createElement('button');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submitNumber.addEventListener("click", function (event_1) {
    event_1.preventDefault();

    const input = parseInt(userInput.value);
    //console.log(input);
    validateGuess(input);
  });
}
function validateGuess(input) {
  if (isNaN(input)) {
    alert("Please Enter a valid number");
  } else if (input < 1) {
    alert("Please enter a number more than 1");
  } else if (input > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(input);
    //console.log(prevGuess);
    if (numGuess === 10) {
      displayGuess(input);
      displayMessage(`Game Over , Random Number was ${randomNumber} `);
      endGame();
    } else {
      displayGuess(input);
      checkGuess(input);
    }
  }
}

function checkGuess(input) {
  if (input === randomNumber) {
    displayMessage("Correct Guess");
    endGame();
  } else if (input < randomNumber) {
    displayMessage("Number is too low");
  } else if (input > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayGuess(input) {
  userInput.value = "";
  //console.log(input);
  preguess.innerHTML += `${input} , `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submitNumber.setAttribute("disabled", "");
  newButton.textContent = 'New Game';
  startOver.appendChild(newButton);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector(".newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute("disabled");
    submitNumber.removeAttribute("disabled");

    startOver.removeChild(p);
    playGame = "true";
  });
}


