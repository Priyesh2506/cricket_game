//Single Player Mode
var playername = sessionStorage.getItem("playerName");
document.getElementById("p2_bat").innerHTML = playername + " Bowling";
document.getElementById("player2").innerHTML = playername + " Bowling";
document.getElementById("src").innerHTML = playername + " Bowled";
function session() {
  var chasescore = document.getElementById("text4").innerHTML;
  sessionStorage.setItem("chaseScore", chasescore);
  var totalballs2 = document.getElementById("balls").innerHTML;
  sessionStorage.setItem("totalBalls2", totalballs2);
}
var targetscore = sessionStorage.getItem("targetScore");
document.getElementById("run1").innerHTML = parseInt(targetscore) + 1 + " runs";
//Player 2 Batting in Single Player
function scored() {
  var playername2 = sessionStorage.getItem("playerName2");
  document.getElementById("computer1").innerHTML = playername2;
  function getRandom(array) {
    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    return item;
  }
  const array = [1, 2, 3, 4, 5, 6];
  let a = document.getElementById("text5").value;
  let b = document.getElementById("computer1").innerHTML;
  if (parseInt(a) > 6) {
    alert(
      "WRONG!!!\nYou can not hit more than 6.\n Your Score will be considered as 0 for this ball."
    );
    a = 0;
  }
  document.getElementById("score2").innerHTML = "You Bowled: " + a;
  document.getElementById("computer1").innerHTML = b + " Batting.......";
  setTimeout(function () {
    let f = getRandom(array);
    b = b + " Scores " + f;
    document.getElementById("computer1").innerHTML = b;
    let d = document.getElementById("text4").innerHTML;
    var flag = 0;
    let x = document.getElementById("run1").innerHTML;
    if (parseInt(a) == parseInt(f)) {
      flag = 1;
    } else {
      var playername2 = sessionStorage.getItem("playerName2");
      document.getElementById("computer1").innerHTML = playername2;
      let l = document.getElementById("computer1").innerHTML;
      document.getElementById("score3").innerHTML = l + " has Scored " + f;
      d = parseInt(d) + parseInt(f);
      document.getElementById("text4").innerHTML = d;
    }
    let e = document.getElementById("balls").innerHTML;
    e = parseInt(e) - 1;
    document.getElementById("balls").innerHTML = e;
    if (e < 1 && parseInt(d) < parseInt(x)) {
      alert(
        playername + " WON!!\n You Won By " + (parseInt(x) - parseInt(d) -1) + " runs."
      );
      var c = document.getElementById("score3").innerHTML;
    } else if (flag == 1 && parseInt(d) < parseInt(x)) {
      alert(
        playername +
          " WON!!\n Won the Match By " +
          (parseInt(x) - parseInt(d) -1) +
          " runs."
      );
      document.getElementById("score3").innerHTML = "OUT!!!";
    } else if (parseInt(d) >= parseInt(x)) {
      var playername2 = sessionStorage.getItem("playerName2");
      document.getElementById("computer1").innerHTML = playername2 + "";
      let m = document.getElementById("computer1").innerHTML;
      alert(m + " WON!!!\n Won the Match. ");
    }
  }, 2000);
}
