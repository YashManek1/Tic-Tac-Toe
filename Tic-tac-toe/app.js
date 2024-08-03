let boxes = document.querySelectorAll(".boxes");
let newGame = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let reset = document.querySelector("#resetBtn");
let turnX = true;
let turnO = false;
let para = document.querySelector(".para");

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let pattern of winningPatterns) {
    let a = boxes[pattern[0]].innerText;
    let b = boxes[pattern[1]].innerText;
    let c = boxes[pattern[2]].innerText;
    if (a != "" && b != "" && c != "") {
      if (a === b && a === c && b === c) {
        msgContainer.classList.remove("new");
        para.innerText = `Winner is ${a}`;
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

reset.addEventListener("click", () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  turnX = true;
  msgContainer.classList.add("new");
});

newGame.addEventListener("click", () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  turnX = true;
  msgContainer.classList.add("new");
});
