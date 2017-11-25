$(document).ready(function(){
	// Attaches a click event to all the imgs tags when the document is ready.
	$('img').click(function(){
		$(this).css('visibility','hidden');
	});

	$('#js-show').click(function(){
     	$('.js-add-show').css('visibility','visible');
     });


});	