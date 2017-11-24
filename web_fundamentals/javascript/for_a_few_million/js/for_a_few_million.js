function aFewMillion(days){
	/* Calculates the amount of pennies that would be earned in the number of days provided
	   as arguments to the function.  The amount of pennies doubles each day.  For example,
		day 1: 1 penny
		day 2: 2 pennies
		day 3: 4 pennies
		day 4: 8 pennies
		day 5: 16 pennies 
		...
		... and so on. 

		Args: number
	*/

	// Initial settings for our variables 
	var pennies_today = 0.01;
		sum_of_pennies = 0;

	for ( var d = 1; d <= days ; d++){
		if ( d == 1 ){
			pennies_today = 0.01;
			sum_of_pennies = pennies_today;

		} else {
			pennies_today = pennies_today * 2;
			sum_of_pennies += pennies_today;
		}

		console.log("day:", d, "pennies today:", pennies_today, "sum_of_pennies", sum_of_pennies);


	}

// Calling the function with a value of 31 days.
aFewMillion(31);
