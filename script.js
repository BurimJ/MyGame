"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  console.log("JavaScript running");

  // nulstil point og liv
  points = 0;
  lives = 3;

  // Start animationer
  document.querySelector("#banana1_container").classList.add("falling");
  document.querySelector("#banana2_container").classList.add("falling");
  document.querySelector("#banana3_container").classList.add("falling");
  document.querySelector("#grape_container").classList.add("falling");
  document.querySelector("#snake1_container").classList.add("falling");
  document.querySelector("#snake2_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  // Registrer click
  document
    .querySelector("#banana1_container")
    .addEventListener("click", clickBanana1);
  document
    .querySelector("#banana2_container")
    .addEventListener("click", clickBanana2);
  document
    .querySelector("#banana3_container")
    .addEventListener("click", clickBanana3);
  document
    .querySelector("#grape_container")
    .addEventListener("click", clickGrape);
  document
    .querySelector("#snake1_container")
    .addEventListener("click", clickSnake1);
  document
    .querySelector("#snake2_container")
    .addEventListener("click", clickSnake2);
  document
    .querySelector("#heart_container")
    .addEventListener("click", clickHeart);
}

function clickBanana1() {
  console.log("Click Banana");
  // Forhindr gentagne clicks
  document
    .querySelector("#banana1_container")
    .removeEventListener("click", clickBanana1);

  // Stop coin container
  document.querySelector("#banana1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#banana1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#banana1_container")
    .addEventListener("animationend", banana1Gone);

  // Giv point
  incrementPoints();
}

function clickBanana2() {
  console.log("Click Banana2");
  // Forhindr gentagne clicks
  document
    .querySelector("#banana2_container")
    .removeEventListener("click", clickBanana2);

  // Stop coin container
  document.querySelector("#banana2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#banana2_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#banana2_container")
    .addEventListener("animationend", banana2Gone);

  // Giv point
  incrementPoints();
}

function clickBanana3() {
  console.log("Click Banana3");
  // Forhindr gentagne clicks
  document
    .querySelector("#banana3_container")
    .removeEventListener("click", clickBanana3);

  // Stop coin container
  document.querySelector("#banana3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#banana3_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#banana3_container")
    .addEventListener("animationend", banana3Gone);

  // Giv point
  incrementPoints();
}

function clickGrape() {
  console.log("Click Grape");
  // Forhindr gentagne clicks
  document
    .querySelector("#grape_container")
    .removeEventListener("click", clickGrape);

  // Stop coin container
  document.querySelector("#grape_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#grape_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#grape_container")
    .addEventListener("animationend", grapeGone);

  // Giv point
  incrementPoints2();
}

function clickSnake1() {
  console.log("Click Snake");
  // Forhindr gentagne clicks
  document
    .querySelector("#snake1_container")
    .removeEventListener("click", clickSnake1);

  // Stop coin container
  document.querySelector("#snake1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#snake1_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#snake1_container")
    .addEventListener("animationend", snake1Gone);

  decrementLives();
}

function clickSnake2() {
  console.log("Click Snake 2");
  // Forhindr gentagne clicks
  document
    .querySelector("#snake2_container")
    .removeEventListener("click", clickSnake2);

  // Stop coin container
  document.querySelector("#snake2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#snake2_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#snake2_container")
    .addEventListener("animationend", snake2Gone);

  decrementLives();
}

function clickHeart() {
  console.log("Click heart");
  // Forhindr gentagne clicks
  document
    .querySelector("#heart_container")
    .removeEventListener("click", clickHeart);

  // Stop heart container
  document.querySelector("#heart_container").classList.add("paused");

  // sæt forsvind-animation på heart
  document.querySelector("#heart_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: heatGone
  document
    .querySelector("#heart_container")
    .addEventListener("animationend", heartGone);

  incrementLives();
}

function banana1Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#banana1_container")
    .removeEventListener("animationend", banana1Gone);

  // fjern forsvind-animation
  document.querySelector("#banana1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#banana1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#banana1_container").classList.remove("falling");
  document.querySelector("#banana1_container").offsetWidth;
  document.querySelector("#banana1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#banana1_container")
    .addEventListener("click", clickBanana1);
}

function banana2Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#banana2_container")
    .removeEventListener("animationend", banana2Gone);

  // fjern forsvind-animation
  document.querySelector("#banana2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#banana2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#banana2_container").classList.remove("falling");
  document.querySelector("#banana2_container").offsetWidth;
  document.querySelector("#banana2_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#banana2_container")
    .addEventListener("click", clickBanana2);
}

function banana3Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#banana3_container")
    .removeEventListener("animationend", banana3Gone);

  // fjern forsvind-animation
  document.querySelector("#banana3_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#banana3_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#banana3_container").classList.remove("falling");
  document.querySelector("#banana3_container").offsetWidth;
  document.querySelector("#banana3_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#banana3_container")
    .addEventListener("click", clickBanana3);
}

function grapeGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#grape_container")
    .removeEventListener("animationend", banana3Gone);

  // fjern forsvind-animation
  document.querySelector("#grape_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#grape_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#grape_container").classList.remove("falling");
  document.querySelector("#grape_container").offsetWidth;
  document.querySelector("#grape_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#grape_container")
    .addEventListener("click", clickGrape);
}

function snake1Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#snake1_container")
    .removeEventListener("animationend", snake1Gone);

  // fjern forsvind-animation
  document.querySelector("#snake1_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#snake1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#snake1_container").classList.remove("falling");
  document.querySelector("#snake1_container").offsetWidth;
  document.querySelector("#snake1_container").classList.add("falling");

  // gør det muligt at klikke på bomb igen
  document
    .querySelector("#snake1_container")
    .addEventListener("click", clickSnake1);
}

function snake2Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#snake2_container")
    .removeEventListener("animationend", snake2Gone);

  // fjern forsvind-animation
  document.querySelector("#snake2_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#snake2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#snake2_container").classList.remove("falling");
  document.querySelector("#snake2_container").offsetWidth;
  document.querySelector("#snake2_container").classList.add("falling");

  // gør det muligt at klikke på bomb igen
  document
    .querySelector("#snake2_container")
    .addEventListener("click", clickSnake2);
}

function heartGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#heart_container")
    .removeEventListener("animationend", heartGone);

  // fjern forsvind-animation
  document.querySelector("#heart_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#heart_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#heart_container").classList.remove("falling");
  document.querySelector("#heart_container").offsetWidth;
  document.querySelector("#heart_container").classList.add("falling");

  // gør det muligt at klikke på heart igen
  document
    .querySelector("#heart_container")
    .addEventListener("click", clickHeart);
}

function incrementPoints() {
  console.log("Gives point");
  points++;
  console.log("has " + points + " points");
  displayPoints();
}
function incrementPoints2() {
  console.log("Gives point");
  points = points + 2;
  console.log("has " + points + " points");
  displayPoints();
}

function displayPoints() {
  console.log("show point");
  document.querySelector("#banana_count").textContent = points;
}

function decrementLives() {
  console.log("missed a live");
  showDecrementedLives();
  lives--;
  if (lives <= 0) {
    gameOver();
  } else {
    levelComplete();
  }
}

function incrementLives() {
  console.log("få et liv");
  lives++;
  showIncrementedLives();
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function gameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
}

function levelomplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
}
