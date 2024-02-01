const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 10 + 1)];
  }
  return color;
};

const startColorChange = function () {
  document.body.style.backgroundColor = randomColor();
};

let startInterval;

const setStart = document.querySelector("#start");
setStart.addEventListener("click", function () {
  if (!startInterval) {
    startInterval = setInterval(startColorChange, 1000);
  }
});

const setStop = document.querySelector("#stop");
setStop.addEventListener("click", function () {
  clearInterval(startInterval);
  startInterval = null;
});
