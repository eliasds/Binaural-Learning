var songA = document.getElementById("songA");
var songB = document.getElementById("songB");

var playAButton = document.getElementById("playA");
var pauseAButton = document.getElementById("pauseA");
var playBButton = document.getElementById("playB");
var pauseBButton = document.getElementById("pauseB");

playAButton.addEventListener("click", function() {
	songA.play();
});

pauseAButton.addEventListener("click", function() {
	songA.pause();
});

playBButton.addEventListener("click", function() {
	songB.play();
});

pauseBButton.addEventListener("click", function() {
	songB.pause();
});
