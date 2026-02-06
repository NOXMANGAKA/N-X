const music = document.getElementById('bg-music');
const toggle = document.getElementById('toggle-music');

toggle.addEventListener('click', () => {
  if(music.paused) {
    music.play();
    toggle.textContent = '🔊';
  } else {
    music.pause();
    toggle.textContent = '🔇';
  }
});
