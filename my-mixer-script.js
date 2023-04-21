document.addEventListener('DOMContentLoaded', function() {

  const fileAInput = document.getElementById('fileA');
const fileBInput = document.getElementById('fileB');
const mixButton = document.getElementById('mixButton');
const swapButton = document.getElementById('swapButton');
const playButton = document.getElementById('playButton');
const progressBar = document.getElementById('progressBar');

let fileA, fileB, mixedAudio;

// Update progress bar value and label
function updateProgress(progress, label) {
  progressBar.value = progress;
  progressBar.innerHTML = `${label}: ${progress}%`;
}

// Load and decode audio files
function loadAudioFiles(fileA, fileB) {
  return Promise.all([
    Tone.loaded().then(() => Tone.decodeAudio(fileA)),
    Tone.loaded().then(() => Tone.decodeAudio(fileB)),
  ]);
}

// Mix audio files
function mixAudio() {
  updateProgress(0, 'Mixing');

  const leftChannelA = mixedAudio.getChannelData(0);
  const rightChannelB = mixedAudio.getChannelData(1);
  const numSamples = mixedAudio.length;

  for (let i = 0; i < numSamples; i++) {
    leftChannelA[i] = mixedAudio.getChannelData(0)[i];
    rightChannelB[i] = mixedAudio.getChannelData(1)[i];
  }

  updateProgress(100, 'Mixing');
}

// Swap left and right channels
function swapChannels() {
  const temp = mixedAudio.getChannelData(0);
  mixedAudio.copyToChannel(mixedAudio.getChannelData(1), 0);
  mixedAudio.copyToChannel(temp, 1);
}

// Play mixed audio
function playMixedAudio() {
  const player = new Tone.Player(mixedAudio).toDestination();
  player.start();
}

// Event listeners
fileAInput.addEventListener('change', (event) => {
  fileA = event.target.files[0];
  updateProgress(0, 'Uploading File A');
  Tone.loaded().then(() => {
    updateProgress(100, 'File A Uploaded');
  });
});

fileBInput.addEventListener('change', (event) => {
  fileB = event.target.files[0];
  updateProgress(0, 'Uploading File B');
  Tone.loaded().then(() => {
    updateProgress(100, 'File B Uploaded');
  });
});

mixButton.addEventListener('click', () => {
  if (fileA && fileB) {
    updateProgress(0, 'Mixing');
    loadAudioFiles(fileA, fileB).then(([audioA, audioB]) => {
      mixedAudio = new Tone.Buffer(audioA.numberOfChannels, audioA.length, audioA.sampleRate);
      mixAudio();
      updateProgress(100, 'Mixed');
    });
  }
});

swapButton.addEventListener('click', () => {
  if (mixedAudio) {
    swapChannels();
  }
});

playButton.addEventListener('click', () => {
  if (mixedAudio) {
    playMixedAudio();
  }
});

// Initialize progress bar
updateProgress(0, 'Waiting');
