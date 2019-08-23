// Define Vairables
//Number values
let timeLeft;
let score;
//Text values to print to index.html
let qText;
let pickA;
let pickB;
let pickC;
let pickD;
//Array of questions
const question = [
  `Are you cool?`,
  `Is he cool?`,
  `Am I cool?`,
  `Cats, what do you think?`,
  `Do you think you won?`
];
//Array of answers for each question
let qOne = [`Yes`, `No`, `Maybe`, `Cooler than you`];
let qTwo = [`Yeah`, `Nah`, `Possibly`, `He's cooler than you`];
let qThree = [`Yup`, `Nope`, `Idk`, `I'm cooler than you`];
let qFour = [`Chyea`, `Nah nah`, `Doooope`, `Hail Stan`];
let qFive = [
  `I always do`,
  `Lmao`,
  `Can you even win this?`,
  `What does it really mean to win?`
];
//Array for question/answer order
var questionOrder = [0, 1, 2, 3, 4];
var pickOrder = [0, 1, 2, 3];

// Define funtions
function orderRandom(xx) {
  xx = xx.sort(func);

  function func(a, b) {
    return 0.5 - Math.random();
  }
  console.log(xx);
}

function startGame() {
  //Reset values
  questionOrder = [0, 1, 2, 3, 4];
  pickOrder = [0, 1, 2, 3];
  timeLeft = 8;
  score = 0;
  //Pick question and answers
  orderRandom(questionOrder);
  orderRandom(pickOrder);
  //Print question and possible answers to page
  //Set timer
  //Print timer to page every second
}
startGame();
function playGame() {
  //Determine if chosen answer was correct answer on click
  //if answer is correct -- show correct answer page on timer
  //add one to score tally
  //else -- show wrong answer page with correct answer on timer
  // Upon timer hitting 0, show next question
}

function reset() {}
