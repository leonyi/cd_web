$(document).ready(function(){

	// This won't be needed if we use the $(document).on function defined below.
	// That is because that function is listening for clicks that have the class
	// alert and is then firing an alert.
	// $('.alert').click(function(){
	// 	alert('you clicked me!');
	// });

	$('.new_btn').click(function(){
		$('#buttons').append("<button class='alert'>I am a dynamically generated button!</button>");
	});

	$(document).on('click', '.alert', function(){
		alert('you clicked me!');
	});	

});