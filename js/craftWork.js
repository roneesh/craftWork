$(document).ready(function() {

	// $('.js_nav-toggle').on('click', function() {
	// 	if ( $(window).width() < 750) {
	// 		$('.nav-list').slideToggle();
	// 	}
	// })

	var el = $('.text-box'), //jQuery element
		del = $('.text-box')[0], //DOM element
		lineHeight = $('.text-box p').css('lineHeight');

	el.scroll(function() {
		if (del.scrollTop > 20) {
			$('.top-white').css('visibility', 'visible');
		}
		else if (del.scrollTop < 100) {
			$('.top-white').css('visibility', 'hidden');
		}

		if (del.scrollHeight - el.scrollTop() <= (el.outerHeight() + 22) ) {
			$('.bottom-white').css('visibility', 'hidden');
		}
		else {
			$('.bottom-white').css('visibility', 'visible');
		}
	});

});