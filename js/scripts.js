// BACKEND LOGIC
// var pigLatin = function (userSentence) {
//
// }
//







// FRONTEND LOGIC
$(document).ready(function(){
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var userSentence = $("input#userSentence").val();
    // var result = pigLatin(userSentence);


   $("#result").text(result);



  });
});
