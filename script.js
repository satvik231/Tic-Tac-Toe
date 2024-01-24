var flag = true;
var state = [1, 0, 1, 0, 1, 0, 0, 1, 0];
var winner = document.getElementById('winnerBox');

document.getElementsByClassName('board')[0].addEventListener('click', (e) => {
    var eachEl = e.target.id;
    if (flag) {
        if (state[eachEl] == 1 || state[eachEl] == 0) {
            document.getElementById(eachEl).innerText = 'X';
            state[eachEl] = "X";
            checkWinner(flag);
            flag = !flag;
        }
    }
    else {
        if (state[eachEl] == 1 || state[eachEl] == 0) {
            document.getElementById(eachEl).innerText = 'O';
            state[eachEl] = "O";
            checkWinner(flag);
            flag = !flag;
        }
    }
    console.log(state);
})

function checkWinner(flag){
if( state[0]==state[1] && state[1]==state[2])
{
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[3]==state[4] && state[4]==state[5])
{
    // alert("Row-2 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[6]==state[7] && state[7]==state[8])
{
    // alert("Row-3 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[0]==state[3] && state[3]==state[6])
{
    // alert("column-1 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[1]==state[4] && state[4]==state[7])
{
    // alert("column-2 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[2]==state[5] && state[5]==state[8])
{
    // alert("column-3 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[0]==state[4] && state[4]==state[8])
{
    // alert("diagonal-1 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else if( state[2]==state[4] && state[4]==state[6])
{
    // alert("diagonal-1 is winner");
    flag? winner.innerHTML="winner-x" : winner.innerHTML="winner-0"
    setDisabled();
}
else{
    var i;
    var count = 0;
    for(i=0;i<state.length;i++)
    {
        if(state[i]==1 || state[i]==0)
        count++;
    }
    if(count==0)
    {
        alert("its a Draw!")
    }
}

function setDisabled(){
    var i;
    for(i=0;i<state.length;i++)
    {
        if(state[i]==1 || state[i]==0)
        state[i]= null;
    }
}
}
function restartNew(){
    location.reload();
}

function resetNew(){
    for(i=0;i<9;i++){
        document.getElementById(i).innerHTML="";
    }
    state = [1, 0, 1, 0, 1, 0, 0, 1, 0];
    document.getElementById('winnerBox').innerHTML="";
}
function startGame(){
    document.getElementById("login").style.display = "none";
    document.getElementById("game").style.display = "block";

}