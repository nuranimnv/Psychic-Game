const winsH3 = document.querySelector("#wins-count");
const lossesH3 = document.querySelector("#losses-count");
const guessesH3 = document.querySelector("#guess-left");
const helper = document.querySelector("#helper");

function randomNumberGenerator() {
  return Math.floor(Math.random() * 10);
}

let guessedNum = randomNumberGenerator();
console.log(guessedNum);
var winsCounter = 0;
var losesCounter = 0;
var chanceCounter = 5;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
window.addEventListener("keyup", (e) => {
  var numberThatEnteredByUser = e.key;
  if (numbers.includes(parseInt(numberThatEnteredByUser))) {
    if (numberThatEnteredByUser > guessedNum) {
      helper.innerHTML = "Plese enter the number that smaller that it";
      chanceCounter--;
      guessesH3.innerHTML = `Chance That You Have: ${chanceCounter}`;
      if (chanceCounter == 0) {
        losesCounter++;
        alert("You lost the game");
        lossesH3.innerHTML = `Loses Count: ${losesCounter}`;
        chanceCounter = 5;
        guessesH3.innerHTML = `Chance That You Have: ${chanceCounter}`;
        guessedNum = randomNumberGenerator();
        helper.innerHTML = "You can do it again";
        console.log(guessedNum);
      }
    } else if (numberThatEnteredByUser < guessedNum) {
      helper.innerHTML = "plese enter the number that greater that it";
      chanceCounter--;
      guessesH3.innerHTML = `Chance That You Have: ${chanceCounter}`;
      if (chanceCounter == 0) {
        losesCounter++;
        alert("You lost the game");
        lossesH3.innerHTML = `Loses Count: ${losesCounter}`;
        chanceCounter = 5;
        guessesH3.innerHTML = `Chance That You Have: ${chanceCounter}`;
        guessedNum = randomNumberGenerator();
        helper.innerHTML = "You can do it again";
        console.log(guessedNum);
      }
    } else if (numberThatEnteredByUser == guessedNum) {
      helper.innerHTML = "Yess You Finally Find The Number))";
      winsCounter++;
      winsH3.innerHTML = `Wins Count: ${winsCounter}`;
      alert("You won the game");

      chanceCounter = 3;
      guessesH3.innerHTML = `Chance That You Have: ${chanceCounter}`;
      guessedNum = randomNumberGenerator();
      helper.innerHTML = "You can do it again";
      console.log(guessedNum);
    }
  } else {
    alert("Please enter a number");
  }
});