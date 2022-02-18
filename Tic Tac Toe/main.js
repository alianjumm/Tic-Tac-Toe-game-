//Asign players as objects within a players variable 
const players = {
    playerX: {
    input: "X",
    turn: true,
},

    playerO: {
    input: "O",
    turn: false,
}}

//Define gameboard and the empty values that the game will be using
//Assign array to gameBoard  

// let gameBoard = {
//     board : [
//     ["_", "_", "_",],
//     ["_", "_", "_",],
//     ["_", "_", "_",],
// ]}

const cells = document.querySelectorAll(".cell")
const table = document.querySelector("table")
const reset = document.getElementById("reset")
const sq0 = document.getElementById('sq0')
const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const statusEl = document.getElementById('status')

const winningCombos = [
 [sq0, sq1, sq2],
 [sq3, sq4, sq5],
 [sq6, sq7, sq8],
 [sq0, sq3, sq6],
 [sq1, sq4, sq7],
 [sq2, sq5, sq8],
 [sq0, sq4, sq8],
 [sq6, sq4, sq2],  
]

reset.addEventListener("click", resetButton)
table.addEventListener("click", playerMove) 

function resetButton(){
    cells.forEach(function(cell){
        cell.innerText = ""
        
    })
    players.playerX.turn = true;
    players.playerO.turn = false;
    statusEl.innerText = "Player X's turn"

//     alert("Game has been reset!")

}

function playerMove(event){
    console.log(event)
    let clickedCell = event.target
    console.log(clickedCell.innerText)
    if (clickedCell.innerText !== '') return;
    if (players.playerX.turn){
    clickedCell.innerText = players.playerX.input
        let winner = checkWinner(players.playerX.input)
        if (winner){
            if (winner === 'Tie'){
                statusEl.innerText = `Players Tied!`
            } else {
            statusEl.innerText = `Player ${winner} wins`
        }
        return
        }  
    players.playerO.turn = true
    players.playerX.turn = false
    statusEl.innerText = "Player O's turn"
    } else {     
        clickedCell.innerText = players.playerO.input
        let winner = checkWinner(players.playerO.input)
        if (winner){
            if (winner === 'Tie'){
                statusEl.innerText = `Players Tied!`
            } else {
            statusEl.innerText = `Player ${winner} wins`
        } 
        return
        } 
        players.playerO.turn = false
        players.playerX.turn = true
        statusEl.innerText = "Player X's turn"
    }   
}

function checkWinner(player){
    console.log(player)
    let count = 0
    let winner = ''
    for (let cell of cells){
        if (cell.innerText !== ''){
            count ++
        }
    }
    
    for (let i=0; i < winningCombos.length; i++){
        if ((winningCombos[i][0].innerText === player) && 
        (winningCombos[i][1].innerText === player) && 
        (winningCombos[i][2].innerText === player)) {
            console.log(player)
            winner = player
            return player
        }

    } if (count === 9 && !winner) {
     statusEl.innerText = 'All cells are Filled!' 
     return 'Tie'
    } 
    return false
}   




//Fetch all of the values 
// const getBoard = function(){
//     return gameBoard.board
// }

// let options = gameBoard.board[""]
//     function choice(options)
//     if 

// checkWinner( players.playerX.turn);
// checkWinner( players.playerO.turn);

// function checkWinner(player1){
//     for( let row=0; row < 3; row++){
//         if( )
// }

// print = function(){
// this.board.forEach(function(row){
//     row = console.log()
// }
// console.log("_____")



// function resetBoard(){

// }

// function cellClicked (event){
//     console.log(even.target.id);
//     let
// }

// const cells = document.querySelectorAll("#class")
// const resetButton = document.querySelector("#reset")

// resetButton.addEventListener("click", reset)
// function reset {
//     cells.forEach(function(cell) {
//         cells.innerText = ""
//     });
// };

// cells.addEventListener("click", choice)
// function choice{

// const row 

// }

// )
