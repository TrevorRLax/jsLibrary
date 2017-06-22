// alert('jQuery is working!');

$(function(){
	// by id - this adds a css class
	$('#example-one').addClass('highlight');

	// by class - we'll make two things change here.
	$('.example-two').css('border', '4px solid gray');

	// By element
	$('h5').click(function(){
		$('h5').fadeOut('slow', 'linear');
	});

	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();

	$('li:contains("Do")').click(function(){
		$(this).hide();
	// hides everything with the key word in it when it is clicked 
	})
});