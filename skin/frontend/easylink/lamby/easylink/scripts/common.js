jQuery(function($) {

	/* start home slider */

		var homeSlider = jQuery('.home-slider .bxslider').bxSlider({
			// pager: false,
			controls: false
		});

		jQuery('.jsHomeSliderNext').on('click', function(event) {
			event.preventDefault();
			
			homeSlider.goToNextSlide();
		});

		jQuery('.jsHomeSliderPrev').on('click', function(event) {
			event.preventDefault();
			
			homeSlider.goToPrevSlide();
		});

	/* end home slider */

	/* start twitter slider */

		var twitterSlider = jQuery('.home-twitter-slider .bxslider').bxSlider({
			pager: false,
			controls: false,
			auto: true
		});

		jQuery('.home-twitter-slider-next').on('click', function(event) {
			event.preventDefault();

			twitterSlider.goToNextSlide();
		});

		jQuery('.home-twitter-slider-prev').on('click', function(event) {
			event.preventDefault();

			twitterSlider.goToPrevSlide();
		});

	/* end twitter slider */

	/* start height */

		// jQuery('.home-offer-header').matchHeight();

	/* end height */

	/* start categories slider */

		jQuery('.categories-slider .bxslider').bxSlider({
			controls: false
		});

	/* end categories slider */

	/* start contact map */

		jQuery('.jsContactMapContentClose').on('click', function(event) {
			event.preventDefault();

			jQuery(this).closest('.contact-map-content').fadeOut();
		});

	/* end contact map */

});
