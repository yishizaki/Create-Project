function randomExercise() {
    var randomNum = Math.ceil(Math.random() * 3);
    if (randomNum == 1) {
        return "Do 30 jumping jacks";
    } else if (randomNum == 2) {
        return "Do a minute wall sit";
    } else {
        return "";
    }
}
/*
    var 1 = "Do 30 jumping jacks";
    2 = "Do 10 push ups";
    3 = "Do a 1-minute wall sit";
    4 = "Jog in place for one minute";
    5 = "Do the plank for one minute";
    6 = "Do ten squats";
    return Math.ceil((Math.random() * 6));
} */

function randomNumber() {
    var x = inputId;
    return Math.ceil(Math.random() * x);
}
