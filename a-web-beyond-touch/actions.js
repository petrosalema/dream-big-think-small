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

	slides_actions['delay'] = function ($prev, $next, callback) {
		setTimeout(callback, 1000);
	};

	slides_actions['zoom-in'] = function ($prev, $next, callback) {
		var $dot = $prev.find('>h1 b');
		var $target = $prev.find('.zoomable');
		var off = $dot.offset();
		var x = off.left + ($dot.width() / 2) - 1;
		var y = off.top + $dot.height() - 20;
		$target.offset({left: x, top: y});
		$target.zoomTo({
			debug                : true,
			easing               : 'ease-in', //'ease-in-expo',
			duration             : 900,
			targetsize           : 0.3,
			nativeanimation      : true,
			animationendcallback : callback
		});
	};

	slides_actions['reset-zoom'] = function ($prev, $next, callback) {
		$('body').css({
			'-webkit-transform': '',
			'-webkit-transition': '',
			'transition': ''
		});
		callback();
	};

	slides_actions['shrink'] = function ($prev, $next, callback) {
		$prev.find('>.marker').hide();
		$prev.find('>div').animate({width: '100%'}, 1000, callback);
	};

	slides_actions['start-flying'] = function ($prev, $next, callback) {
		Flythrough.start($next[0]);
		callback();
	};

	slides_actions['stop-flying'] = function ($prev, $next, callback) {
		Flythrough.stop();
		callback();
	};

	var timer = null;
	slides_actions['animate-text'] = function ($prev, $next, callback) {
		if (timer) {
			clearTimeout(timer);
		}
		callback();
		var $text = $next.find('.text');
		var text = ($text.attr('data-text') || '').split('');
		$text.html('');
		var type = function () {
			var chr = text.shift();
			if (chr) {
				$text.html($text.html() + chr);
				timer = setTimeout(type, 50 + (Math.random() * 100));
			}
		};
		timer = setTimeout(type, 1000);
	};

	var listening = false;
	slides_actions['demo'] = function ($prev, $next, callback) {
		callback();
		$('.aloha-caret').show();
		if (!listening) {
			listening = true;
			window.listen();
		}
	}; 
	slides_actions['hidecaret'] = function ($prev, $next, callback) {
		$('.aloha-caret').hide();
		callback();
	}; 
}());

