console.log('Hello World!')

function getComputerChoice(){
    const rannum = Math.random()
    let choice = 'rock'
    if (rannum < 1/3){
        choice = 'paper'
    }
    if (rannum > 2/3){
        choice = 'scissors'
    }
    return choice
}

function getHumanChoice(){
    let choice = prompt('what are you choosing?').toLowerCase()
    if (choice.includes('rock')) return 'rock'
    if (choice.includes('paper')) return 'paper'
    return 'scissors'
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let winner = true;
    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'Tied.';
                case 'paper':
                    winner = false;
                    break;
                case 'scissors':
                    winner = true;
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    winner = true;
                    break;
                case 'paper':
                    return 'Tied.';
                case 'scissors':
                    winner = false;
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    winner = false;
                    break;
                case 'paper':
                    winner = true;
                    break;
                case 'scissors':
                    return 'Tied.';
            }
            break;
        default:
            return 'Invalid choice. Please choose between rock, paper, or scissors.';
    }
    winner?humanScore++:computerScore++
    return `You ${winner ? 'win' : 'lose'}! ${winner ? humanChoice : computerChoice} beats ${winner ? computerChoice : humanChoice}.`;
}

function handle(humanChoice,computerChoice){
    console.log(humanChoice)
    current.textContent = playRound(humanChoice,computerChoice)
    score.textContent = `You: ${humanScore} --- Computer: ${computerScore}`
}

const current = document.createElement('p')
document.body.appendChild(current)
const score = document.createElement('p')
document.body.appendChild(score)
const rock = document.createElement('button')
rock.textContent = 'ROCK'
document.body.appendChild(rock)
rock.addEventListener('click',()=>handle('rock',getComputerChoice()))
const paper = document.createElement('button')
paper.textContent = 'PAPER'
document.body.appendChild(paper)
paper.addEventListener('click',()=>handle('paper',getComputerChoice()))
const scissors = document.createElement('button')
scissors.textContent = 'SCISSORS'
document.body.appendChild(scissors)
scissors.addEventListener('click',()=>handle('scissors',getComputerChoice()))

document.body.setAttribute('style','font-size:24px;')
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.fontSize = '24px'; // Adjust the font size
    button.style.padding = '10px 20px'; // Adjust the padding for larger buttons
});

// for (let i = 0; i < 5; i++) {
//     const humanChoice = getHumanChoice()
//     const computerChoice = getComputerChoice()
//     console.log(playRound(humanChoice,computerChoice))
// }