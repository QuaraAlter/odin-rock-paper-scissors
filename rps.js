var computerPick = '';
var playerPick = '';
const button = document.querySelector('button');
button.addEventListener('click', playerPlay)

function computerPlay()
{
    let n = Math.floor(Math.random()*3);
    switch(n)
    {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function playerPlay ()
{
    playerPick = document.getElementById("player").value;
    if (playerPick.toLowerCase() != `rock` && playerPick.toLowerCase() != `paper` && playerPick.toLowerCase() != `scissors`)   {
        document.getElementById("error").innerHTML = 'Please pick a valid move';
        return 0;
    }
    document.getElementById("player-pick").innerHTML = playerPick.toLowerCase();
    computerPick = computerPlay();
    document.getElementById("computer-pick").innerHTML = computerPick;
}




