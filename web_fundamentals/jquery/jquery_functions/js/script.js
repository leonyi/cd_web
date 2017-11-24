$(document).ready(function(){

    $('#js-addclass').click(function(){
        $('#js-add-red').addClass('red-highlight');
    });

    $('#js-after').click(function(){
    	$('#js-add-after').after("<p>CodingDojo Rocks!</p>");
    });

    $('#js-append').click(function(){
   		$('#js-add-append').append("<li>Appendend item</li>");
    });

    $('#js-attr').click(function(){
   		$('#js-add-attr').attr({"width":"250", "height": "250"});
    });

    $('#js-before').click(function(){
    	$('#js-add-before').before("<p>I am a JS Ninja!</p>");

    });

    $('#js-click').click(function(){
    	alert("Thanks for clicking the button!");
    });

    $('#js-data1').click(function(){
    	$('#js-add-data1').data("greeting", "Thank you for visiting!");
    });

    $('#js-data2').click(function(){
    	alert($('#js-add-data1').data("greeting"));
    });

   	$('#js-fadeout').click(function(){
    	$('#js-fadeinandout').fadeOut();
    });

    $('#js-fadein').click(function(){
     	$('#js-fadeinandout').fadeIn();
    });

    $('#js-hide').click(function(){
    	$('#js-hideandshow').hide();
    });

    $('#js-show').click(function(){
     	$('#js-hideandshow').show();
     });

    $('#js-html').click(function(){
     	$('#js-add-html').html("<i>Hello <b>world!</b></i>");
     });

    $('#js-slideup').click(function(){
    	$('#js-add-slideupdown').slideUp();
    });

    $('#js-slidedown').click(function(){
    	$('#js-add-slideupdown').slideDown();
    });

    $('#js-slidetoggle').click(function(){
    	$('#js-add-slidetoggle').slideToggle();
    });

    $('#js-text').click(function(){
    	$('.js-add-text').text("Hello World!!");
    });

    $('#js-toggle').click(function(){
    	$('#js-add-toggle').toggle();
    });

    $('#js-val').click(function(){
    	$('input:text').val("User Name");
    });

});
