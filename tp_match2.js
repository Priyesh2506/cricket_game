//Single Player Mode
var playername = sessionStorage.getItem("playerName");
document.getElementById("p1_bat").innerHTML = playername + " Bowling";
document.getElementById("player1").innerHTML = playername + " Bowling";
document.getElementById("src").innerHTML = playername + " Bowled";
function session() {
  var targetscore = document.getElementById("text4").innerHTML;
  sessionStorage.setItem("targetScore", targetscore);
  var totalballs = document.getElementById("balls").innerHTML;
  sessionStorage.setItem("totalBalls", totalballs);
}
//Player 1 Batting in Single Player
function scored2() {
  var playername2 = sessionStorage.getItem("playerName2");
  document.getElementById("computer1").innerHTML = playername2 + "";
  let a = document.getElementById("text5").value;
  let b = document.getElementById("computer1").innerHTML;
  let m = document.getElementById("text6").value;
  if (parseInt(a) > 6 || parseInt(m) > 6) {
    alert(
      "WRONG!!!\nYou can not hit more than 6.\n Your Score will be considered as 0 for this ball."
    );
    m = 0;
  }
  document.getElementById("computer1").innerHTML = playername2 + " Batting.......";
  setTimeout(function () {
    //let f = getRandom(array);
    var playername2 = sessionStorage.getItem("playerName2");
    var playername = sessionStorage.getItem("playerName");
    document.getElementById("score2").innerHTML = playername+" Bowled: " + a;
    b = playername2 + " Scores " + m;
    document.getElementById("computer1").innerHTML = b;
    let d = document.getElementById("text4").innerHTML;
    var flag = 0;
    if (parseInt(a) == parseInt(m)) {
      flag = 1;
    } else {
      document.getElementById("score3").innerHTML = playername2 + " has Scored " + m;
      d = parseInt(d) + parseInt(m);
      document.getElementById("text4").innerHTML = d;
    }
    let e = document.getElementById("balls").innerHTML;
    e = parseInt(e) - 1;
    document.getElementById("balls").innerHTML = e;
    if (e < 1) {
      alert("STOP!!\n" + playername2 + " have scored " + d);
      var c = document.getElementById("score3").innerHTML;
      c = parseInt(d) + 1 + "is the Target to Win!";
      document.getElementById("score3").innerHTML = c;
    } else if (flag == 1) {
      alert(
        "OUT!!\n" +
        playername2 +
          " have scored " +
          d +
          "\nTarget is " +
          (parseInt(d) + 1) +
          " in 6 balls."
      );
      document.getElementById("score3").innerHTML = "OUT!!!";
    }
  }, 2000);
}
