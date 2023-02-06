//Single Player Mode
var playername2 = sessionStorage.getItem("playerName2");
document.getElementById("p2_bat").innerHTML = playername2 + " Batting";
document.getElementById("player2").innerHTML = playername2 + " Batting";
function session() {
  var targetscore = document.getElementById("text4").innerHTML;
  sessionStorage.setItem("targetScore", targetscore);
}
var targetscore = sessionStorage.getItem("targetScore");
document.getElementById("run1").innerHTML = parseInt(targetscore) + 1 + " runs";
//Player 2 Batting in Single Player
function scored() {
  var playername = sessionStorage.getItem("playerName");
  document.getElementById("computer1").innerHTML = playername + "";
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
  document.getElementById("score2").innerHTML = "You Scored: " + a;
  document.getElementById("computer1").innerHTML = b + " Bowling.......";
  setTimeout(function () {
    let f = getRandom(array);
    b = b + " Bowled " + f;
    document.getElementById("computer1").innerHTML = b;
    let d = document.getElementById("text4").innerHTML;
    var flag = 0;
    let x = document.getElementById("run1").innerHTML;
    if (parseInt(a) == parseInt(f)) {
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
        m + " WON!!\n You Won By " + (parseInt(x) - parseInt(d)) + " runs."
      );
      var c = document.getElementById("score3").innerHTML;
    } else if (flag == 1 && parseInt(d) < parseInt(x)) {
      var playername = sessionStorage.getItem("playerName");
      document.getElementById("computer1").innerHTML = playername + "";
      let m = document.getElementById("computer1").innerHTML;
      alert(
        m +
          " WON!!\n Won the Match By " +
          (parseInt(x) - parseInt(d)) +
          " runs."
      );
      document.getElementById("score3").innerHTML = "OUT!!!";
    } else if (parseInt(d) >= parseInt(x)) {
      var playername2 = sessionStorage.getItem("playerName2");
      document.getElementById("player2").innerHTML = playername2 + "";
      let l = document.getElementById("player2").innerHTML;
      alert(l + " WON!!!\n Won the Match. ");
    }
  }, 1000);
}
