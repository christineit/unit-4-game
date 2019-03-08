$(document).ready(function() {
  //when document is ready it calls the anon function
  // console.log("ready!");

  var targetScore = 0;
  var wins = 0;
  var losses = 0;
  var userScore = 0;

  //Created this function to be able to re-use on userScore and targetScore
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // console.log(targetScore)- this is to check variables are assigning correctly.  Should get 0 as this is what is assigned to that variable.

  //This will start on page load to give player some direction.
  alert("Press start to begin game!");

  //This startGame function will start the game by using the randomNum function to generate a random number with the arguments 19 to 120.  Then, we want to get this random number generated onto the screen.  This is done by locating the targetNumber div, and adding in the targetScore (from randomNum) text.
  function startGame() {
    targetScore = randomNum(19, 120);
    $("#targetNumber").text(targetScore);
    crystalValues();
    $(".wins").text(wins);
    $(".losses").text(losses);
  }

  //Calling the startGame function by using the onclick event and assigning it to the start button class
  $("#start-button").click(startGame);

  // Created a crystalValues functions to assign to each of the crystals in the thumb class div.  Then, we create a variable value to call the randomNum generator for the crystals with the arguments 1 to 12.  We get the variable value to assign to the divs by creating an attr data-crystal-value and assigning variable value to it.
  function crystalValues() {
    $(".thumb").each(function() {
      var value = randomNum(1, 12);
      // console.log("????");
      // console.log(value);
      $(this).attr("data-crystal-value", value);
      // console.log(this);
    });
    // This onclick event is necc. to add the data- value to the crystal image located in the class thumb.
    $(".thumb").click(function() {
      var value = $(this).attr("data-crystal-value"); //scoped diff. so won't affect other var value
      // console.log("clicked!");
      // We then parseInt the value to make sure it's an integer as we then add the userScore to valueParsed integer to add the randomNum generated up.  We then add the userScore onto the screen by adding the location of the div and .text(ing) it.
      console.log("this is line 36", value);
      var valueParsed = parseInt(value);
      userScore += valueParsed;
      console.log("this is line 39", userScore);
      console.log(valueParsed);
      $(".user-score").text(userScore);
      // Finally, we use an in else statement to compare the scores in order to determine a win or lose:
      if (userScore === targetScore) {
        alert("You Win!");
        wins++;
        $(".wins").text(wins);
        // We assign the userScore back to 0 for both after a win or lose to make sure the total score is reset to start a new game.
        userScore = 0;
      } else if (userScore >= targetScore) {
        losses++;
        alert("You Lose!");
        $(".losses").text(losses);
        userScore = 0;
      }
    });
  }

  // Trying to capture the userScore variable to display on screen
  // var addScore = function(clickGem) {
  //   $(".user-score-font").text(userScore);
  //   crystalValues();
  // };

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
