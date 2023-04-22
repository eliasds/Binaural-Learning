//const context = new Tone.Context();
//const player = new Tone.Player("SongA.mp3").toDestination();
//player.start();

// Create a new oscillator and connect it to the default output destination
const osc = new Tone.Oscillator().toDestination();

// Set the frequency and start the oscillator
osc.frequency.value = 440; // A4
osc.start();

const songA = document.getElementById("songA");
const songB = document.getElementById("songB");
const playAButton = document.getElementById("playA");
const pauseAButton = document.getElementById("pauseA");
const playBButton = document.getElementById("playB");
const pauseBButton = document.getElementById("pauseB");

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
