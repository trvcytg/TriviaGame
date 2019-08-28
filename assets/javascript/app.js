// Define Vairables
//Number values
let timeLeft;
let score;
//Text values to print to index.html
let qText = $(`#questionText`);
let pickA = $(`#choiceA`);
let pickB = $(`#choiceB`);
let pickC = $(`#choiceC`);
let pickD = $(`#choiceD`);
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
//Array of questions
let allQ = [qOne, qTwo, qThree, qFour, qFive];
//Array for question/answer order
var questionOrder = [0, 1, 2, 3, 4];
var pickOrder = [0, 1, 2, 3];
let answer;
let countdown;

// Define funtions
function orderRandom(xx) {
  xx = xx.sort(func);

  function func(a, b) {
    return 0.5 - Math.random();
  }
  console.log(`order of questions: ${xx}`);
}

function startGame() {
  //Reset values
  questionOrder = [0, 1, 2, 3, 4];
  pickOrder = [0, 1, 2, 3];
  //Set timer
  timeLeft = 10;
  score = 0;
  //Pick question and answers
  orderRandom(questionOrder);
}

function runTimer() {
  clearInterval(countdown);
  countdown = setInterval(decrement, 1000);
}

function decrement() {
  timeLeft--;
  $(`#secLeft`).text(timeLeft - 1);
  if (timeLeft === 0) {
    stop();
    timeUp();
    $(`#secLeft`).text(timeLeft - 2);
  }
}

function stop() {
  clearInterval(countdown);
  if (timeLeft < 10) {
    timeLeft = 10;
    $(`#secLeft`).text(timeLeft - 2);
  }
}

function timeUp() {
  qText.text(
    `Whoops! You ran out of time for that one! Click to move on to the next.`
  );
  if (pickA.hasClass("win") === true) {
    pickB.text(`- -- --- -- -`);
    pickC.text(`- -- --- -- -`);
    pickD.text(`- -- --- -- -`);
  } else if (pickB.hasClass("win") === true) {
    pickA.text(`- -- --- -- -`);
    pickC.text(`- -- --- -- -`);
    pickD.text(`- -- --- -- -`);
  } else if (pickC.hasClass("win") === true) {
    pickB.text(`- -- --- -- -`);
    pickA.text(`- -- --- -- -`);
    pickD.text(`- -- --- -- -`);
  } else if (pickD.hasClass("win") === true) {
    pickB.text(`- -- --- -- -`);
    pickC.text(`- -- --- -- -`);
    pickA.text(`- -- --- -- -`);
  }
  removeWinClass();
  timeLeft = 10;
}

function displayChoices(x) {
  qText.text(question[x]);

  if (question[0] === question[x]) {
    choices(qOne);
  } else if (question[1] === question[x]) {
    choices(qTwo);
  } else if (question[2] === question[x]) {
    choices(qThree);
  } else if (question[3] === question[x]) {
    choices(qFour);
  } else if (question[4] === question[x]) {
    choices(qFive);
  }
}

function choices(y) {
  pickA.text(y[pickOrder[0]]);
  if (pickOrder[0] === 0) {
    pickA.addClass("win");
  }

  pickB.text(y[pickOrder[1]]);
  if (pickOrder[1] === 0) {
    pickB.addClass("win");
  }

  pickC.text(y[pickOrder[2]]);
  if (pickOrder[2] === 0) {
    pickC.addClass("win");
  }

  pickD.text(y[pickOrder[3]]);
  if (pickOrder[3] === 0) {
    pickD.addClass("win");
  }
  console.log(`added win class`);
}

function removeWinClass() {
  pickA.removeClass("win");
  pickB.removeClass("win");
  pickC.removeClass("win");
  pickD.removeClass("win");
  console.log(`removed win class`);
}

function checkWin(xx) {
  if (xx.hasClass(`win`) == true) {
    score++;
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
  stop();
  removeWinClass();

  placeVal++;
}

function endgame() {
  stop();
  qText.text(
    `Game Over! You got ${score} questions correct! Click below to start over.`
  );
  pickA.text(`# Correct`);
  pickB.text(`# Incorrect`);
  pickC.text(score);
  pickD.text(5 - score);
  $(`#choices`).click(function() {
    location.reload();
  });
}

startGame();
var placeVal = -1;
$(`#choices`).click(function() {
  runTimer();
  qText.text(question[questionOrder[placeVal + 1]]);
  orderRandom(pickOrder);
  displayChoices(placeVal);
  if (placeVal > 4) {
    endgame();
  }
});
pickA.click(function() {
  checkWin(pickA);
  stop();
});
pickB.click(function() {
  checkWin(pickB);
  stop();
});
pickC.click(function() {
  checkWin(pickC);
  stop();
});
pickD.click(function() {
  checkWin(pickD);
  stop();
});
