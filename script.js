const context = new Tone.Context();

const player = new Tone.Player("SongA.mp3").toDestination();
player.start();

/*
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
*/

/*
const songA = new Tone.Player({
  url: "SongA.mp3",
  loop: true,
  autostart: false
}).connect(new Tone.Panner(1)).start();
const songB = new Tone.Player({
  url: "SongB.mp3",
  loop: true,
  autostart: false
}).connect(new Tone.Panner(-1)).start();

const playAButton = document.getElementById("playA");
const pauseAButton = document.getElementById("pauseA");
const playBButton = document.getElementById("playB");
const pauseBButton = document.getElementById("pauseB");

playAButton.addEventListener("click", function() {
    console.log("Play Song A clicked");
    songA.start();
});

pauseAButton.addEventListener("click", function() {
    console.log("Pause Song A clicked");
    songA.stop();
});

playBButton.addEventListener("click", function() {
    console.log("Play Song B clicked");
    songB.start();
});

pauseBButton.addEventListener("click", function() {
    console.log("Pause Song B clicked");
    songB.stop();
});
*/
