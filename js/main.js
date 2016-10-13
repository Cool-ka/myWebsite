$(document).ready(function() {


//PHOTOS SLIDER
$('.photography_slider .next').on('click', function() {
	
	var current_folder = $(this).parent().find('.photos')
	var current_photo = current_folder.find('.active');
	
	if(current_photo.index() >= (current_folder.find('.img').length) - 1) {
		return;
	}
	if ($(window).width() <= 1000) {
		current_photo.removeClass('active active_right').next().addClass('active ');
	} else {
	current_photo.removeClass('active active_right').next().addClass('active active_right');
	}
	

})

$('.photography_slider .prev').on('click', function() {
	var current_folder = $(this).parent().find('.photos')
	var current_photo = current_folder.find('.active');
	if(current_photo.index() <= (current_folder.length - current_folder.length) ) {
		return;
	}

	if ($(window).width() <= 1000) {
		current_photo.removeClass('active active_left').prev().addClass('active');
	} else {
	current_photo.removeClass('active active_left').prev().addClass('active active_left');
	}
})



//CONTEST SLIDER

$('.contests .next').on('click', function() {
	var folder = $(this).parent()
	var current_contest = folder.find('.active');

	if(current_contest.index() >= (folder.find('.container').length) ) {
		return;
	}

	if ($(window).width() <= 1000) {
		current_contest.removeClass('active active_right').next().addClass('active ');
	} else {
	current_contest.removeClass('active active_right').next().addClass('active active_right');
	}



})


$('.contests .prev').on('click', function() {
	var folder = $(this).parent()
	var current_contest = folder.find('.active');

	console.log(current_contest.index() + ' ' + folder.length)
	if(current_contest.index() <= (folder.length) ) {
		return;
	}

	if ($(window).width() <= 1000) {
		current_contest.removeClass('active active_left').prev().addClass('active ');
	} else {
	current_contest.removeClass('active active_left').prev().addClass('active active_left');
	}



})


//CAROUSEL FOR TESTIMONIALS
var current_index;
var next_index;
var another_index;
var previous_index;
var next_index;

	$('.carousel .next').on('click', function() {
		current_index = $('.testimonial').index($('#active'));
		$('.testimonial').removeClass('active_right');
		$('.testimonial').removeClass('active_left');
		
			if(current_index >= $('.testimonial').length - 2) {
				return;
			}

		$('.testimonial').eq(current_index).attr('id', '');
		next_index = current_index+2;
		
		if ($(window).width() <= 1000) {
			$('.testimonial').eq(next_index).attr('id', 'active')
		} else {
			$('.testimonial').eq(next_index).attr('id', 'active').addClass('active_right')
		}
		
	})


	$('.carousel .prev').on('click', function() {
		current_index = $('.testimonial').index($('#active'));
		$('.testimonial').removeClass('active_left');
		$('.testimonial').removeClass('active_right');
			if(current_index <= $('.testimonial').length - $('.testimonial').length) {
				return;
			}
		
		next_index = current_index+1;
		$('.testimonial').eq(next_index).removeClass('active_right').attr('id', '');
		previous_index = current_index-1;

		if ($(window).width() <= 1000) {
			$('.testimonial').eq(previous_index).removeClass('active_right').attr('id', 'active')
		} else {
			$('.testimonial').eq(previous_index).removeClass('active_right').attr('id', 'active').addClass('active_left');
		}
	})


	



});