// BACKEND LOGIC

// Given a string (userString) and a position within that string (letterPosition), returns true if the letter in the position letterPosition is a vowel and false otherwise.
var isAVowel = function(userString, letterPosition) {
  const vowels = /(a|e|i|o|u)/gi;
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
        if (userString[index] === "q") {
          if (userString[index+1] === "u") {
            index = index + 2;
          } else {
            index = index + 1;
          }
        } else {
        index = index + 1;
      }
    };
  };
  return index;
};


// TAKE THE FIRST CONSONANT BLOCK OF A GIVEN STRING, PUT IT TO THE END OF THE STRING, AND ADD "-AY", OR IF THE FIRST LETTER IS A A VOWEL ADD "-YAY"
var translate = function(userString) {
console.log("InputtedString " + userString);
  var output;
  var block = blockLength(userString);
  console.log("blockLength " + block);
  if (block === 0) { // userString begins with at least one vowel
    output = userString + "yay";
  } else if (block >= 1) { // userString begins with at least 1 consonant
    var len = userString.length
    console.log("InputtedStringLength " + len);
    output = userString.slice(block, len) + userString.slice(0,block) + "ay";
    console.log("output " + output);
  }
  return output;
}


// GIVEN A STRING SENTENCE, RETURN A SINGLE ARRAY WITH EACH WORD SEPERATED INTO ITS OWN INDEX
var userStringToArray = function(userString) {
  var regularExpression = (/[,.!\s]+/);
  var newUserString = userString.split(regularExpression);
  return newUserString;
}

var translateSentence = function(userString) {
  var input = userStringToArray(userString);
  var output = [];
  input.forEach(function(word) {
    if (word !== "") {
      newWord = translate(word);
      console.log(newWord);
      output.push(newWord);
    }
  })
  return output.join(" ");
}



// FRONTEND LOGIC
$(document).ready(function(){
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var userString = $("input#userSentence").val();


   $("#result").text(translateSentence(userString));

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
