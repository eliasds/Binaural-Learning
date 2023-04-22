const context = new Tone.Context();
const songA = new Tone.Player({
  url: "SongA.mp3",
  loop: true,
  autostart: false
}).connect(new Tone.Panner(1)).sync().start(0);
const songB = new Tone.Player({
  url: "SongB.mp3",
  loop: true,
  autostart: false
}).connect(new Tone.Panner(-1)).sync().start(0);

const playAButton = document.getElementById("playA");
const pauseAButton = document.getElementById("pauseA");
const playBButton = document.getElementById("playB");
const pauseBButton = document.getElementById("pauseB");

playAButton.addEventListener("click", function() {
    console.log("Play Song A clicked");
    songA.start(context.currentTime);
});

pauseAButton.addEventListener("click", function() {
    console.log("Pause Song A clicked");
    songA.stop();
});

playBButton.addEventListener("click", function() {
    console.log("Play Song B clicked");
    songB.start(context.currentTime);
});

pauseBButton.addEventListener("click", function() {
    console.log("Pause Song B clicked");
    songB.stop();
});
