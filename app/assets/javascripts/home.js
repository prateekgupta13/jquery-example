$(document).ready(function(){
	// alert("hello");
	$('.block').click(function(){
		// alert("hello");
		$('.block').css('background-color','blue');
		$('.block').css('height','100px');
		$('.block').css('width','200px');



	});	

	$('.hide').click(function(){
		// alert("hello");
		$('.block').css('display','none');
		// $('.block').css('height','100px');
		// $('.block').css('width','200px');
	});

	$('.show').click(function(){
		// alert("hello");
		$('.block').css('display','block');
		// $('.block').css('height','100px');
		// $('.block').css('width','200px');
	});

	$('.hide-jquery-function').click(function(){
		// alert("hello");
		$('.block').hide();
		// $('.block').css('height','100px');
		// $('.block').css('width','200px');
	});

	$('.show-jquery-function').click(function(){
		// alert("hello");
		$('.block').show();
		// $('.block').css('height','100px');
		// $('.block').css('width','200px');
	});

	// $('.toggle').click(function(){
	// 	// alert("hello");
	// 	$('.block').toggle("slow",funtion(){});
	// 	// $('.block').css('height','100px');
	// 	// $('.block').css('width','200px');
	// });

	$('.toggle').click(function() {
  	$('.block').toggle('slow', function() {
    // Animation complete.
    $('.animation-complete').show();
  });
});





});