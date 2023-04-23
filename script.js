const myConstant = "Hello, world! - 42"; // The constant value to be passed to HTML
const myParagraph = document.getElementById("my-paragraph");
myParagraph.textContent = myConstant; // Pass the constant value to the HTML element


// Create a new oscillator and connect it to the default output destination
// const osc = new Tone.Oscillator().toDestination();
// Set the frequency and start the oscillator
// osc.frequency.value = 440; // A4
// osc.start();

// Create a new player with a stereo audio file
// const player = new Tone.Player("SongB.mp3");
// Create a new mono node and connect it to the player
// const mono = new Tone.Mono().toDestination();
// player.connect(mono);

// Create a new panner and connect it to the default output destination
// const panner = new Tone.Panner(0).toDestination();
// Create a new oscillator and connect it to the panner
// const osc = new Tone.Oscillator().connect(panner);
// Set the frequency and start the oscillator
// osc.frequency.value = 440; // A4
// osc.start();
// Set the pan value to move the sound to the left or right channel
// panner.pan.value = -1.0; // move the sound to the left

const songA = new Tone.Player("SongA.mp3",{playbackRate: 4}).toDestination();
//const songA = new Tone.Player("SongA.mp3");
const monoA = new Tone.Mono();
const pannerA = new Tone.Panner(-1);
// Connect the player to the panner, then to the mono, and then to the left output channel
songA.connect(monoA);
//monoA.connect(pannerA);
monoA.connect(pannerA);
// Connect the audio signal to the final output destination using Tone.toDestination()
//pannerA.connect(Tone.toDestination());
//pannerA.connect(Tone.Destination.left);
//const songB = new Tone.Player("SongB.mp3").toDestination();
const songB = new Tone.Player("SongB.mp3");
const monoB = new Tone.Mono().toDestination();
songB.connect(monoB);
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
