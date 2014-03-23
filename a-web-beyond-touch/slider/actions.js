(function () {
	'use strict';

	window.slides_actions = {};

	slides_actions['hide'] = function ($slide) {
		$slide.find('>div').hide();
	};

	slides_actions['show'] = function ($slide) {
		$slide.find('>div').show();
	};

	slides_actions['fade-in'] = function ($slide) {
		$slide.find('>div').show().css('opacity', 0).animate({opacity: 1}, 500);
	};

	slides_actions['animate-lettering'] = function ($slide) {
		var $lettering = $slide.find('.lettering');
		var win_height = $(window).height();
		var win_width = $(window).width();
		var $letters = $lettering.find('>b').each(function () {
			var sign = Math.random() < 0.5 ? -1 : 1;
			var x = Math.round(Math.random() * win_width * sign);
			var y = Math.round(Math.random() * win_height * sign);
			$(this).css(
				'-webkit-transform',
				'rotate(' + Math.round(Math.random() * 180 * sign) + 'deg) ' +
				'translate(' + x + 'px, ' + y + 'px) ' +
				'scale(' + Math.round(2 + (Math.random() * 5)) + ')'
			).css(
				'-moz-transform',
				'rotate(' + Math.round(Math.random() * 180 * sign) + 'deg) ' +
				'translate(' + x + 'px, ' + y + 'px) ' +
				'scale(' + Math.round(2 + (Math.random() * 5)) + ')'
			).css('opacity', 0);
		});

		setTimeout(function () {
			$lettering.addClass('animating');
			$letters.css('-webkit-transform', '')
			        .css('-moz-transform', '')
			        .css('opacity', 1);
		}, 500);

		setTimeout(function () {
			$lettering.removeClass('animating');
		}, 2000);
	};
}());

