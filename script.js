"use strict";

//
const gameBoxes = document.querySelectorAll(".col");
let currentPlayer = "X";
let arr = Array(9).fill(null);
// Tracking the current turn :
// DRAW GAME : check if array values are not null & NO one IS THE WINNER ;

const checkWinner = () => {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.write(`THE WINNER IS Player ${currentPlayer}`);

    return;
  }

  if (!arr.some((val) => val === null)) {
    document.write("THE GAME IS DRAW ... TRY AGAIN !");
  }
};

gameBoxes.forEach((box) => {
  box.addEventListener("click", (el) => {
    const currEl = el.target;
    const id = Number(currEl.id);
    // Check if there is already an Existing Elem  Present then User can't Click there :>
    if (arr[id] !== null) return;

    arr[id] = currentPlayer;
    currEl.innerHTML = currentPlayer;

    // Check that X is the Winner:
    checkWinner();

    // convert X into O on P2 turn :
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // console.log(arr);
  });
});
