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

	var firstWork = $('.ribbon-work').first(),
		firstDescriptionBlock = firstWork.children('.ribbon-description'),
		firstZoomImageURL = firstDescriptionBlock.data('zoom');
		firstImageURL = firstDescriptionBlock.data('image'),
		workArtist = firstDescriptionBlock.data('artist'),
		workTitle = firstDescriptionBlock.data('title'),
		workMedium = firstDescriptionBlock.data('medium'),
		workDate = firstDescriptionBlock.data('date');

		firstWork.addClass('selected');
		$('.work-image img').attr('src', firstImageURL);
		$('.work-image a').attr('href', firstZoomImageURL);
		$('.artist-name').html(workArtist)
		$('.work-title').html(workTitle)
		$('.work-medium').html(workMedium)
		$('.work-date').html(workDate);

	var $easyzoom = $('.easyzoom').easyZoom();
	var api = $easyzoom.data('easyZoom');

	$('.ribbon-work').on('click', function() {
		var descriptionBlock = $(this).children('.ribbon-description'),
			zoomImageURL = descriptionBlock.data('zoom');
			largeImageURL = descriptionBlock.data('image'),
			workArtist = descriptionBlock.data('artist'),
			workTitle = descriptionBlock.data('title'),
			workMedium = descriptionBlock.data('medium'),
			workDate = descriptionBlock.data('date'),
			descriptionText = descriptionBlock.html();
			
			// active image
			$('.ribbon-work').removeClass('selected');
			$('.work-image img').attr('src', largeImageURL);
			$('.work-image a').attr('href', zoomImageURL);
			$('.artist-name').html(workArtist)
			$('.work-title').html(workTitle)
			$('.work-medium').html(workMedium)
			$('.work-date').html(workDate);
			$('.work-description').html(descriptionText);

			$(this).addClass('selected');
			api.teardown();
			$easyzoom = $('.easyzoom').easyZoom();
			api = $easyzoom.data('easyZoom');
	});

	// EasyZoom

	

});