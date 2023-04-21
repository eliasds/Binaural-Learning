// create AudioContext
const audioContext = new AudioContext();

// define variables for audio sources
let audioSourceA, audioSourceB;

// create a function to load audio files
function loadAudio(url) {
  return fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
}



// create a function to mix stereo audio sources
function mixAudio(audioBufferA, audioBufferB) {
  const mergedBuffer = audioContext.createBuffer(
    2,
    audioBufferA.length,
    audioBufferA.sampleRate
  );
  const leftChannelA = audioBufferA.getChannelData(0);
  const rightChannelB = audioBufferB.getChannelData(1);
  const leftChannelMerged = mergedBuffer.getChannelData(0);
  const rightChannelMerged = mergedBuffer.getChannelData(1);

  // mix left channel A into merged buffer's left channel
  leftChannelMerged.set(leftChannelA);

  // mix right channel B into merged buffer's right channel
  rightChannelMerged.set(rightChannelB);

  return mergedBuffer;
}

// create a function to swap audio channels
function swapChannels(audioBuffer) {
  const swappedBuffer = audioContext.createBuffer(
    2,
    audioBuffer.length,
    audioBuffer.sampleRate
  );
  const leftChannel = audioBuffer.getChannelData(0);
  const rightChannel = audioBuffer.getChannelData(1);
  const leftChannelSwapped = swappedBuffer.getChannelData(1);
  const rightChannelSwapped = swappedBuffer.getChannelData(0);

  // swap left and right channels
  leftChannelSwapped.set(rightChannel);
  rightChannelSwapped.set(leftChannel);

  return swappedBuffer;
}

// load audio files when page is loaded
window.addEventListener("load", async () => {
  audioSourceA = await loadAudio("https://www.dropbox.com/s/afsm8syew49thsw/songA.mp3?dl=0");
  audioSourceB = await loadAudio("https://www.dropbox.com/s/tlv47m24lgrz4q7/songB.mp3?dl=0");
});

// create a function to mix and play audio files
function playMixedAudio() {
  // mix audio sources
  const mixedAudio = mixAudio(audioSourceA, audioSourceB);

  // create AudioBufferSourceNode to play mixed audio
  const audioSourceNode = audioContext.createBufferSource();
  audioSourceNode.buffer = mixedAudio;
  audioSourceNode.connect(audioContext.destination);
  audioSourceNode.start();
}

// create a function to swap channels and play audio
function playSwappedAudio() {
  // mix audio sources
  const mixedAudio = mixAudio(audioSourceA, audioSourceB);

  // swap audio channels
  const swappedAudio = swapChannels(mixedAudio);

  // create AudioBufferSourceNode to play swapped audio
  const audioSourceNode = audioContext.createBufferSource();
  audioSourceNode.buffer = swappedAudio;
  audioSourceNode.connect(audioContext.destination);
  audioSourceNode.start();
}
