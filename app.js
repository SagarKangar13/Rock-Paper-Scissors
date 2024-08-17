let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userImg = document.createElement("img");
let compImg = document.createElement("img");

let userImgDiv = document.querySelector(".userImgDiv");
let compImgDiv = document.querySelector(".compImgDiv");

const resetBtn = document.querySelector("#reset-btn");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = (userChoice, compChoice) => {
    msg.innerText = "Game was Draw. Play again.";

    userImgDiv.innerHTML = '';
    compImgDiv.innerHTML = '';

    userImg.src = `./images/${userChoice}.png`;
    compImg.src = `./images/${compChoice}.png`;

    userImg.alt = `${userChoice} Image`;
    compImg.alt = `${compChoice} Image`;

    userImgDiv.appendChild(userImg);
    compImgDiv.appendChild(compImg);
}

const showWinner = (userWin, userChoice, compChoice) => {
    userImgDiv.innerHTML = '';
    compImgDiv.innerHTML = '';

    userImg.src = `./images/${userChoice}.png`;
    compImg.src = `./images/${compChoice}.png`;

    userImg.alt = `${userChoice} Image`;
    compImg.alt = `${compChoice} Image`;

    userImgDiv.appendChild(userImg);
    compImgDiv.appendChild(compImg);

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        userImg.src = `./images/${userChoice}.png`;
        compImg.src = `./images/${compChoice}.png`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    }
}

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    userImgDiv.innerHTML = '';
    compImgDiv.innerHTML = '';
});
