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
function scored() {
  var playername2 = sessionStorage.getItem("playerName2");
  document.getElementById("computer1").innerHTML = playername2 + "";
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
    if (parseInt(a) == parseInt(f)) {
      flag = 1;
    } else {
      document.getElementById("score3").innerHTML = playername2 + " has Scored " + f;
      d = parseInt(d) + parseInt(f);
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
  }, 1000);
}
