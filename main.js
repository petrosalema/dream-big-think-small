(function () {

	'use strict';

	function fitToWidth($inner, $outer) {
		var size = $outer.width();
		$inner.css({
			width  : size,
			height : size * ($inner.height() / $inner.width())
		});
		$inner.css({
			top  : ($outer.height() - $inner.height()) / 2,
			left : 0
		});
	}

	function fitToHeight($inner, $outer) {
		var size = $outer.height();
		var ratio = $inner.width() / $inner.height();
		$inner.css({
			width  : size * ($inner.width() / $inner.height()),
			height : size
		});
		$inner.css({
			top  : 0,
			left : ($outer.width() - $inner.width()) / 2
		});
	}

	$(function () {
		var $inner = $('.cover');
		var $outer = $inner.parent();
		var timer;
		function cover() {
			var diffW = $outer.width() - $inner.width();
			var diffH = $outer.height() - $inner.height();
			if (diffW > diffH) {
				fitToWidth($inner, $outer);
			} else {
				fitToHeight($inner, $outer);
			}
		}
		$(window).on('resize', function () {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(cover, 10);
		});
		cover();
		$('#talk-toggle').on('click', function () {
			$('#talks').show();
		});
	});

}());
