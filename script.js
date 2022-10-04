let cells = document.querySelectorAll(".cell");
let button = document.querySelector("button");
let header = document.querySelector("h2");
let clickCounter = 0;
let currentColor = "red";
let redTracker = [];
let blueTracker = [];
let winOptions = ["123", "456", "789", "159", "357", "147", "258", "369"];
let gameOver = false;
cells.forEach((cell) => {
  cell.addEventListener(
    "click",
    (e) => {
      if (gameOver == false) {
        clickCounter += 1;
        header.innerText = `${currentColor.toUpperCase()}'s turn`;
        currentColor = currentColor == "red" ? "blue" : "red";

        cell.style.backgroundColor = currentColor;

        let position = e.target.dataset.index;
        currentColor == "red"
          ? redTracker.push(position)
          : blueTracker.push(position);

        if (clickCounter >= 5)
          checkWinner(currentColor == "red" ? redTracker : blueTracker);

        if (clickCounter >= 9)
          header.textContent = `It is a tie. You are both losers`;
      }
    },
    { once: true }
  );
});

button.addEventListener("click", () => window.location.reload());

function checkWinner(player) {
  let won = 0;
  for (let j = 0; j < winOptions.length; j++) {
    for (let i = 0; i < player.length; i++) {
      if (winOptions[j].includes(player[i])) won += 1;
    }
    if (won == 3) {
      gameOver = true;
      header.textContent = `${currentColor.toUpperCase()} is the winner!`;
      break;
    }
    won = 0;
  }
}
