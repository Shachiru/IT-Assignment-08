const audio = document.getElementById("audio-file");
const start = document.getElementById("btn-start");
const end = document.getElementById("btn-end");
const lights = document.querySelectorAll(".light");

let currentLight = 0;
let direction = "RIGHT";
let intervalID = null;
const lightCount = lights.length;

start.addEventListener("click", () => {
  audio.play();
  intervalID = setInterval(updateLight, 100);
});

end.addEventListener("click", () => {
  audio.pause();
  clearInterval(intervalID);
});

function updateLight() {
  lights.forEach((light) => (light.style.background = "white"));
  lights[currentLight].style.background = "red";
  if (direction === "RIGHT" && currentLight > 0) {
    lights[currentLight - 1].style.background = "pink";
  } else if (direction === "LEFT" && currentLight < lightCount - 1) {
    lights[currentLight + 1].style.background = "pink";
  }

  if (direction === "RIGHT") {
    currentLight++;
    if (currentLight === lightCount - 1) {
      direction = "LEFT";
    }
  } else {
    currentLight--;
    if (currentLight === 0) {
      direction = "RIGHT";
    }
  }
}

