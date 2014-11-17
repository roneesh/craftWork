$(document).ready(function() {

	$(this).delegate('.zoomContainer', 'click', function(event) {
	    event.preventDefault();
	    $(this).children('a').ekkoLightbox({always_show_close: false});

	});

	var firstWork = $('.ribbon-work').first(),
	firstDescriptionBlock = firstWork.children('.ribbon-description'),
	firstZoomImageURL = firstDescriptionBlock.data('zoom');
	firstImageURL = firstDescriptionBlock.data('image'),
	descriptionText = firstDescriptionBlock.html(),
	// $easyzoom = $('.easyzoom').easyZoom(),
	// api = $easyzoom.data('easyZoom');;

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
			// api.teardown();
			// $easyzoom = $('.easyzoom').easyZoom();
			// api = $easyzoom.data('easyZoom');
	});

});