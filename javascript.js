const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playButton.textContent = 'Play Music';
  } else {
    audioPlayer.play();
    playButton.textContent = 'Pause Music';
  }
  isPlaying = !isPlaying;
});