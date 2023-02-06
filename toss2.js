var tossresult = sessionStorage.getItem("tossResult");
document.getElementById("toss2").innerHTML = tossresult + " ";
var p1name = sessionStorage.getItem("p1Name");
var p2name = sessionStorage.getItem("p2Name");
var whowon = sessionStorage.getItem("whoWon");
if (whowon.localeCompare(p1name) == 1) {
    document.getElementById("p1").innerHTML = p1name;
    document.getElementById("p2").innerHTML = p2name;
  } else if( whowon.localeCompare(p2name) == 1 ) {
    document.getElementById("p1").innerHTML = p2name;
    document.getElementById("p2").innerHTML = p1name;
  }
function toss2() {
  if (whowon.localeCompare(p1name) == 1) {
    var playername = document.getElementById("p1").innerHTML;
    sessionStorage.setItem("playerName", playername);
    var playername2 = document.getElementById("p2").innerHTML;
    sessionStorage.setItem("playerName2", playername2);
  } else if (whowon.localeCompare(p2name) == 1) {
    var playername2 = document.getElementById("p1").innerHTML;
    sessionStorage.setItem("playerName2", playername2);
    var playername = document.getElementById("p2").innerHTML;
    sessionStorage.setItem("playerName", playername);
  }
}
