// initialize audio context
const context = new AudioContext();

// declare audio buffers for the two audio files
let bufferA, bufferB;

// load audio file A
const fileAInput = document.getElementById('fileA');
fileAInput.addEventListener('change', loadFileA);

function loadFileA(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const arrayBuffer = event.target.result;
    context.decodeAudioData(arrayBuffer, decoded => {
      bufferA = decoded;
      console.log(`Loaded audio file A: ${bufferA.duration} seconds`);
    });
  };
  reader.readAsArrayBuffer(file);
}

// load audio file B
const fileBInput = document.getElementById('fileB');
fileBInput.addEventListener('change', loadFileB);

function loadFileB(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const arrayBuffer = event.target.result;
    context.decodeAudioData(arrayBuffer, decoded => {
      bufferB = decoded;
      console.log(`Loaded audio file B: ${bufferB.duration} seconds`);
    });
  };
  reader.readAsArrayBuffer(file);
}

// mix the two audio files
function mixAudio() {
  if (!bufferA || !bufferB) {
    console.error('One or both audio files have not been loaded');
    return;
  }
  const mergedBuffer = context.createBuffer(
    bufferA.numberOfChannels, bufferA.length, bufferA.sampleRate
  );
  for (let channel = 0; channel < mergedBuffer.numberOfChannels; channel++) {
    const channelData = mergedBuffer.getChannelData(channel);
    const bufferAChannelData = bufferA.getChannelData(channel);
    const bufferBChannelData = bufferB.getChannelData(channel);
    for (let i = 0; i < mergedBuffer.length; i++) {
      if (channel === 0) {
        channelData[i] = bufferAChannelData[i];
      } else {
        channelData[i] = bufferBChannelData[i];
      }
    }
  }
  console.log('Mixed audio files');
  return mergedBuffer;
}

// play the mixed audio file
let sourceNode;

function playAudio() {
  if (!sourceNode) {
    const mergedBuffer = mixAudio();
    if (!mergedBuffer) {
      console.error('Could not mix audio files');
      return;
    }
    sourceNode = context.createBufferSource();
    sourceNode.buffer = mergedBuffer;
    sourceNode.connect(context.destination);
  }
  if (sourceNode.state === 'running') {
    sourceNode.stop();
    console.log('Stopped audio playback');
  } else {
    sourceNode.start();
    console.log('Started audio playback');
  }
}

// swap the left and right channels of the mixed audio file
function swapChannels() {
  if (!bufferA || !bufferB) {
    console.error('One or both audio files have not been loaded');
    return;
  }
  const mergedBuffer = mixAudio();
  if (!mergedBuffer) {
    console.error('Could not mix audio files');
    return;
  }
  const swappedBuffer = context.createBuffer(
    mergedBuffer.numberOfChannels, mergedBuffer.length, mergedBuffer.sampleRate
  );
  const leftChannelData = mergedBuffer.getChannelData(0);
  const rightChannelData = mergedBuffer.getChannelData(1);
  const swappedLeftChannelData = swappedBuffer.getChannelData(1);
  const swappedRightChannelData = swappedBuffer.getChannelData(
