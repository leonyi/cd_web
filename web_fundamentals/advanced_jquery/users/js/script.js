$(document).ready(function(){

	$('#add-row').click(function(){
		var name = $("#fname").val();
		var lname = $("#lname").val();
		var email = $("#email").val();
		var contact=$("#phone").val();

		var markup = "<tr><td>" + name + "</td><td>" + lname + "</td><td>" + email + "</td><td>" + contact + "</td></tr>";
		$("table tbody").append(markup);
	});

	 // Find and remove selected table rows
     // $("#delete-row").click(function(){
     //     $("table tbody").find('input[name="record"]').each(function(){
     //         if($(this).is(":checked")){
     //             $(this).parents("tr").remove();
     //         }
     //     });
     // });

});