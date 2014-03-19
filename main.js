(function () {
	'use strict';

	// --- `colors ---

	var COLOR_PREFIX = /^(#|rgba?|hsl)\(?([^\(\)]+)/i;
	var COMMA = /\s*,\s*/;

	function color2str(color) {
		if ('string' === typeof color[0]) {
			return '#' + color.join('');
		}
		return (4 === color.length)
		     ? 'rgba(' + color.join(',') + ')'
		     : 'rgb('  + color.join(',') + ')';
	}

	function normalizeHex(hex) {
		var r, g, b;
		if (4 === hex.length) {
			r = hex.substr(1, 1);
			g = hex.substr(2, 1);
			b = hex.substr(3, 1);
			r += r;
			g += g;
			b += b;
		} else {
			r = hex.substr(1, 2);
			g = hex.substr(3, 4);
			b = hex.substr(5, 6);
		}
		return [r, g, b];
	}

	function rgb2hex(rgb) {
		return rgb.reduce(function (values, value) {
			var color = parseInt(value, 10).toString(16);
			return values.concat(1 === color.length ? color + color : color);
		}, []);
	}

	function hex2rgb(hex) {
		return normalizeHex(hex).reduce(function (values, value) {
			return values.concat(parseInt(value, 16));
		}, []);
	}

	function hex(value) {
		var color = value.match(COLOR_PREFIX);
		switch (color && color[1]) {
		case '#':
			return normalizeHex(color[0]);
		case 'rgb':
		case 'rgba':
			return rgb2hex(color[2].split(COMMA));
		}
	}

	function rgb(value) {
		var color = value.match(COLOR_PREFIX);
		switch (color && color[1]) {
		case '#':
			return hex2rgb(color[0]);
		case 'rgb':
		case 'rgba':
			return color[2].split(COMMA).reduce(function (values, value) {
				return values.concat(parseInt(value, 10));
			}, []);
		}
	}

	function crossColors(from, to, percent) {
		var r = to[0] - from[0];
		var g = to[1] - from[1];
		var b = to[2] - from[2];
		return [
			from[0] + Math.round(r * percent),
			from[1] + Math.round(g * percent),
			from[2] + Math.round(b * percent)
		];
	}

	// --- /colors ---


	// --- `polyfills ---

	var requestAnimationFrame = (function () {
		return window.requestAnimationFrame
		    || window.webkitRequestAnimationFrame
		    || window.mozRequestAnimationFrame
		    || window.oRequestAnimationFrame
		    || window.msRequestAnimationFrame
		    || function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	}());

	if (window.CanvasRenderingContext2D && !CanvasRenderingContext2D.createImageData) {
		CanvasRenderingContext2D.prototype.createImageData = function (w, h) {
			return this.getImageData(0, 0, w, h);
		};
	}

	// --- /polyfills ---


	var omx = 0;
	var omy = 0;
	var mx = 0;
	var my = 0;
	var width;
	var height;
	var density = 100;
	var resolution = window.fieldRes = 16 * 2;
	var bg = rgb('#fff');
	var fg = rgb('#111');
	var stopped = false;
	var running = false;

	function isBetween(value, min, max) {
		return value >= min && value <= max;
	}

	function magnitude(x, y) {
		return Math.sqrt(x * x + y * y);
	}

	function prepareFrame(field) {
		if (!isBetween(omx, 0, width) || !isBetween(omy, 0, height)) {
			return;
		}
		var w = field.width();
		var h = field.height();
		var dx = mx - omx;
		var dy = my - omy;
		var length = Math.max(1, magnitude(dx, dy));
		var i;
		for (i = 0; i < length; i++) {
			var x = (((omx + dx * (i / length)) / width) * w) | 0;
			var y = (((omy + dy * (i / length)) / height) * h) | 0;
			field.setVelocity(x, y, dx, dy);
			field.setDensity(x, y, density);
		}
		omx = mx;
		omy = my;
	}

	function start(field) {
		running = true;
		(function step() {
			field.update();
			if (running) {
				requestAnimationFrame(step);
			}
		}());
	}

	function stop() {
		running = false;
		stopped = true;
	}

	function end(color, field) {
		document.querySelector('body').style.background = color2str(color);
		setTimeout(function () {
			field.canvas.style.opacity = 0;
		}, 500);
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
        var w = field.width();
        var h = field.height();
		var touched = 0;
		var x;
		var y;
		for (x = 0; x < w; x++) {
			for (y = 0; y < h; y++) {
				var intensity = Math.min(1, field.getDensity(x, y));
				context.fillStyle = color2str(crossColors(bg, fg, intensity));
				context.fillRect(x, y, 1, 1);
				if (intensity >= 0.9) {
					touched++;
				}
			}
		}
		if (touched / (w * h) > 0.7) {
			end(fg, field);
		}
		if (touched / (w * h) >= 0.9) {
			stop();
		}
    }

	window.onload = function () {
		var canvas = document.querySelector('#canvas');
		var canvasStyle = getComputedStyle(canvas);

		width = parseInt(canvasStyle.width, 10);
		height = parseInt(canvasStyle.height, 10);

		var interacting = false;
		var interact = function (event) {
			interacting = true;
			var offset = getOffsets(canvas);
			mx = event.clientX - offset.left;
			my = event.clientY - offset.top;
			if (!running && !stopped) {
				omx = mx;
				omy = my;
				start(field);
			}
		};

		document.onmousemove = interact;
		document.onmousedown = interact;

		var aspect = Math.round(width / height);
		var field = new FluidField(canvas);
		field.setUICallback(prepareFrame);
		field.setDisplayFunction(render);
		field.setResolution(resolution, resolution * aspect);

		var waypoints = [
			{
				x: width / 2,
				y: height * 0.75
			}, {
				x: width / 2,
				y: height * 0.25
			}, {
				x: width * 0.75,
				y: height / 2
			}, {
				x: width * 0.25,
				y: height / 2
			}
		];

		function puff() {
			if (interacting) {
				return;
			}
			var point = waypoints.pop();
			if (point) {
				mx = point.x;
				my = point.y;
				setTimeout(puff, 1000);
			}
			if (!running) {
				omx = width / 2;
				omy = height / 2;
				start(field);
			}
		}

		setTimeout(puff, 1000);
	};
}());
