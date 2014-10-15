// slider.js -- copyright 2014 petro salema
(function (global, $) {
	'use strict';

	var CYCLE = true;
	var $slides = $('.slides>li');
	var current = 0;
	var min_index = 0;
	var max_index = $slides.length - 1;

	// reverse z-index stack so that first slide is on top
	$slides.each(function (i) {
		$(this).css('z-index', max_index - i).data('slide-index', i);
		if (i > 0) {
			$(this).css('display', 'none');
		}
	});

	function call(commands, $prev, $next, callback) {
		(function next() {
			if (0 === commands.length) {
				return callback($prev, $next);
			}
			var action = window.slides_actions[commands.shift()];
			if (action) {
				action($prev, $next, next);
			} else {
				next();
			}
		}());
	}

	function leave($prev, $next, callback) {
		if (!$prev) {
			if (callback) {
				callback();
			}
			return;
		}
		$prev.removeClass('active');
		var commands = $prev.attr('data-on-leave');
		call(commands ? commands.split(',') : [], $prev, $next, callback);
	}

	function enter($prev, $next, callback) {
		if (!$next) {
			if (callback) {
				callback();
			}
			return;
		}
		var commands = $next.attr('data-on-enter');
		call(commands ? commands.split(',') : [], $prev, $next, shuffle);
		setTimeout(function () {
			$next.addClass('active');
		}, 10);
	}

	function shuffle($prev, $next) {
		$slides.css('z-index', min_index);
		if ($prev) {
			$prev.stop().css('z-index', max_index -1).hide();
		}
		$next.stop().css('z-index', max_index).show();
	}

	function transition(prev, next) {
		leave(-1 === prev ? null : $slides.eq(prev), $slides.eq(next), enter);
	}

	function prev(index, cycle) {
		var new_index = index - 1;
		return new_index >= min_index ? new_index : cycle ? max_index : min_index;
	}

	function next(index, cycle) {
		var new_index = index + 1;
		return new_index <= max_index ? new_index : cycle ? min_index : max_index;
	}

	function key_down($event) {
		var old = current;
		switch ($event.keyCode) {
		case 37: // ←
		case 38: // ↑
			current = prev(old, CYCLE);
			break;
		case 32: // [space] 
		case 39: // → 
		case 40: // ↓
		case 13: // ←┘
			current = next(old, CYCLE);
			break;
		case 27: // [esc]
			return;
		default:
			return;
		}
		if (current !== old) {
			transition(old, current);
		}
	}

	function mouse_down($event) {
		var old = current;
		current = 3 === $event.which ? prev(old, CYCLE) : next(old, CYCLE);
		transition(old, current);
	}

	if (window.location.hash) {
		current = parseInt(location.hash.replace('#', '') || 0, 10) || current;
	}

	$(document).on('keydown', key_down)
	           .on('mousedown', mouse_down)
	           .on('contextmenu', function (e) { return false; })
	           .ready(function () { transition(-1, current); });

}(window, window.jQuery));
