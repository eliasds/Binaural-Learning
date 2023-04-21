Promise.all([
    Tone.loaded(),
    new Tone.Player({
        url: "SongA.mp3",
        loop: true,
        autostart: false
    }).toDestination().connect(new Tone.Panner(1)).load(),
    new Tone.Player({
        url: "SongB.mp3",
        loop: true,
        autostart: false
    }).toDestination().connect(new Tone.Panner(-1)).load()
]).then(() => {
    const songA = Tone.context._players.get("SongA.mp3");
    const songB = Tone.context._players.get("SongB.mp3");

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
});
