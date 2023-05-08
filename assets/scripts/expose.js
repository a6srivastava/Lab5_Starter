// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let newimg;
  const horntype = document.getElementById('horn-select');
  horntype.addEventListener('change', (event) => {
    const img = document.querySelector('img[alt="No image selected"]');
    let  imgsrc = "assets/images/" + event.target.value + ".svg";
    newimg = event.target.value;
    img.src = imgsrc;
    const audio = document.querySelector('.hidden');
    let audiosrc = "assets/audio/" + event.target.value + ".mp3";
    audio.src = audiosrc;
  });

  const volumeslider = document.getElementById("volume");
  volumeslider.addEventListener('change', (event) => {
    let val = event.target.value;
    const volumeimg = document.querySelector('img[alt="Volume level 2"]');
    if ( val == 0) {
      volumeimg.src = "assets/icons/volume-level-0.svg";
    }
    else if (val >= 1 && val <= 33) {
      volumeimg.src = "assets/icons/volume-level-1.svg";
    }
    else if (val >= 34 && val <= 66) {
      volumeimg.src = "assets/icons/volume-level-2.svg";
    }
    else if (val >= 67) {
      volumeimg.src = "assets/icons/volume-level-3.svg";
    }
    
  });


  // new play button event listener
  const playbutton = document.querySelector('button');
  const confetti = new JSConfetti();
  playbutton.addEventListener('click', (event) => {
    const audio = document.querySelector('.hidden');
    const audiolv = document.getElementById("volume");
    const img = document.querySelector('img[alt="No image selected"]');
    if (newimg == "party-horn") {
      
      audio.play();
      confetti.addConfetti();
    }
    else {
      audio.play();
    }
  });
}