$(document).ready(function() {

	// $('.js_nav-toggle').on('click', function() {
	// 	if ( $(window).width() < 750) {
	// 		$('.nav-list').slideToggle();
	// 	}
	// })
	// $.fn.ekkoLightbox.defaults({always_show_close: false});
	

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