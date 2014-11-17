$(document).ready(function() {

	
	$(this).delegate('.lectureImage', 'click', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox({always_show_close: false});

	});

	var el = $('.text-description'), //jQuery element
		del = $('.text-description')[0], //DOM element
		lineHeight = $('.text-description p').css('lineHeight');

	el.scroll(function() {
		if (del.scrollHeight - el.scrollTop() <= (el.outerHeight() + 22) ) {
			$('.bottom-white').css('visibility', 'hidden');
		}
		else {
			$('.bottom-white').css('visibility', 'visible');
		}
	});


});