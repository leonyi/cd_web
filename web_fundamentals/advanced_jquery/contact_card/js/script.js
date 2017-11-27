function resetForm(formid){
	document.getElementById(formid).reset();
}

function attachHandler(){
	// Todo: toggle should work on a per card basis not all of them at once. Fix this!
	$('.cc-btn').on("click", function(){
		$('.toggle').toggleClass('show_text hide_text');
	});

}


$(document).ready(function(){
		$('#add-contact').click(function(){
			var name = $("#fname").val();
			var lname = $("#lname").val();
			var fullname = name + " " + lname;
			var email = $("#email").val();
			var contact=$("#phone").val();
			var description=$("#description").val();

			if ( name === "First Name" || lname === "Last Name"){
				alert('All contacts need a full name!');
				return;
			} 

			var newdiv = '<div class="contact-card"><p class="toggle show_text ccard-front">' + fullname + 
						 '</p><p class="toggle hide_text ccard-back">' + description + 
						 '</p><button class="cc-btn ccard-btn">Click for description!</button></div>';

			// Add new div to body of html			 
			$('#contacts').append(newdiv);
			attachHandler()

		})

	
		$(document).on('click', '.contact-btn ', function(){
				resetForm("form1");
		});
		
})