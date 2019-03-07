$(document).ready(function() {
  //when document is ready it calls the anon function
  console.log("ready!");
  alert("Press start to begin game!");

  var targetScore = 0;
  var wins = 0;
  var losses = 0;
  var userScore = 0;

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // console.log(targetScore);

  function startGame() {
    targetScore = randomNum(19, 120);
    $("#targetNumber").text(targetScore);
    crystalValues();
  }

  $("#start-button").click(startGame);

  $(".thumb").click(function() {
    var value = $(this).attr("data-crystal-value"); //scoped diff. so won't affect other var value
    // console.log("clicked!");
    console.log(value);
  });
  function crystalValues() {
    $(".thumb").each(function() {
      var value = randomNum(1, 12);
      // console.log("????");
      // console.log(value);
      $(this).attr("data-crystal-value", value);
      // console.log(this);
    });
  }
  // Trying to capture the userScore variable to display on screen
  var addScore = function(clickGem) {
    $(".user-score-font").text(userScore);
    crystalValues();
  };

  // Trying to get the user's score to  update to screen with a counter function to also add the random numbers up:
  // var counter = crystalValues++;
  // var userInputText = document.getElementsByClassName("user-score=font");

  // function updateScore() {
  //   userInputText.text = counter;
  // }

  // Need a conditional such as an if else statement to compare the scores to determine a win or loss:
  // function compareScores = function(){
  // if (userScore===targetScore){
  // wins++
  // } else {
  //   losses++
  // }
  //   }
});
