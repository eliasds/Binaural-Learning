let fileA, fileB, player, progress, playing;

const mixFiles = async () => {
  const context = new Tone.Context();
  const decoder = new Tone.Buffer();
  const mix = new Tone.Gain();

  const bufferA = await decoder.decodeBuffer(await fileA.arrayBuffer());
  const bufferB = await decoder.decodeBuffer(await fileB.arrayBuffer());

  const channelMergerA = new Tone.ChannelMerger(2);
  const channelMergerB = new Tone.ChannelMerger(2);

  const leftA = new Tone.Gain();
  const rightA = new Tone.Gain();
  const leftB = new Tone.Gain();
  const rightB = new Tone.Gain();

  channelMergerA.connect(leftA, 0, 0);
  channelMergerA.connect(rightA, 0, 1);
  channelMergerB.connect(leftB, 0, 0);
  channelMergerB.connect(rightB, 0, 1);

  leftA.connect(mix, 0, 0);
  rightB.connect(mix, 0, 1);

  const bufferSourceA = new Tone.BufferSource(bufferA);
  const bufferSourceB = new Tone.BufferSource(bufferB);

  bufferSourceA.connect(channelMergerA);
  bufferSourceB.connect(channelMergerB);

  mix.toDestination();

  player = new Tone.Player({
    mute: true,
    context: context,
  }).start();

  player.buffer = await context.encodeAudio(mix.toDestination().buffer);

  progress.style.width = "100%";
};

const onFileInputChange = (event) => {
  const fileInputA = document.querySelector("#file-a");
  const fileInputB = document.querySelector("#file-b");

  if (fileInputA.files.length && fileInputB.files.length) {
    fileA = fileInputA.files[0];
    fileB = fileInputB.files[0];

    const progressBar = document.querySelector("#progress-bar");
    progress = document.querySelector("#progress");
    progress.style.width = "0";

    const playButton = document.querySelector("#play-button
