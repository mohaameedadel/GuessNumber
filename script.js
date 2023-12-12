let again = document.querySelector(".again");
let divNumber = document.querySelector(".number");
let guess = document.querySelector(".guess");
let check = document.querySelector(".check");

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");

let secretNumber = Math.floor(Math.random(1) * 20) + 1;
console.log(secretNumber);


// guess.value = Math.floor(Math.random() * 20);

check.addEventListener("click", function () {
  // when there is no input
  if (!guess.value) {
    message.innerHTML = `⛔ No Number`;

    // when guess is too low
  } else if (guess.value < secretNumber) {
    message.innerHTML = `📉 Too low!`;
    score.textContent--;
    if (score.textContent <= "0") {
      message.innerHTML = `😥 Game Over`;
      score.textContent = 0;
    }

    // when guess is too high
  } else if (guess.value > secretNumber) {
    message.innerHTML = `📈 Too High!`;
    score.textContent--;
    if (score.textContent <= "0") {
      message.innerHTML = `😥 Game Over`;
      score.textContent = 0;
    }

    // when guess is equal secret
  } else if ((guess.value = secretNumber)) {
    message.innerHTML = `🎉 Correct Number`;
    document.body.style.cssText = "background-color: #60b347;";
    divNumber.style.cssText = "width: 30rem;";
    divNumber.innerHTML = `${secretNumber}`;
    if (+score.textContent > +highScore.textContent) {
      highScore.textContent = score.textContent;
    }
  }
});

again.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random(1) * 20) + 1;
  console.log(secretNumber);
  score.textContent = 20;
  message.innerHTML = `Start guessing...`;
  divNumber.innerHTML = `?`;
  guess.value = "";
  document.body.style.cssText = "background-color: #222;";
  divNumber.style.cssText = "width: 15rem;";
});
