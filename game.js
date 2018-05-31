function game(hand){
  var opp = Math.floor(Math.random() * Math.floor(3));
  var results = ["Tie", "Win1", "Win2"];
  alert(results[Math.abs(opp - hand)]);
}

/* Opp - hand results
0 - tie
1 - 2-1 or 1-0 = ez win on one side
2 - 2-0
rock = 0, paper = 1, scissors = 2
*/