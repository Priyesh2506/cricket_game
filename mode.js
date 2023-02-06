function single_player() {
  var p1name = document.getElementById("text1").value;
  sessionStorage.setItem("p1Name", p1name);
  var p2name = "Computer";
  sessionStorage.setItem("p2Name", p2name);
}
//Two Player
function players() {
  var p1name = document.getElementById("text2").value;
  sessionStorage.setItem("p1Name", p1name);
  var p2name = document.getElementById("text3").value;
  sessionStorage.setItem("p2Name", p2name);
}

// document.getElementById("p1").innerHTML = whowon;
var tossresult = sessionStorage.getItem("tossResult");
document.getElementById("toss2").innerHTML = tossresult + " ";
var p1name = sessionStorage.getItem("p1Name");
var p2name = sessionStorage.getItem("p2Name");
var whowon = sessionStorage.getItem("whoWon");
//document.getElementById("p1").innerHTML = whowon;
let x = whowon.localeCompare(p1name);
console.log(x);
let y = whowon.localeCompare(p2name);
console.log(y);
if (parseInt(x) == 0) {
    //alert(p1name);
  document.getElementById("p1").innerHTML = p1name;
  document.getElementById("p2").innerHTML = p2name;
} else if (parseInt(y)== 0) {
    //alert(p2name);
  document.getElementById("p1").innerHTML = p2name;
  document.getElementById("p2").innerHTML = p1name;
}
function toss2() {
  if (whowon.localeCompare(p1name) === 0) {
    var playername = document.getElementById("p1").innerHTML;
    sessionStorage.setItem("playerName", playername);
    var playername2 = document.getElementById("p2").innerHTML;
    sessionStorage.setItem("playerName2", playername2);
  } else if (whowon.localeCompare(p2name) === 0) {
    var playername2 = document.getElementById("p1").innerHTML;
    sessionStorage.setItem("playerName2", playername2);
    var playername = document.getElementById("p2").innerHTML;
    sessionStorage.setItem("playerName", playername);
  }
}
