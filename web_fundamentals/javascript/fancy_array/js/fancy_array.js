function fancyArray(array,symbol,reversed){
	'use strict;'
	/* Prints array in a "fancy" way in order or reversed.  If user provides symbol that symbol is used
	   otherwise, the default is used.  We use the symbol to separate the index and 
	   contents of the array at index.

	   Argurments: array, symbol and reversed setting set to true or false.
	*/

	if ( typeof symbol === "undefined" ) {
		symbol = "->";

	}

	if ( reversed === "true" ) {
		for (var i = array.length-1; i >= 0; i--){
			console.log(i,symbol,array[i]);

		}
	}else{
		for (var i = 0; i < array.length; i++ )
			console.log(i,symbol,array[i]);
	}
}

arr=['Jdoe','Hema','Luis','James','John','George'];
symbol="*";
reversed="false";
fancyArray(arr, symbol, reversed);

console.log("Calling function with reversed set to true!")
reversed="true";
fancyArray(arr, symbol, reversed);