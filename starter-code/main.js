console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

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
