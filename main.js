(function () {
	'use strict';

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
	var resolution = window.fieldRes = 16 * 3;
	var bg = Colors.rgb('#fff');
	var fg = Colors.rgb('#111');
	var stopped = false;
	var running = false;
	var paused = false;

	function isBetween(value, min, max) {
		return value >= min && value <= max;
	}

	function magnitude(x, y) {
		return Math.sqrt(x * x + y * y);
	}

	function prepareFrame(field) {
		if (paused || !isBetween(mx, 0, width) || !isBetween(my, 0, height)) {
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

	function end(color, canvas) {
		canvas.parentNode.style.background = Colors.toString(color);
		setTimeout(function () {
			canvas.style.opacity = 0;
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
		if (paused) {
			return;
		}
        var context = field.canvas.getContext('2d');
		var touched = 0;
        var w = field.width();
        var h = field.height();
		var x;
		var y;
		for (x = 0; x < w; x++) {
			for (y = 0; y < h; y++) {
				var intensity = Math.min(1, field.getDensity(x, y));
				context.fillStyle = Colors.toString(Colors.cross(bg, fg, intensity));
				context.fillRect(x, y, 1, 1);
				if (intensity >= 0.9) {
					touched++;
				}
			}
		}
		if (touched / (w * h) > 0.8) {
			end(fg, field.canvas);
		}
		if (touched / (w * h) >= 0.95) {
			stop();
		}
    }

	window.onload = function () {
		var canvas = document.querySelector('#canvas');
		var style = getComputedStyle(canvas.parentNode);

		width = parseInt(style.width, 10);
		height = parseInt(style.height, 10);

		canvas.style.height = height + 'px';

		var aspect = Math.round(width / height);
		var field = new FluidField(canvas);
		field.setUICallback(prepareFrame);
		field.setDisplayFunction(render);
		field.setResolution(resolution, resolution * aspect);

		var interacting = false;
		var interact = function (event) {
			if (stopped) {
				return;
			}
			var scrollLeft = window.pageXOffset - document.body.clientLeft;
			var scrollTop  = window.pageYOffset - document.body.clientTop;

			paused = scrollTop > height;

			if (paused) {
				return;
			}

			var offset = getOffsets(canvas);
			mx = event.clientX - offset.left + scrollLeft;
			my = event.clientY - offset.top + scrollTop;
			if (!running) {
				omx = mx;
				omy = my;
				start(field);
			}
			interacting = true;
		};

		document.onmousemove = interact;
		document.onmousedown = interact;

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

		setTimeout(function () {
			end(fg, canvas);
			setTimeout(stop, 2000);
		}, 5000);

		var flipcards = [].slice.call(document.querySelectorAll('.flipcard'));
		flipcards.forEach(Flipcards.create);
	};

	if (window.console && 'function' === typeof window.console.log) {
		var colophon = '@petrosalema • colophon\n'
		             + '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'
		             + '\n'
		             + 'Fluid Dynamics\n'
		             + ' • www.nerget.com/fluidSim/\n'
		             + ' • code.google.com/p/javascript-fluid/\n'
		             + ' • www.cs.ubc.ca/~rbridson/docs/brentw_msc.pdf\n'
		             + ' • www.cs.ubc.ca/~rbridson/docs/batty-sca08-viscosity.pdf\n'
		             + ' • www.cs.ubc.ca/~rbridson/docs/schechter-sca08-turbulence.pdf\n'
		             + ' • www.dgp.toronto.edu/people/stam/reality/Research/pdf/GDC03.pdf\n'
		             + ' • www.stackoverflow.com/questions/4893992/fluid-dynamic-simulation-with-obstacles\n'
		             + '\n'
		             + 'Type Faces\n'
					 + ' • Title/Headings: Helvetica\n'
					 + ' • Content: FastCompany\'s Zizou Slab\n';
		console.log(colophon);
	}
}());
