const myConstant = "Hello, world! - 46"; // The constant value to be passed to HTML
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


// Create a new Player and load the audio file
//const songA = new Tone.Player("SongA.mp3",{playbackRate: 4}).toDestination();


// Create a new Player and load the audio file
const songA = new Tone.Player("SongA.mp3");
// Create a new GainNode
const gainA = new Tone.Gain();
// Create a new Mono node
const monoA = new Tone.Mono();
// Create a new Panner node with position set to left
const pannerA = new Tone.Panner(-1);
//const pannerA = new Tone.Panner(-1).toDestination();
// Connect the audio file to the GainNode
songA.connect(gainA);
// Connect the GainNode to the Mono node
gainA.connect(monoA);
// Connect the Mono node to the Panner node
monoA.connect(pannerA);
// Connect the audio signal to the final output destination using Tone.toDestination()
pannerA.connect(Tone.toDestination());
// Connect the Panner node to the destination node
//pannerA.connect(Tone.Destination);
// Connect the Panner node to the left channel of the destination node using Tone.Destination.Left
//pannerA.connect(Tone.Destination.left);

playAButton.addEventListener("click", function() {
    console.log("Play Song A clicked");
    songA.start();
});

pauseAButton.addEventListener("click", function() {
    console.log("Pause Song A clicked");
    songA.stop();
});


/*
//const songB = new Tone.Player("SongB.mp3").toDestination();
const songB = new Tone.Player("SongB.mp3");
const monoB = new Tone.Mono().toDestination();
songB.connect(monoB);
const playAButton = document.getElementById("playA");
const pauseAButton = document.getElementById("pauseA");
const playBButton = document.getElementById("playB");
const pauseBButton = document.getElementById("pauseB");

playBButton.addEventListener("click", function() {
    console.log("Play Song B clicked");
    songB.start();
});

pauseBButton.addEventListener("click", function() {
    console.log("Pause Song B clicked");
    songB.stop();
});
*/
