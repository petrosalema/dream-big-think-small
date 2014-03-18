(function () {
	'use strict';

	var omx = 0;
	var omy = 0;
	var mx = 0;
	var my = 0;
	var width;
	var height;
	var density = 20;
	var pressure = true;
	var resolution = window.fieldRes = 16 * 4;

	var requestAnimationFrame = (function () {
		return window.requestAnimationFrame
		    || window.webkitRequestAnimationFrame
		    || window.mozRequestAnimationFrame
		    || function (callback) {window.setTimeout(callback, 1000 / 60);};
	})();

	if (window.CanvasRenderingContext2D && !CanvasRenderingContext2D.createImageData) {
		CanvasRenderingContext2D.prototype.createImageData = function (w,h) {
			return this.getImageData(0, 0, w, h);
		}
	}

	function isBetween(value, min, max) {
		return value >= min && value <= max;
	}

	function magnitude(x, y) {
		return Math.sqrt(x * x + y * y);
	}

	function prepareFrame(field) {
		if (pressure && isBetween(omx, 0, width) && isBetween(omy, 0, height)) {
			var w = field.width();
			var h = field.height();
			var dx = mx - omx;
			var dy = my - omy;
			var length = Math.max(1, magnitude(dx, dy));
			for (var i = 0; i < length; i++) {
				var x = (((omx + dx * (i / length)) / width) * w) | 0
				var y = (((omy + dy * (i / length)) / height) * h) | 0;
				field.setVelocity(x, y, dx, dy);
				field.setDensity(x, y, density);
			}
			omx = mx;
			omy = my;
		}
	}

	var stopped = false;
	var running = false;

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

	function fade(color, field) {
		document.querySelector('body').style
		        .background = 'rgb('
		                    + Math.round(256 * color[0])
		                    + ','
		                    + Math.round(256 * color[1])
		                    + ','
		                    + Math.round(256 * color[2])
							+ ')';
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

	var colors = [
		[0.03, 0.03, 0.03], // coal
		[0.90, 0.00, 0.00]  // red
	];
	var index = 0;

    function render(field) {
        var context = field.canvas.getContext('2d');
        var w = field.width();
        var h = field.height();
		var color = colors[index];
		var touched = 0;
		for (var x = 0; x < w; x++) {
			for (var y = 0; y < h; y++) {
				var alpha = field.getDensity(x, y);
				context.setFillColor(color[0], color[1], color[2], alpha);
				if (alpha > 0.1) {
					touched++;
				}
				context.fillRect(x, y, 1, 1);
			}
		}
		if (touched / (w * h) > 0.7)  {
			fade(color, field);
		}
		if (touched / (w * h) > 0.8)  {
			stop();
		}
    }

	window.onload = function () {
		var canvas = document.querySelector('#canvas');

		width = parseInt(getComputedStyle(canvas).width, 10);
		height = parseInt(getComputedStyle(canvas).height, 10);

		var aspect = Math.round(width / height);

		document.onmousemove = function (event) {
			var offset = getOffsets(canvas);
			mx = event.clientX - offset.left;
			my = event.clientY - offset.top;
			if (!running && !stopped) {
				omx = mx;
				omy = my;
				start(field);
			}
		};

		var field = new FluidField(canvas);
		field.setUICallback(prepareFrame);
		field.setDisplayFunction(render);
		field.setResolution(resolution, resolution * 2);

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
			var point = waypoints.pop();
			if (point) {
				mx = point.x;
				my = point.y;
				setTimeout(puff, 1000);
			}
			if (!running) {
				omx = width / 2;
				omy = height / 2;
				started = true;
				start(field);
			}
		}

		setTimeout(puff, 1000);
	}
}());
