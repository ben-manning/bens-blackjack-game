// our cards will be the numbers 1 - 11 in our first pass
// the player choses to get a card
// the total of those cards are added up
// the player has the choice to stop getting cards

// the dealer
// after the player has completed their turn
// dealer gets cards
// dealer stops at a certain point
// comparison of cards ensues
// the dealer must draw if are lower than or equal 17


// rules
// the player wins when:
//  the players total is equal to 21
//  the players total is higher than the dealer
//  the dealer goes over 21


// the player loses when:
//  the dealer hits 21 and the player is not at that total
//  the player goes higher than 21
//  the dealer is closer to 21 than the player


// currents bugs:
// right now my random number generates zero sometimes
// DRY up the Math methods
// fix the camel case html ids


// variables constants
let winner;
let playerTotal = 0;
let dealerTotal;
let playerTurn = true; // this is the starting value of the player turn

// cached elements -- buttons or things from the html
const playerDrawButton = document.querySelector('#playerDrawBtn');
const changeTurn = document.querySelector('#changeTurn');
const playerTotalDisplay = document.querySelector('#player-total');
const dealerTotalDisplay = document.querySelector('#dealer-total');



// functions --- the definitions of the functions i want to use
const startTheGame = () => {
  // draw the two player cards
  let playerCardOne = Math.floor(Math.random() * 12);
  let playerCardTwo = Math.floor(Math.random() * 12);
  // set the playerTotal to those two cards;
  playerTotal = playerCardOne + playerCardTwo;

  // draw the dealer card
  let dealerCardOne = Math.floor(Math.random() * 12);
  // set the dealerTotal to the dealer card;
  dealerTotal = dealerCardOne;

  playerTotalDisplay.innerText = playerTotal;
  dealerTotalDisplay.innerText = dealerTotal;
}


const dealACard = () => {
  // generate random number 1 - 11
  let currentDraw = Math.floor(Math.random() * 12)
  // add the number to the player total
  playerTotal = playerTotal + currentDraw;
  playerTotalDisplay.innerText = playerTotal;
}

const switchToDealer = () => {
  playerTurn = false;
}

// basic logic for playerTotal
// playerTotal = playerTotal + currentDraw;


// create a button the user can click so it would mimic a draw

// event listeners
playerDrawButton.addEventListener('click', dealACard);
changeTurn.addEventListener('click', switchToDealer);


// dealer will keep going until they hit 17 or bust

// functions to call to start the program
startTheGame();




// steps that ben would take
// what do i want to happen on the page
// click a button
  // create the button in html
  // use querySelector to grab the button in my javascript file
  // create an eventListener that just sends a console log
  // write a function that sends a different console log
  // add that function to the event listener
  // change the function to do what i really want it to do.  not console log