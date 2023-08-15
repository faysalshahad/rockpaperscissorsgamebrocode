const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerWinText = document.querySelector("#playerWinText");
const computerWinText = document.querySelector("#computerWinText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player, computer, playerWin = 0, computerWin = 0;

choiceBtns.forEach(button =>{
    return button.addEventListener("click", () => {
        player = button.textContent;
        /**Calling the function */
        computerTurn();
        /**Using a Template Literal `` to printout information */
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = `Result: ${checkWinner()}`;
        playerWinText.textContent = `Player Win Number: ${playerWin}`;
        computerWinText.textContent = `Computer Win Number: ${computerWin}`;
    });
});

function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computer = "Rock";
            break;

            case 2:
            computer = "Paper";
            break;

            case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner() {
    if (player === computer) {
        return "It is a draw";        
    } else if(computer === "Rock" && player === "Paper") {
        /**Using a Ternary Operator ? : */
        // return (player === "Paper") ? "Player Win!" : "Computer Win!";
        playerWin++;
        return "Player Win!";
    } else if(computer === "Paper" && player === "Scissors") {
        /**Using a Ternary Operator ? : */
        //return (player === "Scissors") ? "Player Win!" : "Computer Win!";
        playerWin++;
        return "Player Win!";
    } else if(computer === "Scissors" && player === "Rock") {
        /**Using a Ternary Operator ? : */
        //return (player === "Rock") ? "Player Win!" : "Computer Win!";
        playerWin++;
        return "Player Win!";
    } else{
        computerWin++;
        return "Computer Win!";
    }    
}