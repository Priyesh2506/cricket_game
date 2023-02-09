var playername = sessionStorage.getItem("playerName");
document.getElementById("player2").innerHTML = playername;
var playername2 = sessionStorage.getItem("playerName2");
document.getElementById("player1").innerHTML = playername2;
var targetscore = sessionStorage.getItem("targetScore");
document.getElementById("runs1").innerHTML = targetscore;
var totalballs = sessionStorage.getItem("targetBalls");
document.getElementById("balls1").innerHTML = totalballs;
var chasescore = sessionStorage.getItem("chaseScore");
document.getElementById("runs2").innerHTML = chasescore;
var totalballs2 = sessionStorage.getItem("targetBalls2");
document.getElementById("balls2").innerHTML = totalballs2;
if(parseInt(targetscore)>parseInt(chasescore)){
    let x= parseInt(targetscore)-parseInt(chasescore)
    document.getElementById("results").innerHTML = "!! "+playername2 + " won by " + x +" runs!!"
}
else{
    document.getElementById("results").innerHTML = "!! "+playername1 + " won the match!!"
}
