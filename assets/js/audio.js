(function () {
  const isSaintPage = document.body.classList.contains("saint-page");
  const audio = document.createElement("audio");
  audio.src = `${isSaintPage ? "../" : ""}assets/audio/olhar-de-gratidao.mp3`;
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = 0.42;
  let hasUserStarted = false;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "music-toggle";
  button.setAttribute("aria-label", "Tocar música");
  button.title = "Tocar música";
  button.textContent = ">";

  function setPlayingState(isPlaying) {
    button.classList.toggle("is-playing", isPlaying);
    button.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
    button.title = isPlaying ? "Pausar música" : "Tocar música";
    button.textContent = isPlaying ? "II" : ">";
  }

  async function playAudio() {
    try {
      await audio.play();
      setPlayingState(true);
      hasUserStarted = true;
    } catch {
      setPlayingState(false);
    }
  }

  function playAfterInteraction(event) {
    if (event.target.closest && event.target.closest(".music-toggle")) {
      return;
    }

    if (!hasUserStarted && audio.paused) {
      playAudio();
    }
  }

  button.addEventListener("click", async () => {
    if (audio.paused) {
      await playAudio();
    } else {
      audio.pause();
      setPlayingState(false);
    }
  });

  document.body.append(audio, button);
  playAudio();

  ["click", "pointerdown", "touchstart", "keydown"].forEach((eventName) => {
    window.addEventListener(eventName, playAfterInteraction, { passive: true });
  });
})();
