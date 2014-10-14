// slider.js -- copyright 2013 petro salema
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
		$(this).css({
			'z-index': max_index - i,
			width: $window.width(),
			height: $window.height()
		}).data('slide-index', i);
		if (i > 0) {
			$(this).css('display', 'none');
		}
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

	function call(command, $prev, $next, direction, callback) {
		if (!command) {
			return callback($prev, $next, direction);
		}
		var commands = (command || '').split(',');
		var next = function () {
			if (0 === commands.length) {
				return callback($prev, $next, direction);
			}
			var action = window.slides_actions[commands.shift()];
			if (action) {
				action($prev, $next, next);
			} else {
				next();
			}
		};
		next();
	}

	function leave($prev, $next, direction, callback) {
		call($prev.attr('data-on-leave'), $prev, $next, direction, callback);
	}

	function enter($prev, $next, direction) {
		call($next.attr('data-on-enter'), $prev, $next, direction, shuffle);
	}

	function shuffle($prev, $next, direction) {
		$slides.css('z-index', min_index).hide();
		$prev.stop().show().addClass('transition').css('z-index', max_index - 1);
		$next.stop().show().removeClass('transition').css('z-index', max_index);
		//location.href = '#' + $next.data('slide-index');
		$prev.hide();
		$next.show();
	}

	function transition(prev, next, direction) {
		leave($slides.eq(prev), $slides.eq(next), direction, enter);
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

	function mouse_down($event) {
		var old = current;
		var direction = 3 === $event.which ? 'backward' : 'forward';
		current = 'forward' === direction ? next(old, CYCLE) : prev(old, CYCLE);
		transition(old, current, direction);
	}

	$(document).on('keydown', key_down)
	           .on('mousedown', mouse_down)
	           .on("contextmenu", function(e){ return false; })

	if (window.location.hash) {
		current = parseInt(location.hash.replace('#', '') || 0, 10);
		if (current) {
			transition(0, current);
		}
	}

}(window, window.jQuery));
