// BACKEND LOGIC

// Given a string (userString) and a position within that string (letterPosition), returns true if the letter in the position letterPosition is a vowel and false otherwise.
var isAVowel = function(userString, letterPosition) {
  const vowels = /(a|e|i|o|u)/i;
  var letter = userString.charAt(letterPosition);
  var test = vowels.exec(letter);
  if (test !== null) {
    return true
  } else {
    return false
  };
};


// GIVEN A STRING, DETERMINES HOW MANY CONSONANTS THERE ARE AT THE BEGINNING OF A WORD BEFORE A VOWEL

var blockLength = function(userString) {
  for (var index = 0; index < userString.length; ) {
      if (isAVowel(userString, index) === true) {
        break;
      } else if (isAVowel(userString, index) === false) {
        index = index + 1;
      }
    };
  return index;
};




var translate = function(userString) {
  var output;
  var block = blockLength(userString);
  if (block === 0) { // userString begins with at least one vowel
    output = userString + "yay";
  } else if (block >= 1) { // userString begins with at least 1 consonant
    var len = userString.length
    output = userString.slice(block, len-1) + userString.slice(0,block) + "ay";
  }
  return output;
}




// FRONTEND LOGIC
$(document).ready(function(){
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var userSentence = $("input#userSentence").val();
    var sentenceBeginWithAVowel = function() {
      if (isAVowel(userSentence, 0) === true) {
        return "Your sentence starts with a vowel! Way to go!"
      } else {
        return "That sentence does not start with a vowel. Better luck next time."
      }
    };


   $("#result").text(sentenceBeginWithAVowel);



  });
});







// First attempt to write a function that converts a sentence into an array of words, with each word contained in its own array. Ex. Given "I am a dog", output [["I"], ["a","m"], ["a"], ["d","o","g"]]. Doesn't work(yet!)

// var stringToWordsArray = function(string) {
//   var array = string.split("");
//   var wordCount = 0
//
//
//   array.forEach(function(letter) {
//     console.log(letter);
//     if (letter !== " ") {
//       words[n].push(letter);
//     } else if (letter === "") {
//       n = n+1;
//     };
//     array.shift();
//   });
//   return words;
// }
