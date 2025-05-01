let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const cs = document.querySelector("#comp-score");
const us = document.querySelector("#user-score");
const rst = document.querySelector(".reset");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = gencompChoice();
        playGame(userChoice, compChoice);
    });
});

const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];

}

const playGame = (userChoice, compChoice) => {
    console.log("User: ", userChoice);
    console.log("Comp: ",compChoice);

    if(userChoice == compChoice){
        showDraw();
    }
    else{
        userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "scissor" ? true : false;
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissor" ? false : true;
        }
        else{
            userWin = compChoice == "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showDraw = () => {
    msg.innerText = "Game was Drawn!";
    msg.style.backgroundColor = "#603140";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        us.innerText = userScore;
        msg.innerText = "You Win!" + `Your ${userChoice} defeats Computer's ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        cs.innerText = compScore
        msg.innerText = "Computer Win! " + `Computer's ${compChoice} defeats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const rstGame = () => {
    userScore = 0;
    compScore = 0;
    us.innerText = 0;
    cs.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#603140";
}

rst.addEventListener("click", rstGame);