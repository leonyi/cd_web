// return false doesn't allow the page to refresh
// .submit works two ways: 1) is a listener 2) used to hard submit.
// .serialize preps forms being handled by a computer.
$(document).ready(function(){
	
	// .submit() as an event listener.
	$('#form1').submit(function(){
		console.log($(this).serialize());
		return false;
	});

	// .submit() as a method to submit a form.
	$('.btn').click(function(){
		$('#form1').submit();
	});

});