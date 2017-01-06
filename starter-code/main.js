console.log("JS file is connected to HTML! Woo!")
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour= "king";

//if (cardTwo === cardFour){
//	alert('You found a match!');
//}


function generateCards(){
var board = document.getElementById('game-board');
var numberOfCards=4;
for(var count=0; count< numberOfCards;count++){
	var carde = document.createElement('div');
	carde.className='card';
	board.appendChild(carde);
}
}
