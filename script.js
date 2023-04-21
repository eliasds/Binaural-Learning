const form = document.getElementById('upload-form');
const progressBar = document.getElementById('progress-bar');
const playButton = document.getElementById('play-button');
const switchButton = document.getElementById('switch-button');

let fileA, fileB, monoA, monoB, output;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  fileA = await Tone.ToneAudioBuffer.fromBlob(document.getElementById('file-a').files[0]);
  fileB = await Tone.ToneAudioBuffer.fromBlob(document.getElementById('file-b').files[0]);
  monoA = fileA.toMono();
  monoB = fileB.toMono();
  output = new Tone.Gain();
  const left = new Tone.Gain();
  const right = new Tone.Gain();
  left.connect(output, 0, 0);
  right.connect(output, 0, 1);
  monoA.connect(left);
  monoB.connect(right);
  output.toDestination();
  progressBar.style.width = '0%';
  const progressInterval = setInterval(() => {
    progressBar.style.width = `${Math.round(output.volume.value * 100)}%`;
    if (output.volume.value >= 1) {
      clearInterval(progressInterval);
      progressBar.style.width = '100%';
    }
  }, 10);
});

playButton.addEventListener('click', () => {
  const context = Tone.context;
  const source = context.createBufferSource();
  source.buffer = output.toDestination().buffer;
  source.connect(context.destination);
  source.start();
});

switchButton.addEventListener('click', () => {
  const panner = new Tone.PannerNode();
  panner.pan.value = -1;
  output.disconnect();
  output.connect(panner);
  panner.connect(Tone.context.destination);
});
