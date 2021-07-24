
/* ---- particles.js config ---- */

particlesJS("dust", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#c87b00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#8895B3"
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false
      },
      "resize": false
    }
  },
  "retina_detect": true
});

arrow = document.getElementById("arrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function video()
{
  if(document.getElementById("videoYT").src == "https://www.youtube.com/embed/5FMPfM0h2wI")
  {
    document.getElementById("videoYT").src = "https://www.youtube.com/embed/hO4osZmzH64";
  }
  else
  {
    document.getElementById("videoYT").src = "https://www.youtube.com/embed/5FMPfM0h2wI"
  }
}