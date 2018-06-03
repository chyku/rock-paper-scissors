const results = ["tied!", "won!", "lost!"];
const opposition = ["Rock", "Paper", "Scissors"];
var points = 0;

function game(hand){
  var opp = Math.floor(Math.random() * Math.floor(3));
  var result = hand - opp;
  if (result < 0){
  	result += 3;
  }
  if (result == 1){
  	points++;
  	document.getElementById("points").innerHTML = points;
  }
  document.getElementById("opposition").innerHTML =  opposition[opp];
  document.getElementById("result").innerHTML = results[result];
}

/* hand - opp results
0 - tie
1 - 2-1 or 1-0 = ez win on one side
	pos = hand win
2 - 2-0
	pos = opp win
rock = 0, paper = 1, scissors = 2
*/