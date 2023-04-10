const drums = new Howl({
    "src": [
      "./drums/drums.webm",
      "./drums/drums.mp3"
    ],
    "sprite": {
      "clap": [
        0,
        483.9909297052154
      ],
      "closed-hihat": [
        2000,
        386.7573696145126
      ],
      "crash": [
        4000,
        13256.825396825398
      ],
      "kick": [
        19000,
        166.00907029478407
      ],
      "open-hihat": [
        21000,
        1835.918367346938
      ],
      "snare": [
        24000,
        245.26077097505805
      ]
    }
  });

  const drumkit = document.querySelector('.drumkit');
  function playDrum(event) {
    if (event.target.classList.contains('pad')) {
      event.preventDefault();
      let soundToPlay = event.target.dataset.sound;
      drums.play(soundToPlay);
    }
  }

  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setViewportHeight();
  window.addEventListener('resize', () => {
    setTimeout(setViewportHeight, 100);
  });
  
  drumkit.addEventListener('click', playDrum);
  drumkit.addEventListener('touchstart', playDrum);