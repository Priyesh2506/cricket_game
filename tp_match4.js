//Single Player Mode
var playername2 = sessionStorage.getItem("playerName2");
document.getElementById("p2_bat").innerHTML = playername2 + " Bowling";
document.getElementById("player2").innerHTML = playername2 + " Bowling";
document.getElementById("src").innerHTML = playername2 + " Bowled";
function session() {
  var chasescore = document.getElementById("text4").innerHTML;
  sessionStorage.setItem("chaseScore", chasescore);
  var totalballs2 = document.getElementById("balls").innerHTML;
  sessionStorage.setItem("totalBalls2", totalballs2);
}
var targetscore = sessionStorage.getItem("targetScore");
document.getElementById("run1").innerHTML = parseInt(targetscore) + 1 + " runs";
//Player 2 Batting in Single Player
function scored2() {
  var playername = sessionStorage.getItem("playerName");
  document.getElementById("computer1").innerHTML = playername;
  let a = document.getElementById("text5").value;
  let b = document.getElementById("computer1").innerHTML;
  let m = document.getElementById("text6").value;
  if (parseInt(a) > 6) {
    alert(
      "WRONG!!!\nYou can not hit more than 6.\n Your Score will be considered as 0 for this ball."
    );
    m = 0;
  }
  document.getElementById("computer1").innerHTML = playername + " Batting.......";
  setTimeout(function () {
    //let f = getRandom(array);
    var playername = sessionStorage.getItem("playerName");
    var playername2 = sessionStorage.getItem("playerName2");
    document.getElementById("score2").innerHTML = playername2+" Bowled: " + a;
    b = playername + " Scores " + m;
    document.getElementById("computer1").innerHTML = b;
    let d = document.getElementById("text4").innerHTML;
    var flag = 0;
    let x = document.getElementById("run1").innerHTML;
    if (parseInt(a) == parseInt(m)) {
      flag = 1;
    } else {
    //   var playername = sessionStorage.getItem("playerName");
    //   document.getElementById("computer1").innerHTML = playername;
    //   let l = document.getElementById("computer1").innerHTML;
      document.getElementById("score3").innerHTML = playername + " has Scored " + m;
      d = parseInt(d) + parseInt(m);
      document.getElementById("text4").innerHTML = d;
    }
    let e = document.getElementById("balls").innerHTML;
    e = parseInt(e) - 1;
    document.getElementById("balls").innerHTML = e;
    if (e < 1 && parseInt(d) < parseInt(x)) {
      alert(
        playername2 + " WON!!\n You Won By " + (parseInt(x) - parseInt(d) -1) + " runs."
      );
      var c = document.getElementById("score3").innerHTML;
    } else if (flag == 1 && parseInt(d) < parseInt(x)) {
      alert(
        playername2 +
          " WON!!\n Won the Match By " +
          (parseInt(x) - parseInt(d) -1) +
          " runs."
      );
      document.getElementById("score3").innerHTML = "OUT!!!";
    } else if (parseInt(d) > parseInt(x)) {
    //   var playername = sessionStorage.getItem("playerName");
    //   document.getElementById("computer1").innerHTML = playername + "";
    //   let m = document.getElementById("computer1").innerHTML;
      alert(playername + " WON!!!\n Won the Match. ");
    }
  }, 2000);
}
