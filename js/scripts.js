// BACKEND LOGIC






// FRONTEND LOGIC
$(document).ready(function(){
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var userSentence = $("input#userSentence").val();
    var words = stringToWordsArray(userSentence);


   $("#result").text(result);



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
