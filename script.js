const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]             
];

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById("status").textContent = `Congratulations, Player ${currentPlayer} Wins !`;
            gameActive = false;
            return;
        }
        
        if (!board.includes("")) {
            document.getElementById("status").textContent = "It's a Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return board[pattern[0]] !== "" &&
               board[pattern[0]] === board[pattern[1]] &&
               board[pattern[1]] === board[pattern[2]];
    });
}

function resetGame() {
    board.fill("");
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("status").textContent = "";
    currentPlayer = "X";
    gameActive = true;
}
