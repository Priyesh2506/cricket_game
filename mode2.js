var tossresult = sessionStorage.getItem("tossResult");
document.getElementById("toss2").innerHTML = tossresult + " ";
var p1name = sessionStorage.getItem("p1Name");
var p2name = sessionStorage.getItem("p2Name");
var whowon = sessionStorage.getItem("whoWon");
//document.getElementById("p1").innerHTML = whowon;
let x = whowon.localeCompare(p1name);
//console.log(x);
let y = whowon.localeCompare(p2name);
//console.log(y);
if (parseInt(x) == 0) {
  //alert(p1name);
  document.getElementById("p1").innerHTML = p1name;
  document.getElementById("p2").innerHTML = p2name;
} else if (parseInt(y) == 0) {
  //alert(p2name);
  document.getElementById("p1").innerHTML = p1name;
  document.getElementById("p2").innerHTML = p2name;
  document.getElementById("head2").innerHTML = "Bowl";
  document.getElementById("tail2").innerHTML = "Bat";
}
// var comchoose = sessionStorage.getItem("comChoose");
// if (parseInt(comchoose) == 1) {
//   //alert(comchoose);
//   document.getElementById("head2").innerHTML =
//     "Computer choose to Bat\n!!Play Now!!";
// } else {
//   //alert(comchoose);
//   document.getElementById("tail2").innerHTML =
//     "Computer choose to Bowl\n!!Play Now!!";
// }
function toss2() {
  var playername = document.getElementById("p1").innerHTML;
  sessionStorage.setItem("playerName", playername);
  var playername2 = document.getElementById("p2").innerHTML;
  sessionStorage.setItem("playerName2", playername2);
}