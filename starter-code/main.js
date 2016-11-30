console.log("JS file is connected to HTML! Woo!")


var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var createBoard = function(){
	for (var i=0; i<cards.length; i++){
		var cardToAttach = document.getElementsByClassName('card')[i];
		cardToAttach.setAttribute('data-card',cards[i]);
		cardToAttach.addEventListener('click',isTwoCards);
	}
}

var isTwoCards = function() {
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img class="hello" src="eevee_king.jpg" alt="King" />';
	}else{
		this.innerHTML = '<img class="hello" src="eevee_queen.gif" alt="Queen" />';
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    var isMatching = isMatch(cardsInPlay);
		if(isMatching){
			alert("the cards match!");
		}else{
			alert("try again");
		}
    // clear cards in play array for next try
  }
	if(cardsInPlay.length > 2){
		cardsInPlay = [];
		clearCards();
	}
}

var clearCards = function(){
	var cardsTemp = document.querySelectorAll('.card');
	for(var j=0; j<cardsTemp.length; j++){
		cardsTemp[j].innerHTML = '';
	}
}
var isMatch = function(){
	if (cardsInPlay[0] == cardsInPlay[1]){
				return true;
	}
	return false;
}
// if (cardOne === cardTwo){
// 	alert("You found a match!");
// }

var gameBoard = document.getElementById('game-board');

var createCards = function(x){
	for (var i=0; i<x; i++){
		var toAdd = document.createElement('div');
		toAdd.className = 'card';
		gameBoard.append(toAdd);
	}
};

createCards(4);
createBoard();
