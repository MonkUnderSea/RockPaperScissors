// Coded along with freeCodeCamp.org(https://www.youtube.com/watch?v=jaVNP3nIAv0). Code below may vary.
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallWord_user = 'user'.fontsize(3).sub();
const smallWord_comp = 'comp'.fontsize(3).sub(); 

function convertToWord(letter){
    if(letter === 'r') 
        return 'Rock';
    if(letter === 'p') 
        return 'Paper';
    return 'Scissors';
}


function makeComputerChoice() {
    const choices = ['r', 'p', 's'];
    const random = (Math.floor(Math.random()*3));
    return choices[random];
}


function win(userChoice, computerChoice) {
     userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallWord_user} beats ${convertToWord(computerChoice)}${smallWord_comp}. You win!`;
    document.getElementById(userChoice).classList.add('greenGlow');
    setTimeout(
        function() {
            document.getElementById(userChoice).classList.remove('greenGlow')
        }, 300);
    
}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallWord_comp} beats ${convertToWord(userChoice)}${smallWord_user}. You lose!`;
    document.getElementById(userChoice).classList.add('redGlow');
    setTimeout(
        function() {
            document.getElementById(userChoice).classList.remove('redGlow')
        }, 300);
    }


function draw(userChoice, _computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `You both chose ${convertToWord(userChoice)}. It's a draw`;
    document.getElementById(userChoice).classList.add('grayGlow');
    setTimeout(
        function() {
            document.getElementById(userChoice).classList.remove('grayGlow')
        }, 300);   
    
}


function game(userChoice) {
    const computerChoice = makeComputerChoice();
    const outcome = userChoice + computerChoice
    switch (outcome) { 
        case 'sp':
        case 'pr':
        case 'rs':
            win(userChoice,computerChoice);
            console.log('You wins\n' + userChoice + computerChoice);
             break;
        case 'ps':
        case 'rp':
        case 'sr':
            lose(userChoice,computerChoice);
            console.log('You lose\n' + userChoice + computerChoice);
            break;
        default:
            draw(userChoice,computerChoice);
            console.log('You draws\n' + userChoice + computerChoice );
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    
    paper_div.addEventListener('click', function() {
        game('p');
    })
    
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}


main();






















