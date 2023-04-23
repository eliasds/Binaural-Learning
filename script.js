const myConstant = "Hello, world! - 57"; // The constant value to be passed to HTML
const myParagraph = document.getElementById("my-paragraph");
myParagraph.textContent = myConstant; // Pass the constant value to the HTML element


// Create a play and pause button trigger
const playAButton = document.getElementById("playA");
const pauseAButton = document.getElementById("pauseA");
const playBButton = document.getElementById("playB");
const pauseBButton = document.getElementById("pauseB");

/**/
    // Create a new Buffer from the audio file
    const bufferA = new Tone.Buffer("SongA.mp3", () => {
      console.log("Audio file loaded");
    });
    const bufferB = new Tone.Buffer("Puff.mp3", () => {
      console.log("Audio file loaded");
    });
    
    // Create a new Player and load the audio file from buffer
    const songA = new Tone.Player(bufferA);
    const songB = new Tone.Player(bufferB);
    
    // Create a new Player and load the audio file
    //const songA = new Tone.Player("SongA.mp3");
    
    // Create a new GainNode
    const gainA = new Tone.Gain();
    const gainB = new Tone.Gain();

    // Create a new Mono node
    const monoA = new Tone.Mono();
    const monoB = new Tone.Mono();

    // Create a new Panner node with position set to left
    const pannerA = new Tone.Panner(-1)
    const pannerB = new Tone.Panner(1)
    
    // Connect the audio file to the GainNode
    songA.connect(gainA);
    songB.connect(gainB);

    // Connect the GainNode to the Mono node
    gainA.connect(monoA);
    gainB.connect(monoB);

    // Connect the Mono node to the Panner node
    monoA.connect(pannerA);
    monoB.connect(pannerB);

    // Connect the Panner node to the left channel of the destination node using Tone.Destination.Left
    //pannerA.connect(Tone.Destination.left);
    //pannerA.toDestination();
    pannerA.connect(Tone.Destination);
    pannerB.connect(Tone.Destination);
/**/

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
const playBButton = document.getElementById("playB");
const pauseBButton = document.getElementById("pauseB");
*/

playBButton.addEventListener("click", function() {
    console.log("Play Song B clicked");
    songB.start();
});

pauseBButton.addEventListener("click", function() {
    console.log("Pause Song B clicked");
    songB.stop();
});

