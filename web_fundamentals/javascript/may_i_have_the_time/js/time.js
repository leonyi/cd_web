function what_time_is_it(hour, minute, period){
	'use strict';

	var hour = hour;
	var next_hour = hour + 1;
	var minute = minute;
	var period = period;

	if ( minute >= 30 && (period === "AM" || period === "am") ) {
		console.log("It's almost", hour, "in the morning.")
	} else if ( minute >= 30 && ( period === "PM" || period === "pm" ) ){
		console.log("It's almost", hour, "in the afternoon.")
	} else if ( minute <= 30  && (period === "AM" || period === "am") ) {
		console.log("It's just after", hour, "in the morning.")
	} else if ( minute <= 30  && (period === "PM" || period === "pm") ) {
		console.log("It's just after", hour, "in the afternoon.")
	} else {
		console.log("Invalid period of time!")

	}


}

what_time_is_it(8, 50, "am")
what_time_is_it(7, 15, "pm")
what_time_is_it(7, 15, "z")