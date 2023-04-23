const myConstant = "Hello, world! - 53"; // The constant value to be passed to HTML
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
const songA = new Tone.Player("SongA.mp3",{playbackRate: 4}).toDestination();
//const songA = new Tone.Player("SongA.mp3");
// Connect the audio signal to the final output destination using Tone.toDestination()
//songA.connect(Tone.toDestination());
// Create a play and puase button trigger
const playAButton = document.getElementById("playA");
const pauseAButton = document.getElementById("pauseA");


/*
// Create a new Player and load the audio file asynchronously
const songA = new Tone.Player("SongA.mp3", function() {
  // Start playback as soon as the audio file has finished loading
  songA.start();
});
// Create a new GainNode, Mono node, and Panner node with position set to left
const gainA = new Tone.Gain();
const monoA = new Tone.Mono();
const pannerA = new Tone.Panner(-1);
// Connect the audio file to the GainNode, then to the Mono node, then to the Panner node, and finally to the left channel of the destination node
songA.chain(gainA, monoA, pannerA, Tone.Destination.left);
*/


/**/
        // Create a new Buffer from the audio file
    const buffer = new Tone.Buffer("SongA.mp3", () => {
      console.log("Audio file loaded");
    });
    
    // Create a new Player and load the audio file from buffer
    const songA = new Tone.Player(buffer);
    
    // Create a new Player and load the audio file
    //const songA = new Tone.Player("SongA.mp3");
    
    // Create a new GainNode
    const gainA = new Tone.Gain();
    
    // Create a new Mono node
    const monoA = new Tone.Mono();

    // Create a new Panner node with position set to left
    const pannerA = new Tone.Panner(-1)
    
    // Connect the audio file to the GainNode
    songA.connect(gainA);

    // Connect the GainNode to the Mono node
    gainA.connect(monoA);

    // Connect the Mono node to the Panner node
    monoA.connect(pannerA);

    // Connect the Panner node to the left channel of the destination node using Tone.Destination.Left
    //pannerA.connect(Tone.Destination.left);
    //pannerA.toDestination();
    pannerA.connect(Tone.Destination);
/**/

playAButton.addEventListener("click", function() {
    console.log("Play Song A clicked");
    songA.start();
});

pauseAButton.addEventListener("click", function() {
    console.log("Pause Song A clicked");
    songA.stop();
});


/**/
//const songB = new Tone.Player("SongB.mp3").toDestination();
const songB = new Tone.Player("SongB.mp3");
const monoB = new Tone.Mono().toDestination();
songB.connect(monoB);
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
/**/
