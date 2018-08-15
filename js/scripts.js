// BACKEND LOGIC

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// var pigLatin = function(userSentence) {
//   if () {
//
//   } else {
//     return false;
//   }
//
// }

// Given a word, returns true if the first letter is a vowel, returns false otherwise.
var isAVowel = function(userString, letterPosition) {
  const vowels = /(a|e|i|o|u)/i;
  var letter = userString.charAt(letterPosition);
  var test = vowels.exec(letter);
  if (test !== null) {
    return true
  } else {
    return false
  }
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
