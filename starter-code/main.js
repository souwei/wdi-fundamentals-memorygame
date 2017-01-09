console.log("JS file is connected to HTML! Woo!")

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var PairCount=0;
var winningPairCount=2;

function generateCards(){
//get game board div and set to a variable
var board = document.getElementById('game-board');

for(var count=0; count< cards.length ;count++){
	
  var cardItem = document.createElement('div');
	
  //set card class for css styling
  cardItem.className='card';
	
  //set card data attribute
  cardItem.setAttribute('data-card',cards[count]);
  
  //add event listener to each div card
 
 cardItem.addEventListener('click',isTwoCards);
  
  //save created object to targeted div
  board.appendChild(cardItem);
  
}
}

function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
  var currentCard =  this.getAttribute('data-card');
  if (currentCard === 'queen'){
  	this.setAttribute('shown','true');
  	this.innerHTML = '<img src="queen_club.png" alt="Queen of Clubs"  />';
  }
  else {
  	this.setAttribute('shown','true');
  	this.innerHTML = '<img src="king.png" alt="King of Clubs"  />';
  }
  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }
}

//resets cards that has been shown 
function reset(){
var cardResets = document.getElementsByClassName("card");
for(var i=0;i<cards.length;i++){
cardResets[i].innerHTML = '';
}

}

//check if second card in play is a pair
function isMatch(){
if (cardsInPlay[0] === cardsInPlay[1]){
alert("You have found a pair!");
PairCount = PairCount + 1;
checkVictory();
}
else {
alert("Sorry, Please try again.");
reset();
PairCount = 0;

}
}

//check if game has been won
function checkVictory(){
if (PairCount === winningPairCount ){
alert("Congratulations on winning the game!");
}
}

//reset version 2 using visibility in css
/*function reset(){
  var cardResets = document.getElementsByClassName("shown");
  for(var i=0;i<shownCards;i++){
  cardResets[i].setAttribute("style","visibility:hidden; ");
  }
  shownCards = 0;
}
*/

generateCards();