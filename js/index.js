const circles = document.querySelectorAll("#personBox #grid-box #circle");
const boxes = document.querySelectorAll("#gridBoxes #boxes");

const shuffledCircles = Array.from(circles).sort(() => Math.random() - 0.5);

let circleIndex = 0;
boxes.forEach((box) => {
  for (let i = 0; i < 3; i++) {
    if (circleIndex < shuffledCircles.length) {
      box.appendChild(shuffledCircles[circleIndex]);
      circleIndex++;
    }
  }
});
