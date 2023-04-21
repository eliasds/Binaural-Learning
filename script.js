var songA = document.getElementById("songA");
var songB = document.getElementById("songB");

var playAButton = document.getElementById("playA");
var pauseAButton = document.getElementById("pauseA");
var playBButton = document.getElementById("playB");
var pauseBButton = document.getElementById("pauseB");

playAButton.addEventListener("click", function() {
    console.log("Play Song A clicked");
    songA.currentTime = 0;
    songA.play();
});

pauseAButton.addEventListener("click", function() {
    console.log("Pause Song A clicked");
    songA.pause();
});

playBButton.addEventListener("click", function() {
    console.log("Play Song B clicked");
    songB.currentTime = 0;
    songB.play();
});

pauseBButton.addEventListener("click", function() {
    console.log("Pause Song B clicked");
    songB.pause();
});
