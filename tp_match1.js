//Single Player Mode
var playername = sessionStorage.getItem("playerName");
document.getElementById("p1_bat").innerHTML = playername + " Batting";
document.getElementById("player1").innerHTML = playername + " Batting";
document.getElementById("src").innerHTML = playername + " Scored";
function session() {
    var targetscore= document.getElementById("text4").innerHTML;
    sessionStorage.setItem("targetScore", targetscore);
    var totalballs = document.getElementById("balls").innerHTML;
    sessionStorage.setItem("totalBalls", totalballs);
}
//Player 1 Batting in Single Player
function scored2() {
    var playername2 = sessionStorage.getItem("playerName2");
    document.getElementById("computer1").innerHTML= playername2 + "Bowling";
    // function getRandom(array){
    //     const index= Math.floor(Math.random() * array.length);
    //     const item=array[index];
    //     return item;
    // }
    // const array=[1,2,3,4,5,6];
    let a = document.getElementById("text5").value;
    let b = document.getElementById("computer1").innerHTML;
    let m = document.getElementById("text6").value;
    if(parseInt(a)>6){
        alert("WRONG!!!\nYou can not hit more than 6.\n Your Score will be considered as 0 for this ball.")
        a= 0;
    }
    document.getElementById("computer1").innerHTML = playername2+ " Bowling.......";
    setTimeout(function(){
    //let f= getRandom(array);
    document.getElementById("score2").innerHTML = playername+ " Scored: " + a;
    b = playername2+ " Bowled " + m;
    document.getElementById("computer1").innerHTML = b;
    let d = document.getElementById("text4").innerHTML;
    var flag = 0;
    if (parseInt(a) == parseInt(m)) {
        flag = 1;
    } 
    else {
        document.getElementById("score3").innerHTML = playername+" have Scored " + a;
        d = parseInt(d) + parseInt(a);
        document.getElementById("text4").innerHTML = d;
    }
    let e = document.getElementById("balls").innerHTML;
  e = parseInt(e) - 1;
  document.getElementById("balls").innerHTML = e;
  if(e<1){
      alert("STOP!!\n"+playername +" have scored " + d);
      var c = document.getElementById("score3").innerHTML;
      c = (parseInt(d) + 1) + "is the Target to Win!";
      document.getElementById("score3").innerHTML = c;
  }
  else if (flag == 1) {
    alert(playername+ " are OUT!!\n"+playername+" have scored " + d + "\nTarget is "+ (parseInt(d)+1) + " in 6 balls.");
    document.getElementById("score3").innerHTML =
      "OUT!!!";}
  }, 2000)
}

