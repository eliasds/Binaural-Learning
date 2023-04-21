const audioContext = new AudioContext();

const loadAudio = (file) => {
  return fetch(file)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer));
};

const mixAudio = (audioBufferA, audioBufferB) => {
  const length = Math.max(audioBufferA.length, audioBufferB.length);
  const mixedBuffer = audioContext.createBuffer(2, length, audioContext.sampleRate);

  const channelDataA = audioBufferA.getChannelData(0);
  const channelDataB = audioBufferB.getChannelData(0);
  const mixedDataL = mixedBuffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    mixedDataL[i] = (channelDataA[i] + channelDataB[i]) / 2;
  }

  const channelDataC = audioBufferA.getChannelData(1);
  const channelDataD = audioBufferB.getChannelData(1);
  const mixedDataR = mixedBuffer.getChannelData(1);
  for (let i = 0; i < length; i++) {
    mixedDataR[i] = (channelDataC[i] + channelDataD[i]) / 2;
  }

  return mixedBuffer;
};

const updateProgress = (progress) => {
  const progressBar = document.getElementById("progress-bar");
  progressBar.value = progress * 100;
};

const playAudio = (audioBuffer) => {
  const sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(audioContext.destination);
  sourceNode.start();
};

const playMixedAudio = (audioBufferA, audioBufferB) => {
  const mixedBuffer = mixAudio(audioBufferA, audioBufferB);
  playAudio(mixedBuffer);
};

const onFileInputChange = (event) => {
  const files = event.target.files;
  if (files.length !== 2) {
    alert("Please select two audio files.");
    return;
  }

  const fileA = files[0];
  const fileB = files[1];

  Promise.all([loadAudio(fileA), loadAudio(fileB)])
    .then(([audioBufferA, audioBufferB]) => {
      const mixedBuffer = mixAudio(audioBufferA, audioBufferB);
      const playMixedButton = document.getElementById("play-mixed-button");
      playMixedButton.addEventListener("click", () => {
        playAudio(mixedBuffer);
      });

      const playAButton = document.getElementById("play-a-button");
      playAButton.addEventListener("click", () => {
        playAudio(audioBufferA);
      });

      const playBButton = document.getElementById("play-b-button");
      playBButton.addEventListener("click", () => {
        playAudio(audioBufferB);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error loading audio files.");
    });
};

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", onFileInputChange);
