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

/*
const songA = new Tone.Player("SongA.mp3");
const monoA = new Tone.Mono();
const pannerA = new Tone.Panner(-1);
// Connect the player to the panner, then to the mono, and then to the left output channel
songA.connect(monoA);
monoA.connect(pannerA);
//pannerA.connect(Tone.Destination.left);
const songB = new Tone.Player("SongB.mp3").toDestination();
//const monoB = new Tone.Mono().toDestination();
//songB.connect(monoB);
//const songA = document.getElementById("songA");
//const songB = document.getElementById("songB");
*/

var wavesurfer = WaveSurfer.create({
    container: '#demo' // this is the only required param
});
wavesurfer.load('SongA.mp3');
var panner = wavesurfer.backend.ac.createPanner();
wavesurfer.backend.setFilter(panner);
var slider = document.querySelector('#panner-input');
slider.addEventListener('input', function (e) {
    var xDeg = parseInt(e.target.value);
    var x = Math.sin(xDeg * (Math.PI / 180));
    wavesurfer.panner.setPosition(x, 0, 0);
});

/*
const input = wavesurfer.backend.ac.createGain();
const splitter = wavesurfer.backend.ac.createChannelSplitter(2);
const merger = wavesurfer.backend.ac.createChannelMerger(2);
const leftGain = wavesurfer.backend.ac.createGain();
const rightGain = wavesurfer.backend.ac.createGain();
// This will make sure that a mono signal gets upmixed to stereo.
// If you always have stereo sound you can remove it.
input.channelCountMode = 'explicit';
// It is only necessary to connect the right channel
// because this is the one which needs optional parameters.
splitter.connect(rightGain, 1);
rightGain.connect(merger);
rightGain.connect(merger, 0, 1);
// Only the one connection which needs an optional parameter
// needs to be done for the left channel
leftGain.connect(merger, 0, 1);
// wavesufer.js will connect everything else.
wavesurfer.backend.setFilters([ input, splitter, leftGain, merger ]);
*/

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
