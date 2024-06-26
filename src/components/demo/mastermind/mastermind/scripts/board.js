// MASTERMIND backend score evaluation script

// set arrays for game.

// set constants

// testing for repo update.

const choiceCount = 6; // this will be an adjustable option later
const roundCount = 12; // this will be an adjustable option later

export function codeMaker() {
  const code = ['', '', '', ''];
  // get the codemaker's secret code
  localStorage.removeItem("CodeGame");
  for (let i = 0; i < 4; i++) {
    let codeChoice = Math.floor(Math.random() * choiceCount); 
    code[i] = codeChoice;
  }
  let codescores = [];
  
  for (let i = 0; i < roundCount; i++) {
    codescores[i] = [['','','',''],['','','',''],'','']
  }


  localStorage.setItem("CodeGame", JSON.stringify(codescores));
  
  console.log("Solution", code);
  return code;
}

export function codeBreaker(guessArray, codemaker) {
  // begin the game; allow the codebreaker to begin guessing

  console.log("Secret Code", codemaker);
  console.log("Guess Array", guessArray);

  // Set variables
  let codebreaker = JSON.parse(localStorage.getItem("CodeGame")); // the ongoing guess history in local storage. Get that.
  let winState; // did they win in this round?
  // let round; // get the round array from the guessing history.

  // temp - there WILL be codebreaker in local storage generated by CodeMaker, so we'll need to adjust to account for that
  // if (!codebreaker) {
    // codebreaker = [];
  //   round = 1;
  //   console.log(codebreaker);
  // }
  // otherwise, the round is the length plus 1
  // else {
  //   round = codebreaker.length + 1; // this might want to use the round option in the response, perhaps
  // }

  // calculate the round

  let round;
  for (let i = 0; i < roundCount; i++) {
    console.log(i, codebreaker[i])
    if (codebreaker[i][3] === "") {
      console.log(codebreaker[i])
        round = i; 
        break
      }
  }
  let trueRound = round + 1;
  console.log(round+1)
  // the following two variables create temp arrays of the secret and guessed code, so we can mess with them
  let secretArray = structuredClone(codemaker); 
  let roundGuess = JSON.parse(JSON.stringify(guessArray)); 

  // run scoring functions to determine... score...
  let score = codeExact(guessArray, secretArray);
  console.log(score)
  // set the winState field in the response - 2 for WIN, 1 for CONTINUE, 0 for LOST
  // Although, we may not want to have a LOSS function, as it requires 
  for (let i = 0; i < 4; i++) {
    if (score[i] === 2) {
      winState = 2;
      console.log("Score", winState)
      continue;
    } else if (score[i] !== 2) {
      winState = 1;
      console.log("Score", winState)
      break;
    }
  }
  if (winState !== 2 && trueRound === roundCount) {
    winState = 0
  }

  // push to the history array and return to localStorage
  codebreaker[round]=([roundGuess, score, winState, trueRound]);
  console.log("Codebreaker", codebreaker);
  localStorage.setItem("CodeGame", JSON.stringify(codebreaker));
  return codebreaker;
}

// the following two chained functions get the score.
// we do this by elimination to avoid duplicates. This is because:
// - a choice/code match is 1:1, regardless of whether it is exact or inexact
// - both guess and code can have duplicate choices, they need to apply independently and without duplication

function codeExact(guessArray, secretArray) { 
  //We start by calculating all EXACT MATCHES (where guess is correct and in right position) and removing them from the arrays.

  let validatedScore = [0,0,0,0]; // temp array for score result. Note that it is _not_ positional to the code, just a list of scores.

  console.log("*** Begin exact validation ***", secretArray);
  
  // console.log("EXACT DATA SET: ", guessArray, secretArray, validatedScore);
  
  // compare code to guess at i position.
  for (let i = 0; i < secretArray.length; i++) {
    let code = secretArray[i];
    let guess = guessArray[i];
    console.log(code, guess);
    if (code === guess) {
      // if the choice and position match, clear value from array and push "2" to score
      secretArray[i] = "";
      guessArray[i] = "";
      validatedScore[i] = 2;
    } else {
      // console.log("XX Doesn't match");
    }
  }
  codeMissing(guessArray, secretArray, validatedScore); // with remaining choices, move to inexact match function
  return validatedScore;
}

function codeMissing(guessArray, secretArray, validatedScore) {
  // this takes the remaining arrays, and compares each code to each guess to find any inexact matches (correct choice, wrong position)
  console.log("***Begin inexact validation***");
  
  // console.log("INEXACT DATA SET: ", guessArray, secretArray, validatedScore);

  for (let i = 0; i < secretArray.length; i++) { // loop for each code
    let code = secretArray[i];
    for (let j = 0; j < guessArray.length; j++) { // loop for each guess
      let guess = guessArray[j];

      if (code !== "" && guess !== "" && code === guess) { // only compare if there is a value in the array
        // if there is a match, remove from arrays and push "1" to score.
        secretArray[i] = "";
        guessArray[j] = "";
        validatedScore[i] = 1;
        break;
      } else {
        // console.log("XX Doesn't match");
      }
    }
  }
  return validatedScore;
}
