// first and last 
$(document).ready(function(){
	//First and last
	$("#example-one li:first").css({border:"2px solid blue"});
	$("#example-one li:last").css({border:"2px solid red"});
});
// odds and evens 
$(document).ready(function(){
	//First and last
	$("#example-two li:odd").css("background-color", "#AAA"); //#AAA = #AAAAAA
	$("#example-two li:even").css("background-color", "#0F0");
	// javascript always starts counting at 0, technically for this case 0 is even

	// Not
// target all of the li's of example-three except for list-item-three
$("#example-three li:not('#list-item-three')").css({border: "2px solid yellow"});


// less than or greater than
$("#example-four li:lt(5)").css("background-color", "yellow");
$("#example-four li:gt(2)").css("border", "2px solid red");

});

