console.log("Javascript is working")

var cards = ['queen_clubs','queen_clubs','queen_spade','queen_spade','queen_diamond','queen_diamond','queen_heart','queen_heart'];
var cardsInPlay = [];
var PairCount = 0;
var scoreCount =0;
//Calculate number of pairs required to win game
var winningPairCount=cards.length/2;

//Deck shuffle implemented using Durstenfeld shuffle algorithm
function deckShuffle(deck){
for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

function generateCards(){

//copy deck array to be shuffled for game use
var deck = cards.slice();
//shuffle deck using shuffle function
deckShuffle(deck);

//get game board div and set to a variable
var board = document.getElementById('game-board');

for(var count=0; count< cards.length ;count++){
	
  var cardItem = document.createElement('div');
	
  //set card class for css styling
  cardItem.className='card';
	
  //set card data attribute from shuffled deck
  cardItem.setAttribute('data-card',deck[count]);
  
  //variable to keep track if user is clicking on open card
  cardItem.setAttribute('clicked','no');

  //add event listener to each div card
 
 cardItem.addEventListener('click',isTwoCards);
  
  //save created object to targeted div
  board.appendChild(cardItem);
  
}
}

function isTwoCards(){
	//check if card is already open
  var clickedCard = this.getAttribute('clicked');

  if (clickedCard === 'no'){
  		this.setAttribute('clicked','yes');
  		cardsInPlay.push(this.getAttribute('data-card'));
  		var currentCard =  this.getAttribute('data-card');
  		switch(currentCard){
  			case 'queen_clubs':
  			this.innerHTML = '<img src="queen_club.png" alt="Queen of Clubs"  />';
  			break;

  			case 'queen_spade':
  			this.innerHTML = '<img src="queen_spade.png" alt="Queen of Spade"  />';
  			break;

  			case 'queen_heart':
  			this.innerHTML = '<img src="queen_heart.png" alt="Queen of Hearts"  />';
  			break;

  			case 'queen_diamond':
  			this.innerHTML = '<img src="queen_diamond.png" alt="Queen of Diamond"  />';
  			break;

  			default:
  			alert("Card Matching Error");

  			}


  		// if you have two cards in play, check for a match
  		if (cardsInPlay.length === 2) {

   		 // pass the cardsInPlay as an argument to the isMatch function
   		isMatch(cardsInPlay);

    	// clear cards in play array for your next try
    	cardsInPlay = [];

 	 	}
	}
	else{
		alert("This card is already shown!");
	}
}

//resets cards that has been shown 
function CardReset(){
	var cardResets = document.getElementsByClassName("card");
	for(var i=0;i<cards.length;i++){
	cardResets[i].innerHTML = '';
	//Reset the shown card click counter
	cardResets[i].setAttribute('clicked','no');
	}

}

//check if second card in play is a pair
function isMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You have found a pair!");
		PairCount = PairCount + 1;
		scoreCount = PairCount * 30;
		checkVictory();
	}

	else {
	alert("Sorry, Please try again.");
	CardReset();
	PairCount = 0;
	scoreCount = 0;
	}
}

//check if game has been won
function checkVictory(){
	if (PairCount === winningPairCount ){
		alert("Congratulations on winning the game!");
		gameOver();
	}
}

//clears cards from game and show game over title
function gameOver(){
	var board = document.getElementById('game-board');
	board.innerHTML = '<img src="game-over.png" alt="Game Over Image" /> <br/> Your Final Score was ' + scoreCount + ' !!<br /> <a onclick= "gameReset()" href="#"> Play Again ?</a> ';
	
}

//clears game over time and restarts game
function gameReset(){
	var board = document.getElementById('game-board');
	board.innerHTML = '';
	generateCards();
}


generateCards();
