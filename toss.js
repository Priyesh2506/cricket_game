var p1name = sessionStorage.getItem("p1Name");
document.getElementById("toss1").innerHTML = p1name;
var p2name = sessionStorage.getItem("p2Name");
document.getElementById("player2").innerHTML = p2name;
var a = document.getElementById("toss1").innerHTML;
var b = document.getElementById("player2").innerHTML;
function tossed1() {
  function getRandom(array) {
    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    return item;
  }
  const array = [1, 2];
  let f = getRandom(array);
  var x = 1;
  if (parseInt(f) == parseInt(x)) {
    var name = document.getElementById("who").innerHTML;
    name = a + "";
    document.getElementById("who").innerHTML = name;
    var d = document.getElementById("choose").innerHTML;
    d = " Won the Toss!";
    document.getElementById("choose").innerHTML = d;
    // document.getElementById("playing").innerHTML = a+ "choose to Bowl!";
  } else {
    var name = document.getElementById("who").innerHTML;
    name = b + "";
    document.getElementById("who").innerHTML = name;
    var d = document.getElementById("choose").innerHTML;
    d = " Won the Toss!";
    document.getElementById("choose").innerHTML = d;
    // document.getElementById("playing").innerHTML = b+ "choose to Bat!";
  }
}
function tossed2() {
  function getRandom(array) {
    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    return item;
  }
  const array = [1, 2];
  let f = getRandom(array);
  var y = 2;
  if (parseInt(f) != parseInt(y)) {
    var name = document.getElementById("who").innerHTML;
    name = b + "";
    document.getElementById("who").innerHTML = name;
    var d = document.getElementById("choose").innerHTML;
    d = " Won the Toss!\n";
    document.getElementById("choose").innerHTML = d;
    // document.getElementById("playing").innerHTML = a+ "choose to Bat!";
  } else {
    var name = document.getElementById("who").innerHTML;
    name = a + "";
    document.getElementById("who").innerHTML = name;
    var d = document.getElementById("choose").innerHTML;
    d = " Won the Toss!";
    document.getElementById("choose").innerHTML = d;
    // document.getElementById("playing").innerHTML = b+ "choose to Bowl!";
  }
}
function toss_mode() {
  //var a = document.getElementById("player2").innerHTML;
  var tossresult=document.getElementById("who").innerHTML + document.getElementById("choose").innerHTML;
  sessionStorage.setItem("tossResult", tossresult);
  var whowon = document.getElementById("who").innerHTML;
  sessionStorage.setItem("whoWon", whowon);
  // function getRandom(array) {
  //   const index = Math.floor(Math.random() * array.length);
  //   const item = array[index];
  //   return item;
  // }
  // const array = [1, 2];
  // let match = a.localeCompare(whowon);
  // if(parseInt(match) == 0){
  //   alert(match);
  //   let f = getRandom(array);
  //   if(parseInt(f)==1){
  //     var comchoose = 1;
  //     sessionStorage.setItem("comChoose", comchoose);
  //   }
  //   else{
  //     var comchoose = 2;
  //     sessionStorage.setItem("comChoose", comchoose);
  //   }
  // }
}
