$(document).ready(function(){

	$('img').click(function(){
		$(this).attr('src',$(this).attr('data-alt-src'));
	});

	$('#js-reset').click(function(){
		document.location.reload(true);

	});

});