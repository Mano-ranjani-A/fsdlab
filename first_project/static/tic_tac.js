// // This function is called
// function myfunc() {


// 	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
// 	b1 = document.getElementById("b1").value;
// 	b2 = document.getElementById("b2").value;
// 	b3 = document.getElementById("b3").value;
// 	b4 = document.getElementById("b4").value;
// 	b5 = document.getElementById("b5").value;
// 	b6 = document.getElementById("b6").value;
// 	b7 = document.getElementById("b7").value;
// 	b8 = document.getElementById("b8").value;
// 	b9 = document.getElementById("b9").value;


// 	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
// 		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {

// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player X won');
// 	}
// 	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
// 		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {

// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;

// 		window.alert('Player X won');
// 	}
// 	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
// 		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		window.alert('Player X won');
// 	}
// 	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
// 		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		window.alert('Player X won');
// 	}
// 	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
// 		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {

// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		window.alert('Player X won');
// 	}
// 	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
// 		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player X won');
// 	}
// 	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
// 		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player X won');
// 	}
// 	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
// 		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player X won');
// 	}


// 	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
// 		b2 == '0') && (b3 == '0' || b3 == '0')) {

// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
// 		b4 == '0') && (b7 == '0' || b7 == '0')) {
// 		document.getElementById('print')
// 			.innerHTML = "Player 0 won";
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
// 		b8 == '0') && (b9 == '0' || b9 == '0')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
// 		b6 == '0') && (b9 == '0' || b9 == '0')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b5").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
// 		b5 == '0') && (b9 == '0' || b9 == '0')) {

// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
// 		b5 == '0') && (b7 == '0' || b7 == '0')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
// 		b5 == '0') && (b8 == '0' || b8 == '0')) {
// 		document.getElementById('print')
// 			.innerHTML = "Player 0 won";
// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b4").disabled = true;
// 		document.getElementById("b6").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player 0 won');
// 	}
// 	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
// 		b5 == '0') && (b6 == '0' || b6 == '0')) {

// 		document.getElementById("b1").disabled = true;
// 		document.getElementById("b2").disabled = true;
// 		document.getElementById("b3").disabled = true;
// 		document.getElementById("b7").disabled = true;
// 		document.getElementById("b8").disabled = true;
// 		document.getElementById("b9").disabled = true;
// 		window.alert('Player 0 won');
// 	}


// 	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
// 		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
// 		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
// 		b5 == '0') && (b6 == 'X' || b6 == '0') &&
// 		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
// 		b8 == '0') && (b9 == 'X' || b9 == '0'))
// 		 {
// 			window.alert('Match Tie');
// 	}
// 	else {

// 		// For Printing Results
// 		if (flag == 1)
// 		{
// 			document.getElementById('print')
// 				.innerHTML = "Player X Turn";
// 		}
// 		else {
// 			document.getElementById('print')
// 				.innerHTML = "Player 0 Turn";
// 		}
// 	}
// }

// // Function to reset game
// function func_2()
//  {
// 	location.reload();
// 	document.getElementById('b1').value = '';
// 	document.getElementById("b2").value = '';
// 	document.getElementById("b3").value = '';
// 	document.getElementById("b4").value = '';
// 	document.getElementById("b5").value = '';
// 	document.getElementById("b6").value = '';
// 	document.getElementById("b7").value = '';
// 	document.getElementById("b8").value = '';
// 	document.getElementById("b9").value = '';

// }


// flag = 1;
// function func_3() {
// 	if (flag == 1) {
// 		document.getElementById("b1").value = "X";
// 		document.getElementById("b1").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b1").value = "0";
// 		document.getElementById("b1").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_4() {
// 	if (flag == 1) {
// 		document.getElementById("b2").value = "X";
// 		document.getElementById("b2").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b2").value = "0";
// 		document.getElementById("b2").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_5() {
// 	if (flag == 1) {
// 		document.getElementById("b3").value = "X";
// 		document.getElementById("b3").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b3").value = "0";
// 		document.getElementById("b3").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_6() {
// 	if (flag == 1) {
// 		document.getElementById("b4").value = "X";
// 		document.getElementById("b4").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b4").value = "0";
// 		document.getElementById("b4").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_7() {
// 	if (flag == 1) {
// 		document.getElementById("b5").value = "X";
// 		document.getElementById("b5").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b5").value = "0";
// 		document.getElementById("b5").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_8() {
// 	if (flag == 1) {
// 		document.getElementById("b6").value = "X";
// 		document.getElementById("b6").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b6").value = "0";
// 		document.getElementById("b6").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_9() {
// 	if (flag == 1) {
// 		document.getElementById("b7").value = "X";
// 		document.getElementById("b7").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b7").value = "0";
// 		document.getElementById("b7").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_10() {
// 	if (flag == 1) {
// 		document.getElementById("b8").value = "X";
// 		document.getElementById("b8").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b8").value = "0";
// 		document.getElementById("b8").disabled = true;
// 		flag = 1;
// 	}
// }

// function func_11() {
// 	if (flag == 1) {
// 		document.getElementById("b9").value = "X";
// 		document.getElementById("b9").disabled = true;
// 		flag = 0;
// 	}
// 	else {
// 		document.getElementById("b9").value = "0";
// 		document.getElementById("b9").disabled = true;
// 		flag = 1;
// 	}
// }
window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});