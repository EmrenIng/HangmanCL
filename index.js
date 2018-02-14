var inquirer = require("inquirer");
var prompt = require('prompt');
var Word = require("./Word.js");
// Grabs word to be stored
// Keeps track of win condition

var words = ["uno","dos","tres","quatro"];
var word = words[Math.floor(Math.random() * words.length)];
var userlet;
console.log(word);
s = word;
letter = s.match(/\S/g);
console.log(letter);
var word = new Word(word);
console.log(word.word);

var right = [];
var wrong = [];

guessing();
function guessing() {
	inquirer
	  .prompt([
	    {
	      type: "input",
	      message: "Type a letter.",
	      name: "key"
	    },
	  ]).then(function(inquirerResponse) {
   
      console.log("You typed: " + inquirerResponse.key);
      userlet = inquirerResponse.key;
    
  });

}



// for (var i=0; i<letters.length; i++) {
//     displayedWord += letters[i].printLetter();
//     displayedWord += " ";
//   }
