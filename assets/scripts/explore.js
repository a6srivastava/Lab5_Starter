// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() { 
  
  const synth = window.speechSynthesis;
  let tts = document.getElementById("text-to-speak");
  let voiceout = new SpeechSynthesisUtterance(tts.value);
  function populateVoiceList() {
    let voices = synth.getVoices();
    const voicelist = document.getElementById("voice-select");

    // Clear the current options to avoid duplicates
    voicelist.innerHTML = '';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = voices[i].name;
      voicelist.appendChild(option);
    }
  }
  populateVoiceList();
  synth.addEventListener('voiceschanged', (event) => {
    populateVoiceList();
  });
  
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    
    let voices = synth.getVoices();
    const voice_in = document.getElementById("voice-select");
    tts = document.getElementById("text-to-speak");
    voiceout = new SpeechSynthesisUtterance(tts.value);
    
    for(let i = 0; i < voices.length; i++) {
      if (voices[i].name === voice_in.value) {
        voiceout.voice = voices[i];
      }
    }

    synth.speak(voiceout);
    voiceout.addEventListener('start', (event) => {
      const img = document.querySelector('img[alt="Smiling face"]');
      img.src = "assets/images/smiling-open.png";
    })
    voiceout.addEventListener('end', (event) => {
      const img = document.querySelector('img[alt="Smiling face"]');
      img.src = "assets/images/smiling.png";
    })
  });

}