
//constructor named Letter.
Letter = function(letter) {
  this.letter = [];
  this.blank = "_";
  this.guess = false;
  this.guessRead = function() {
    if (key > -1) {
      this.guess = true;
     
    }
  }
  
else{
        return this.blank;
      }

  // this.hm = function() {
  //   if( ){
  //     this.guess = true;
  //   }
  // }
}


console.log("Working-L");
//Export Letter.
module.exports = Letter;


//letter.indexOf(key);

    



// for (var i = 0; i < word.length; i++) {
//       anArray.push('_'); 
//     }