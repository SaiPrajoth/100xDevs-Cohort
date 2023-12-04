let video = document.getElementById("my-video");
let button = document.getElementById("play-pause-button");
let mute_btn = document.getElementById("mute-button");
let fullscreen_btn = document.getElementById("fullscreen-button");
let forward_btn = document.getElementById("forward-button");
let backward_btn = document.getElementById("backward-button");
let displayer = document.getElementById("video-length-displayer");
let seekbar = document.getElementById("seekbar");

videoplay();

button.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

mute_btn.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    mute_btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    video.muted = true;
    mute_btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
});

fullscreen_btn.addEventListener("click", function () {
  if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
    fullscreen_btn.innerHTML = '<i class="fa-solid fa-compress"></i>';
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
    fullscreen_btn.innerHTML = '<i class="fa-solid fa-expand"></i>';
  }
  setTimeout(function () {
    if (video.controls) {
      video.controls = false;
    }
  }, 1000);
});

forward_btn.addEventListener("click", function () {
  video.currentTime += 5;
});

backward_btn.addEventListener("click", function () {
  video.currentTime -= 5;
});

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);

  // Add leading zero if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;
  remainingSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return minutes + ":" + remainingSeconds;
}

function videoplay() {
  setInterval(function () {
    displayer.innerHTML =
      formatTime(video.currentTime) + " / " + formatTime(video.duration);
  }, 500);
}

video.addEventListener("timeupdate", function () {
  updateSeekbar();
});

seekbar.addEventListener("input", function () {
  var newTime = seekbar.value;
  video.currentTime = newTime;
});

function updateSeekbar() {
  seekbar.value = video.currentTime;
  seekbar.max = video.duration;
}
