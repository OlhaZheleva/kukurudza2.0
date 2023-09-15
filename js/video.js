("use strict");

// video messages 

let videoMessages = document.getElementsByClassName("video-message");
let mutedBtn = document.getElementsByClassName("muted");

for (i = 0; i < mutedBtn.length; i++) {
  mutedBtn[i].addEventListener("click", toggleItem, false);
}

function toggleItem(event) {
  const unmute = event.target.classList.contains('unmute');
  const videoIndex = parseInt(event.target.dataset.videoIndex);
  for (i = 0; i < videoMessages.length; i++) {
    if (videoMessages[i].muted === false) {
      videoMessages[i].muted = true;
    }
    mutedBtn[i].classList.remove("unmute");
  }
  if (!unmute) {
    videoMessages[videoIndex].muted = false;
    mutedBtn[videoIndex].classList.add("unmute");
  }
}

for (let i = 0; i < videoMessages.length; i++) {
  if (typeof videoMessages[i].loop == "boolean") {
    // loop supported
    videoMessages[i].loop = true;
  } else {
    // loop property not supported
    videoMessages[i].addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }
}
