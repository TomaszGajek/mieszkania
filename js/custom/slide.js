$(document).ready(function(){

	var $button = $('.slide__text'),
		$box = $('.sc_promo_box');
	

	$button.on('click',function(){
		$box.slideToggle(200);
	});

});