$(document).ready(function(){
	// content to be added
	var content = "<p style='color: red'>You can add me anywhere in the DOM using different jQuery method!</p>";
	var content2 = "You can ad me anywhere in the DOM using different jQuery methods!";

	// 
	$("#append-example").append(content);

	// prepend 
	$("#prepend-example").prepend(content);

	// Before 
	$("#before-example").before(content);

	// After
	$("#after-example").after(content);

	// HTML
	$("#html-example").html(content);

	// Text 
	$("#text-example").text(content2);

});