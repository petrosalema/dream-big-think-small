(function () {
	'use strict';

	var omx = 0;
	var omy = 0;
	var mx = 0;
	var my = 0;
	var width;
	var height;
	var pressure = true;
	var resolution = window.fieldRes = 16 * 3;

	function prepareFrame(field) {
		if ((omx >= 0 && omx < width && omy >= 0 && omy < height) && pressure) {
			var dx = mx - omx;
			var dy = my - omy;
			var length = (Math.sqrt(dx * dx + dy * dy) + 0.5) | 0;
			if (length < 1) length = 1;
			for (var i = 0; i < length; i++) {
				var x = (((omx + dx * (i / length)) / width) * field.width()) | 0
				var y = (((omy + dy * (i / length)) / height) * field.height()) | 0;
				field.setVelocity(x, y, dx, dy);
				field.setDensity(x, y, 50);
			}
			omx = mx;
			omy = my;
		}
	}

	// shim layer with setTimeout fallback
	var requestAnimFrame = (function () {
		return window.requestAnimationFrame
		    || window.webkitRequestAnimationFrame
		    || window.mozRequestAnimationFrame
		    || function (callback) {window.setTimeout(callback, 1000 / 60);};
	})();

	function update(field, step) {
		field.update();
		requestAnimFrame(step);
	}

	function start(field) {
		field.update();
		var step = function () {
			return update(field, step);
		};
		step();
	}

	function getOffsets(element) {
		var top = 0;
		var left = 0;
		do {
		  top += element.offsetTop;
		  left += element.offsetLeft;
		} while (element = element.offsetParent);
		return {
			left : left,
			top  : top
		};
	}

    function render(field) {
        var context = field.canvas.getContext('2d');
        var width = field.width();
        var height = field.height();
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				var d = field.getDensity(x, y) / 1;
				context.setFillColor(0, 0, 0, d);
				context.fillRect(x, y, 1, 1);
			}
		}
    }

	if (window.CanvasRenderingContext2D && !CanvasRenderingContext2D.createImageData) {
		CanvasRenderingContext2D.prototype.createImageData = function (w,h) {
			return this.getImageData(0,0,w,h);
		}
	}

	window.onload = function () {
		var canvas = document.querySelector('#canvas');

		width = parseInt(getComputedStyle(canvas).width, 10);
		height = parseInt(getComputedStyle(canvas).height, 10);

		var aspect = Math.round(width / height);

		// Start at the bottom right of the screen
		omx = mx = width - 1;
		omy = my = height - 1;

		document.onmousemove = function (event) {
			var offset = getOffsets(canvas);
			mx = event.clientX - offset.left;
			my = event.clientY - offset.top;
		};

		var field = new FluidField(canvas);
		field.setUICallback(prepareFrame);
		field.setDisplayFunction(render);
		field.setResolution(resolution, resolution * 2);

		start(field);
	}
}());
