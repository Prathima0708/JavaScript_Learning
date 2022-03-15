// const startGameBtn=document.getElementById('start-game-btn')

// function startGame()
// {
//     console.log('Game is starting...')
// }

// // startGame()  //direct execution

// //we can store function in var :

// // const start=function startGame()
// // {
// //     console.log('Game is starting...')
// // }
// // startGameBtn.addEventListener('click',start)

// // const person={
// //     greet:function greet1(){
// //         console.log("Hi There...")
// //     }
// // }
// // person.greet()

// console.log(typeof startGame)
// console.dir(startGame)

// startGameBtn.addEventListener('click',startGame)

const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice ,We chose ${DEFAULT_CHOICE} for you !`);
    return ;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (cCoice, pChoice=DEFAULT_CHOICE) {  //setting default choice if player chooses invalid option
  if (cCoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cCoice === ROCK && pChoice === PAPER) ||
    (cCoice === PAPER && pChoice === SCISSORS)||
    (cCoice===SCISSORS &&pChoice===ROCK)
  ) {
      return RESULT_PLAYER_WINS

  }
  else
  {
      return RESULT_COMPUTER_WINS
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is Starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice)
 {
   winner=getWinner(computerChoice,playerChoice)
 }
 else
 {
   winner=getWinner(computerChoice)
 }
  console.log(winner);
  let message=`You picked ${playerChoice || DEFAULT_CHOICE} and computer picked ${computerChoice} , therefore `
  if(winner===RESULT_DRAW)
  {
      message=message+'you had a draw..!'
  }else if(winner===RESULT_PLAYER_WINS)
  {
    message=message+'you Won..!'
  }
  else{
      message=message+'you Lost..'
  }
  alert(message)
  gameIsRunning=false
});


















//not related to game(rest operator)

const sumUp=(a,b,...numbers)=>{
  let sum=0
  for(const num of numbers){
    sum=sum+num
    
  }
  return sum
 
}
console.log(sumUp(1,2,3,4,5))
console.log(sumUp(1,2,3,4,5,5,6))