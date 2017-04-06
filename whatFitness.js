 function randomExercise(outputId) {
     var randomNum = Math.ceil(Math.random() * 30);
     var msg = "";
     if (randomNum == 1) {
         msg = "Do 20 jumping jacks.";
     }
     else if (randomNum == 2) {
         msg = "Do 30 jumping jacks.";
     }
     else if (randomNum == 3) {
         msg = "Do 40 jumping jacks.";
     }
     else if (randomNum == 4) {
         msg = "Do 50 jumping jacks.";
     }
     else if (randomNum == 5) {
         msg = "Do 10 push-ups.";
     }
     else if (randomNum == 6) {
         msg = "Do 15 push-ups.";
     }
     else if (randomNum == 7) {
         msg = "Do 20 push-ups.";
     }
     else if (randomNum == 8) {
         msg = "Do 25 push-ups.";
     }
     else if (randomNum == 9) {
         msg = "Do a 30-second wall sit.";
     }
     else if (randomNum == 10) {
         msg = "Do a minute wall sit.";
     }
     else if (randomNum == 11) {
         msg = "Do a minute and a half wall sit.";
     }
     else if (randomNum == 12) {
         msg = "Do a two minute wall sit.";
     }
     else if (randomNum == 13) {
         msg = "Do 10 squats.";
     }
     else if (randomNum == 14) {
         msg = "Do 15 squats.";
     }
     else if (randomNum == 15) {
         msg = "Do 20 squats.";
     }
     else if (randomNum == 16) {
         msg = "Do 25 squats.";
     }
     else if (randomNum == 17) {
         msg = "Do a 30-second plank on your hands.";
     }
     else if (randomNum == 18) {
         msg = "Do a minute plank on your hands.";
     }
     else if (randomNum == 19) {
         msg = "Do a minute and a half plank on your hands.";
     }
     else if (randomNum == 20) {
         msg = "Do a 2 minute plank on your hands.";
     }
     else if (randomNum == 21) {
         msg = "Do a 30-second plank on your elbows.";
     }
     else if (randomNum == 22) {
         msg = "Do a minute plank on your elbows.";
     }
     else if (randomNum == 23) {
         msg = "Do a minute and a half plank on your elbows.";
     }
     else if (randomNum == 24) {
         msg = "Do a 2 minute plank on your elbows.";
     }
     else if (randomNum == 25) {
         msg = "Jog in place for 30 seconds.";
     }
     else if (randomNum == 26) {
         msg = "Jog in place for a minute.";
     }
     else if (randomNum == 27) {
         msg = "Jog in place for a minute and a half.";
     }
     else if (randomNum == 28) {
         msg = "Jog in place for 2 minutes.";
     }
     else if (randomNum == 29) {
         msg = "Do 10 lunges.";
     }
     else {
         msg = "Do 20 lunges.";
     }
     document.getElementById(outputId).innerHTML = msg;
 }

function validInterval(interval) {
     if (interval.length < 3) {
             return "okay";
         }
         else {
             return "Choose a number less than 100";
         }
     }

function displayValidInterval(inputId, outputId) {
     var input = document.getElementById(inputId).value;
    var outputText = "";
           if (validInterval(input) == "okay") {
        outputText = Math.ceil(Math.random() * input);
        document.getElementById(outputId).className = "valid";
    } else {
        outputText = "Choose a number less than 100";
    document.getElementById(outputId).className = "invalid";
    }
    document.getElementById(outputId).innerHTML = outputText;
}
