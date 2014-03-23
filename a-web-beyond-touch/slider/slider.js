/* slidr.js | copyright (c) 2013 petro salema | github.com/petrosalema/slidr */
(function (global, $) {
	'use strict';

	var CYCLE = true;
	var $window = $(window);
	var $slides = $('.slides>li');
	var min_index = 0;
	var max_index = $slides.length - 1;
	var current = 0;

	// reverse z-index stack so that first slide is on top
	$slides.each(function (i) {
		$(this).css('z-index', max_index - i).data('slide-index', i);
	});

	function on_before_show($slide) {
		effect('before-show', $slide);
	}

	function on_show() {
		effect('show', $(this));
	}

	function effect(on, $slide) {
		var effects = $slide.attr('data-' + on);
		if (!effects) {
			return;
		}
		$.each(effects.split(' '), function (i, effect) {
			var action = window.slides_actions[effect];
			if (action) {
				action($slide);
			}
		});
	}

	function transition(prev, next, direction) {
		var $prev = $slides.eq(prev);
		var $next = $slides.eq(next);

		console.log($prev);

		// shuffle z-index stacking

		$slides.css('z-index', min_index).hide();
		$prev.stop().show().addClass('transition').css('z-index', max_index -1);
		$next.stop().show().removeClass('transition').css('z-index', max_index);
		// animate fly-in

		var prev_end;
		var next_start;
		if ('forward' === direction) {
			prev_end = -$prev.width();
			next_start = $next.width();
		} else {
			prev_end = $prev.width(),
			next_start = -$next.width();
		}

		var duration = 'true' === $next.attr('data-no-transition')
		             ? 0
		             : 5;

		$prev.animate({
			left: prev_end
		}, 1000 * duration);

		location.href = '#' + $next.data('slide-index');

		on_before_show($next);

		$next.css('left', next_start).animate({
			left: 0
		}, 100 * duration, on_show);
	}

	function prev(index, cycle) {
		var new_index = index - 1;
		return new_index >= min_index ? new_index
		                              : cycle ? max_index
		                                      : min_index;
	}

	function next(index, cycle) {
		var new_index = index + 1;
		return new_index <= max_index ? new_index
		                              : cycle ? min_index
		                                      : max_index;
	}

	function key_down($event) {
		var old = current;
		var direction;

		switch ($event.keyCode) {
		case 37: // ←
		case 38: // ↑
			direction = 'backward';
			break;

		case 32: // [space] 
		case 39: // → 
		case 40: // ↓
		case 13: // ←┘
			direction = 'forward';
			break;

		case 27: // [esc]
			return;

		default:
			return;
		}

		current = 'forward' === direction ? next(old, CYCLE) : prev(old, CYCLE);

		if (current !== old) {
			transition(old, current, direction);
		}
	}

	$(document).on('keydown', key_down);

	if (window.location.hash) {
		current = parseInt(location.hash.replace('#', '') || 0, 10);
		if (current) {
			transition(0, current);
		}
	}

}(window, window.jQuery));
