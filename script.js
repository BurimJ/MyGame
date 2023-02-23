window.addEventListener("load", start);

let points = 0;
let lives = 3;
function start() {
  console.log("JavaScript kører!");

  // Start animationer
  document.querySelector("#banana_container").classList.add("falling1");
  document.querySelector("#snake_container").classList.add("pattern1");

  // Registrer click
  document
    .querySelector("#banana_container")
    .addEventListener("click", clickBanana);
  document
    .querySelector("#snake_container")
    .addEventListener("click", clickSnake);
}

function clickBanana() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document
    .querySelector("#banana_container")
    .removeEventListener("click", clickBanana);

  // Stop coin container
  document.querySelector("#banana_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#banana_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#banana_container")
    .addEventListener("animationend", bananaGone);
  incrementPoints();
}

function incrementPoints() {
  console.log("plusPoints");
  points = points + 100;
  displayPoints();
}
function decrementPoints() {
  console.log("minusPoints");
  points--;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#point_count").textContent = points;
}
function bananaGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#banana_container")
    .removeEventListener("animationend", bananaGone);

  // fjern forsvind-animation
  document.querySelector("#banana_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#banana_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#banana_container").classList.remove("falling1");
  document.querySelector("#banana_container").offsetWidth;
  document.querySelector("#banana_container").classList.add("falling1");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#banana_container")
    .addEventListener("click", clickBanana);
}

function clickSnake() {
  console.log("Click snake");
  // Forhindr gentagne clicks
  document
    .querySelector("#bomb_container")
    .removeEventListener("click", clickSnake);

  // Stop coin container
  document.querySelector("#snake_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#snake_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#snake_container")
    .addEventListener("animationend", snakeGone);
  decrementPoints();
  decrementLives();
}

function decrementLives() {
  console.log("decrementLives");
  displayDecementedLives();
  lives--;
}

function displayDecementedLives() {
  console.log("#heart" + lives);
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function bombGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#snake_container")
    .removeEventListener("animationend", snakeGone);

  // fjern forsvind-animation
  document.querySelector("#snake_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#snake_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#snake_container").classList.remove("falling2");
  document.querySelector("#snake_container").offsetWidth;
  document.querySelector("#snake_container").classList.add("falling2");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#snake_container")
    .addEventListener("click", clickSnake);
}

if (lives <= 0) {
  console.log();
}
