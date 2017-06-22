$(document).ready(function(){
	// next 
	$("#p-one").next().css({border: "2px solid blue"});
});
// previous
$(document).ready(function(){
	$("#p-two").prev().css({border: "10px solid black"});
});
// ready
$(document).ready(function(){
	$("#p-three").parent().css({border: "2px solid yellow"});
});
// children
$(document).ready(function(){
	$("#p-four").children().css("font-style", "italic"); 
});
	// put () after children/parent/prev because we are calling a function

$(document).ready(function(){
	$("#find").find("#facebook").css("background-color", "yellow"); 
	$("#twitter-button").closest("ul").css("background-color", "yellow");
});
$(document).ready(function(){
	$("#facebook-button").closest("button").css("background-color", "green")
})