function days_until_bday(n){
	'use strict';

	var days_left = n;
	while ( days_left !== 0 ){
		if ( days_left >= 30 ){
			console.log("Your bday is too far away! You have", days_left, "more to go.");
		}

		if ( days_left < 30 ){
			console.log("Yay! We are getting closer.  You have only", days_left, "to go!" );
		} 

		days_left -= 1;
	}

	console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
	console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
	console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");

}

days_until_bday(5);