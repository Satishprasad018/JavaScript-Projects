const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener("click", function (event_1) {
    //console.log(event_1);
    //console.log(event_1.target);

    if (event_1.target.id === "grey") {
      body.style.backgroundColor = event_1.target.id;
    }
    if (event_1.target.id === "white") {
      body.style.backgroundColor = event_1.target.id;
    }
    if (event_1.target.id === "blue") {
      body.style.backgroundColor = event_1.target.id;
    }
    if (event_1.target.id === "yellow") {
      body.style.backgroundColor = event_1.target.id;
    }
    if (event_1.target.id === "pink") {
      body.style.backgroundColor = event_1.target.id;
    }
    if (event_1.target.id === "red") {
      body.style.backgroundColor = event_1.target.id;
    }
  });
});
