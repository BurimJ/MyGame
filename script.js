"use strict";
window.addEventListener("load", ready);

let points = 0;
let lives = 0;
let isGameRunning = false;

function ready() {
  console.log("JavaScript running");
  document.querySelector("#btn_start").addEventListener("click", startGame);

  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document
    .querySelector("#btn_go_to_start")
    .addEventListener("click", showStartScreen);
}

function showGameScreen() {
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
function resetLives() {
  // sæt lives til 3
  lives = 3;
  //nulstil visning af liv (hjerte vi ser)
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function startGame() {
  // nulstil point og liv
  resetLives();
  resetPoints();
  showGameScreen();
  startTimer();

  // skjul startskærm
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  document.querySelector("#sound_background").currentTime = 0;
  document.querySelector("#sound_background").play();

  // Start animationer
  startAllAnimations();

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

  document
    .querySelector("#banana1_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#banana2_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#banana3_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#grape_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#snake1_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#snake2_container")
    .addEventListener("animationiteration", pRestart);
}

function startAllAnimations() {
  document.querySelector("#banana1_container").classList.add("falling");
  document.querySelector("#banana2_container").classList.add("falling");
  document.querySelector("#banana3_container").classList.add("falling");
  document.querySelector("#grape_container").classList.add("falling");
  document.querySelector("#snake1_container").classList.add("falling");
  document.querySelector("#snake2_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  document.querySelector("#banana1_container").classList.add("position1");
  document.querySelector("#banana1_container").classList.add("position2");
  document.querySelector("#banana1_container").classList.add("position3");
  document.querySelector("#grape_container").classList.add("position4");
  document.querySelector("#snake1_container").classList.add("position5");
  document.querySelector("#snake2_container").classList.add("position6");
  document.querySelector("#heart_container").classList.add("position7");
}

function clickBanana1() {
  console.log("Click Banana");
  // Forhindr gentagne clicks
  const coin = this;
  coin.removeEventListener("click", clickBanana1);

  // Stop coin container
  coin.classList.add("paused");

  // sæt forsvind-animation på coin
  coin.querySelector("img").classList.add("zoom_out");

  document.querySelector("#sound_collect").currentTime = 0;
  document.querySelector("#sound_collect").play();
  // når forsvind-animation er færdig: coinGone
  coin.addEventListener("animationend", banana1Gone);

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

  document.querySelector("#sound_collect").currentTime = 0;
  document.querySelector("#sound_collect").play();

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

  document.querySelector("#sound_collect").currentTime = 0;
  document.querySelector("#sound_collect").play();

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

  document.querySelector("#sound_collect").currentTime = 0;
  document.querySelector("#sound_collect").play();
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

  document.querySelector("#sound_snake").currentTime = 0;
  document.querySelector("#sound_snake").play();

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
  document.querySelector("#sound_snake").currentTime = 0;
  document.querySelector("#sound_snake").play();

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
  document.querySelector("#sound_heart").currentTime = 0;
  document.querySelector("#sound_heart").play();

  // når forsvind-animation er færdig: heatGone
  document
    .querySelector("#heart_container")
    .addEventListener("animationend", heartGone);

  if (lives < 3) {
    incrementLives();
  }
}

function banana1Gone() {
  const coin = this;
  // fjern event der bringer os herind
  coin.removeEventListener("animationend", banana1Gone);

  // fjern forsvind-animation
  coin.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  coin.classList.remove("paused");

  pRestart.call(this);

  /*// genstart falling animation
  coin.classList.remove("falling");
  coin.offsetWidth;
  coin.classList.add("falling");

  coin.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7"
  );

  const p = Math.ceil(Math.random() * 7);
  coin.classList.add(`position${p}`);

  // gør det muligt at klikke på coin igen
  // document
  // .querySelector("#banana1_container")
  //.addEventListener("click", clickBanana1);*/
  coin.addEventListener("click", clickBanana1);
}

function banana2Gone() {
  const coin = this;
  // fjern event der bringer os herind
  coin.removeEventListener("animationend", banana2Gone);

  // fjern forsvind-animation
  coin.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  coin.classList.remove("paused");

  pRestart.call(this);

  // gør det muligt at klikke på coin igen
  coin.addEventListener("click", clickBanana2);
}

function banana3Gone() {
  const coin = this;
  // fjern event der bringer os herind
  coin.removeEventListener("animationend", banana3Gone);

  // fjern forsvind-animation
  coin.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  coin.classList.remove("paused");

  pRestart.call(this);

  // gør det muligt at klikke på coin igen
  coin.addEventListener("click", clickBanana3);
}

function grapeGone() {
  // fjern event der bringer os herind
  const coin = this;
  // fjern event der bringer os herind
  coin.removeEventListener("animationend", grapeGone);

  // fjern forsvind-animation
  coin.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  coin.classList.remove("paused");

  pRestart.call(this);

  // gør det muligt at klikke på coin igen
  coin.addEventListener("click", clickGrape);
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

  pRestart.call(this);

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

  pRestart.call(this);

  // gør det muligt at klikke på bomb igen
  document
    .querySelector("#snake2_container")
    .addEventListener("click", clickSnake2);
}

function pRestart() {
  console.log("restart");
  const coin = this;

  // genstart falling animation
  coin.classList.remove("falling");
  coin.offsetWidth;
  coin.classList.add("falling");

  // fjern alle positioner
  coin.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7"
  );

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 7);
  coin.classList.add(`position${p}`);
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

  pRestart.call(this);

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
  if (points >= 10) {
    levelComplete();
  }
}
function incrementPoints2() {
  console.log("Gives point");
  points = points + 2;
  console.log("has " + points + " points");
  displayPoints();
  if (points >= 10) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("show point");
  document.querySelector("#banana_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");

  showDecrementedLives();
  lives--;

  if (lives === 0) {
    gameOver();
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
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_over").currentTime = 0;
  document.querySelector("#sound_over").play();
  document
    .querySelector("#btn_return")
    .addEventListener("click", showStartScreen);

  stopGame();
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#sound_complete").currentTime = 0;
  document.querySelector("#sound_complete").play();
  document.querySelector("#sound_success").currentTime = 0;
  document.querySelector("#sound_success").play();
  document.querySelector("#btn_retry").addEventListener("click", startGame);
  stopGame();
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("times up");
  if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function stopGame() {
  isGameRunning = false;
  // document
  //   .querySelector("#time_sprite")
  //   .removeEventListener("animationend", );
  // Stop animationer
  document.querySelector("#banana1_container").classList.remove("falling");
  document.querySelector("#banana2_container").classList.remove("falling");
  document.querySelector("#banana3_container").classList.remove("falling");
  document.querySelector("#grape_container").classList.remove("falling");
  document.querySelector("#snake1_container").classList.remove("falling");
  document.querySelector("#snake2_container").classList.remove("falling");
  document.querySelector("#heart_container").classList.remove("falling");
  document.querySelector("#sound_background").pause();

  // Fjern click
  document
    .querySelector("#banana1_container")
    .removeEventListener("click", clickBanana1);
  document
    .querySelector("#banana2_container")
    .removeEventListener("click", clickBanana2);
  document
    .querySelector("#banana3_container")
    .removeEventListener("click", clickBanana3);
  document
    .querySelector("#grape_container")
    .removeEventListener("click", clickGrape);
  document
    .querySelector("#snake1_container")
    .removeEventListener("click", clickSnake1);
  document
    .querySelector("#snake2_container")
    .removeEventListener("click", clickSnake2);
  document
    .querySelector("#heart_container")
    .removeEventListener("click", clickHeart);

  document.querySelector("#time_sprite").classList.remove("shrink");
}
