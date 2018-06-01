function game(hand){
  var opp = Math.floor(Math.random() * Math.floor(3));
  var results = ["Tie", "Win", "Lose"];
  var opposition = ["Rock", "Paper", "Scissors"];
  var result = hand - opp;
  if (result < 0){
  	result += 3;
  }
  document.getElementById("results").innerHTML = opposition[opp] + " " + results[result];
}

/* hand - opp results
0 - tie
1 - 2-1 or 1-0 = ez win on one side
	pos = hand win
2 - 2-0
	pos = opp win
rock = 0, paper = 1, scissors = 2
*/