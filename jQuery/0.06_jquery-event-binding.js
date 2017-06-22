$(document).ready(function(){
	// binding an event with on
	// sysntax is $(ref).on(eventName, function)
	$("#on li").on("click", function(){
		$(this).hide();
	});

	// $("#off li").on("click", function(){
	// 	$(this).hide();
	// 	$("#off li").off("click");
	// })

	$("#off li").click(function(){
		$(this).hide();
		$("#off li").off("click");
	});
});

