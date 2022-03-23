const options = ['Rock', 'Scissors', 'Paper', 'Lizard', 'Spock'];

class Choice { 
    constructor(name, wins, loses) {
        this.name = name;
        this.wins = wins;
        this.loses = loses;
    }
}

var playerScore = 0;
var machineScore = 0;
var timesTied = 0

function checkWinner(machineChoice, userChoice){
    for (const winsVs of userChoice) {
        if (winsVs === machineChoice){
            return true;
        } 
    }
    return false;
}

function machine (userChoice){
    let choice = options[Math.floor(Math.random() * 5)];
    if (choice === userChoice.name){
        result('It\'s a TIE.' , 'You chose ' + userChoice.name + '. Your opponent chooses ' + choice + '.', 'yellow');
        ++timesTied;
    }
    else if (checkWinner(choice,  userChoice.wins)){
        result('You WIN!' , 'You chose ' + userChoice.name + '. Your opponent chooses ' + choice + '.', '#16b924');
        ++playerScore;
    }
    else {
        result('You LOSE :(' , 'You chose ' + userChoice.name + '. Your opponent chooses ' + choice + '.', 'red');
        ++machineScore;
    }
    showScore();    
}

function result(titleString, bodyString, colour) {
    const titleText = document.querySelector('.alertTitle');
    titleText.textContent = titleString;
    titleText.style.color = colour;
    const bodyText = document.querySelector('.alertContent')
    bodyText.textContent = bodyString
    document.querySelector('.alert').style.visibility = 'visible';
}
  
function showScore(){
    const scoreText = document.querySelector(".score h3")
    scoreText.textContent = "Your Score: " + playerScore + ". Opponent's score: " + machineScore + ". Ties: " + timesTied
}

function createChoice(name, wins, loses){
    let userChoice = new Choice(name, wins, loses);
    return userChoice
}

function rock(){
    machine(createChoice('Rock' , ['Scissors', 'Lizard' ], ['Paper', 'Spock']));
}

function paper(){ 
    machine(createChoice('Paper' , ['Rock', 'Spock'], ['Lizard', 'Scissors']));
}

function scissors(){
    machine(createChoice('Scissors' , ['Paper', 'Lizard'], ['Rock', 'Spock']));
}

function lizard(){
    machine(createChoice('Lizard' , ['Paper', 'Spock'], ['Scissors', 'Rock']));
}

function spock(){
    machine(createChoice('Spock' , ['Scissors', 'Rock'], ['Paper', 'Lizard']));
}