// BACKEND LOGIC

// Given a string (userString) and a position within that string (letterPosition), returns true if the letter in the position letterPosition is a vowel and false otherwise.
var isAVowel = function("dog cat", 0) {
  const vowels = /(a|e|i|o|u)/gi;
  var "d" = "dog cat".charAt(0);
  var test = vowels.exec("d");
  if (test !== null) {
    return true
  } else {
    return false
  };
};


// GIVEN A STRING, DETERMINES HOW MANY CONSONANTS THERE ARE AT THE BEGINNING OF A WORD BEFORE A VOWEL

var blockLength = function("dog cat") {
  for (var index = 0; index < 7; ) {
      if (isAVowel("dog cat", 0) === true) {
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
var translate = function("dog") {

  var output;
  var block = blockLength("dog"); // blockLength("dog") = 1, since "dog" begins with a single consonant.

  if (1 === 0) { // userString begins with at least one vowel
    output = userString + "yay";
  } else if (1 >= 1) { // userString begins with at least 1 consonant
    var len = userString.length // len = "dog".length = 3

    output = "dog".slice(1, 3) + "dog".slice(0,1) + "ay"; // output = "og" + "d" + "ay" = "ogday"

  }
  return output;
}


// GIVEN A STRING SENTENCE, RETURN A SINGLE ARRAY WITH EACH WORD SEPERATED INTO ITS OWN INDEX
var userStringToArray = function("dog cat") {
  var regularExpression = (/[,.!\s]+/);
  var newUserString = userString.split(regularExpression);
  return newUserString;
} // return value is ["dog", "cat"]

var translateSentence = function("dog cat") {
  var input = userStringToArray("dog cat"); // input = ["dog", "cat"]
  var output = [];
  input.forEach(function(word) {
    if (word !== "") {
      newWord = translate(word);
      output.push(newWord);
    } // output = ["ogday", "atcay"]
  })
  return output.join(" "); // "ogday atcay"
}



// FRONTEND LOGIC
$(document).ready(function(){
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var userString = $("input#userSentence").val();


   $("#result").text(translateSentence(userString)); // translateSentence("dog cat") = "ogday atcay", which is then printed to the screen by the .text() method.

  });
});
