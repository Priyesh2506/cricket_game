//Single Player Mode
var playername2 = sessionStorage.getItem("playerName2");
document.getElementById("p2_bat").innerHTML = playername2 + " Batting";
document.getElementById("player2").innerHTML = playername2 + " Batting";
document.getElementById("src").innerHTML = playername2 + " Scored";
function session() {
  var chasescore = document.getElementById("text4").innerHTML;
  sessionStorage.setItem("chaseScore", chasescore);
  var totalballs2 =document.getElementById("balls").innerHTML;
  sessionStorage.setItem("totalBalls2", totalballs2);
}
var targetscore = sessionStorage.getItem("targetScore");
document.getElementById("run1").innerHTML = parseInt(targetscore) + 1 + " runs";
//Player 2 Batting in Single Player
function scored2() {
  var playername = sessionStorage.getItem("playerName");
  document.getElementById("computer1").innerHTML = playername + "";
  let a = document.getElementById("text5").value;
  let b = document.getElementById("computer1").innerHTML;
  let m = document.getElementById("text6").value;
  if (parseInt(a) > 6 || parseInt(m) > 6) {
    alert(
      "WRONG!!!\nYou can not hit more than 6.\n Your Score will be considered as 0 for this ball."
    );
    a = 0;
  }
  document.getElementById("computer1").innerHTML = playername + " Bowling.......";
  setTimeout(function () {
    //let f = getRandom(array);
    var playername2 = sessionStorage.getItem("playerName2");
    document.getElementById("score2").innerHTML = playername2+" Scored: " + a;
    var playername = sessionStorage.getItem("playerName");
    document.getElementById("computer1").innerHTML = playername + " Bowling.......";
    b = playername + " Bowled " + m;
    document.getElementById("computer1").innerHTML = b;
    let d = document.getElementById("text4").innerHTML;
    var flag = 0;
    let x = document.getElementById("run1").innerHTML;
    if (parseInt(a) == parseInt(m)) {
      flag = 1;
    } else {
      var playername2 = sessionStorage.getItem("playerName2");
      document.getElementById("player2").innerHTML = playername2 + "";
      let l = document.getElementById("player2").innerHTML;
      document.getElementById("score3").innerHTML = l + " has Scored " + a;
      d = parseInt(d) + parseInt(a);
      document.getElementById("text4").innerHTML = d;
    }
    let e = document.getElementById("balls").innerHTML;
    e = parseInt(e) - 1;
    document.getElementById("balls").innerHTML = e;
    if (e < 1 && parseInt(d) < parseInt(x)) {
      var playername = sessionStorage.getItem("playerName");
      document.getElementById("computer1").innerHTML = playername + "";
      let m = document.getElementById("computer1").innerHTML;
      alert(
        m + " WON!!\n You Won By " + (parseInt(x) - parseInt(d) -1) + " runs."
      );
      var c = document.getElementById("score3").innerHTML;
    } else if (flag == 1 && parseInt(d) < parseInt(x)) {
      var playername = sessionStorage.getItem("playerName");
      document.getElementById("computer1").innerHTML = playername + "";
      let m = document.getElementById("computer1").innerHTML;
      alert(
        m +
          " WON!!\n Won the Match By " +
          (parseInt(x) - parseInt(d) -1) +
          " runs."
      );
      document.getElementById("score3").innerHTML = "OUT!!!";
    } else if (parseInt(d) >= parseInt(x)) {
      var playername2 = sessionStorage.getItem("playerName2");
      document.getElementById("player2").innerHTML = playername2 + "";
      let l = document.getElementById("player2").innerHTML;
      alert(l + " WON!!!\n Won the Match. ");
    }
  }, 2000);
}
