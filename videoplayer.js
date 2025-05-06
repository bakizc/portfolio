function togglePlay(videoId, button) {
    const video = document.getElementById(videoId);
    if (video.paused) {
      video.play();
      button.textContent = "Pause";
    } else {
      video.pause();
      button.textContent = "Play";
    }
}
