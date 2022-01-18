//issues: how to get X to show BEFORE alert shows?
//will add later: scoreboard 


//Define required constants:

let start, gameComplete

let X = 0, O = 0;

const squares = document.querySelectorAll('.game');
const message = document.querySelector('h2');


//function that initiates the Game

function initialize() {
    start = 1;
    gameComplete = false;// to check if game has ended or not
    //pos will be alligned with value 1 or else pos=0
    //positions in squares as numbers 
    pos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
        squares[i].addEventListener('click', handler, { once: true });
    }
}

//Handle a player clicking a square:
function handler(event) {
    if (start % 2 !== 0) {
        document.getElementById(event.target.id).innerHTML = '<img src="neonX.png">';
        start++;
        pos[event.target.id] = 'x';
        winner('cross');
    }
    else {
        document.getElementById(event.target.id).innerHTML = '<img src="neonO.png">';
        //display which player turn it is.
        start++;
        pos[event.target.id] = 'o';
        winner('no');
    }
}

//winner Function for player X or O or draw 
function winner(val) {
    if ((pos[0] === pos[1] && pos[1] === pos[2]) || (pos[0] === pos[4] && pos[4] === pos[8]) || (pos[6] === pos[4] && pos[4] === pos[2]) || (pos[6] === pos[7] && pos[7] === pos[8]) || (pos[0] === pos[3] && pos[3] === pos[6]) || (pos[3] === pos[4] && pos[4] === pos[5]) || (pos[1] === pos[4] && pos[4] === pos[7]) || (pos[2] === pos[5] && pos[5] === pos[8])) {
        if (val === 'cross') {
            X++;
            alert("player X wins")
            //displays message on the button,player1 wins
        }
        else {
            //displays message on the button,player2 wins
            O++;
            alert("player O wins")
        }
        for (i = 0; i < squares.length; i++) {
            squares[i].removeEventListener('click', handler);
        }
        gameComplete = true;
    }
    //displays message on the button,that the match is draw
    else if (start === 10) {
        alert("it's a draw!");
        gameComplete = true;
    }
}
initialize();

//reset board game using event listener
const resetGame = document.getElementById("reset");
resetGame.addEventListener("click", function (evt) {
    evt.preventDefault();
    start = 1;
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = " ";
    } initialize();
});
