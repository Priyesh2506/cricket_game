var tossresult = sessionStorage.getItem("tossResult");
document.getElementById("toss2").innerHTML = tossresult + " ";
var p1name = sessionStorage.getItem("p1Name");
var p2name = sessionStorage.getItem("p2Name");
var whowon = sessionStorage.getItem("whoWon");
let x = whowon.localeCompare(p1name);
let y = whowon.localeCompare(p2name);
if (parseInt(whowon.localeCompare(p1name)) == 0) {
    document.getElementById("p1").innerHTML = p1name;
    document.getElementById("p2").innerHTML = p2name;
  } else if( parseInt(whowon.localeCompare(p2name)) == 0 ) {
    document.getElementById("p1").innerHTML = p2name;
    document.getElementById("p2").innerHTML = p1name;
  }
function toss2() {
  if (parseInt(whowon.localeCompare(p1name)) == 0) {
    var playername = document.getElementById("p1").innerHTML;
    sessionStorage.setItem("playerName", playername);
    var playername2 = document.getElementById("p2").innerHTML;
    sessionStorage.setItem("playerName2", playername2);
  } else if (parseInt(whowon.localeCompare(p2name)) == 0) {
    var playername2 = document.getElementById("p1").innerHTML;
    sessionStorage.setItem("playerName2", playername2);
    var playername = document.getElementById("p2").innerHTML;
    sessionStorage.setItem("playerName", playername);
  }
}
