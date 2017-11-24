$(document).ready(function(){
	// Declaring the selector for all h4 tags.  When you click on them "alert" hello.
	// Within the function goes the code that makes the site interactive.
	$('h4').click(function(){
		alert('hello');
	});

	//Writing an action for a listener
	$('button').click(function(){
		alert("You have clicked a button!");
		$('#myParagraph').text('see how .text() works as a setter!');
	});

	$('button.toggle-buttons').click(function(){
		$( "p" ).slideToggle("slow");
	});

});