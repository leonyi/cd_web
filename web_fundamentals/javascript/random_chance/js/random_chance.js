function randomChance(quarters){

	//Setting the min and maximum number of quarters to win.
	min = Math.ceil(50);
	max = Math.floor(100);

	//The maximum is inclusive and the minimum is inclusive
	number_of_games = quarters;

	console.log("Initial number of games is:", number_of_games);

	while ( number_of_games > 0 ){
		quarters_won = Math.floor(Math.random() * (max - min + 1)) + min;  

		if ( quarters_won > 0 ){
			quarters_earned quarters_won + number_of_games;
		} else {

		}

		number_of_games--;
	}



}

var won=0;
won = randomChance(3);
console.log("You won", won, "quarters!")