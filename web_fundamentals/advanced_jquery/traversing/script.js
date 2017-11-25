$(document).ready(function(){
	$('h3, p').click(function(){
			// $(this).parent().append('<h2>HOWDY CODING DOJO!</h2>');
			$(this).siblings('p').hide();
	});

	// $('#myDiv').children().css('background-color', 'green');
	// $('#myDiv').children('h3').css('background-color', 'green');

})