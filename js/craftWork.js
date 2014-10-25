$(document).ready(function() {

	// $('.js_nav-toggle').on('click', function() {
	// 	if ( $(window).width() < 750) {
	// 		$('.nav-list').slideToggle();
	// 	}
	// })
	// $.fn.ekkoLightbox.defaults({always_show_close: false});
	$(document).delegate('.zoomContainer', 'click', function(event) {
	    event.preventDefault();
	    $(this).children('a').ekkoLightbox({always_show_close: false});
	 //    $easyzoomlightbox = $('.ekko-lightbox-container div').easyZoom(),
		// apilightbox = $easyzoomlightbox.data('easyZoom');;
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

	var firstWork = $('.ribbon-work').first(),
		firstDescriptionBlock = firstWork.children('.ribbon-description'),
		firstZoomImageURL = firstDescriptionBlock.data('zoom');
		firstImageURL = firstDescriptionBlock.data('image'),
		descriptionText = firstDescriptionBlock.html(),
		$easyzoom = $('.easyzoom').easyZoom(),
		api = $easyzoom.data('easyZoom');;

		firstWork.addClass('selected');
		$('.work-image img').attr('src', firstImageURL);
		$('.work-image a').attr('href', firstZoomImageURL);
		$('.work-description').html(descriptionText);

	$('.ribbon-work').on('click', function() {
		var descriptionBlock = $(this).children('.ribbon-description'),
			zoomImageURL = descriptionBlock.data('zoom');
			largeImageURL = descriptionBlock.data('image'),
			descriptionText = descriptionBlock.html();
			
			$('work-description').html('');

			// set active image
			$('.work-image img').attr('src', largeImageURL);
			$('.work-image a').attr('href', zoomImageURL);
			$('.work-description').html(descriptionText);

			// set the active image border
			$('.ribbon-work').removeClass('selected');
			$(this).addClass('selected');

			// reset the image zoom
			api.teardown();
			$easyzoom = $('.easyzoom').easyZoom();
			api = $easyzoom.data('easyZoom');
	});


});