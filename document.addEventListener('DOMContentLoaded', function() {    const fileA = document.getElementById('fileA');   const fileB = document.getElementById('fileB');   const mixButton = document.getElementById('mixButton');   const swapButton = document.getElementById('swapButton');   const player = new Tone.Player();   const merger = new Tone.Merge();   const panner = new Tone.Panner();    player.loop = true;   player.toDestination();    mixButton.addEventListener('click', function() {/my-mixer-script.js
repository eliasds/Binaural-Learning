document.addEventListener('DOMContentLoaded', function() {

  const fileA = document.getElementById('fileA');
  const fileB = document.getElementById('fileB');
  const mixButton = document.getElementById('mixButton');
  const swapButton = document.getElementById('swapButton');
  const playButton = document.getElementById('playButton');
  const player = new Tone.Player();
  const merger = new Tone.Merge();
  const panner = new Tone.Panner();

  player.loop = true;
  player.toDestination();

  mixButton.addEventListener('click', function() {
    // Load the two audio files into memory using Tone.js's Player
    player.load(fileA.files[0].name, function() {
      const left = new Tone.Gain();
      const right = new Tone.Gain();
      player.connect(left, 0, 0);
      player.connect(right, 1, 0);
      merger.connect(left);
      merger.connect(right);
      player.load(fileB.files[0].name, function() {
        const left = new Tone.Gain();
        const right = new Tone.Gain();
        player.connect(left, 0, 1);
        player.connect(right, 1, 1);
        merger.connect(left);
        merger.connect(right);
        player.start();
      });
    });
  });

  playButton.addEventListener('click', function() {
    player.start();
  });

  swapButton.addEventListener('click', function() {
    if (panner.pan.value === 0) {
      panner.pan.value = 1;
    } else {
      panner.pan.value = 0;
    }
  });

  panner.connect(Tone.Master);

  merger.connect(panner);

});
