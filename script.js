let body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
  let element = document.querySelector(`.${e.key}`);

  if (!element) return;

  let audio = element.querySelector("audio");
  element.classList.add("active");
  audio && audio.play();
});

body.addEventListener("keyup", (e) => {
  let element = document.querySelector(`.${e.key}`);

  if (!element) return;
  let audio = element.querySelector("audio");

  element.classList.remove("active");

  //   audio && audio.pause();

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.load();
});
