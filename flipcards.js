(function () {
	'use strict';

	function easeOutQuint(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	}

	function easeInOutQuint(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	}

	function step(state) {
		var elapsed  = new Date().getTime() - state.starttime;
		var percent  = Math.min(1, elapsed / state.duration);
		var position = state.easing(percent, elapsed, 0, 1, state.duration);
		state.interval(state.start + (state.delta * position), percent);
		return percent;
	}

	function animate(start, end, easing, duration, interval) {
		var state = {
			starttime : new Date().getTime(),
			duration  : duration,
			start     : start,
			delta     : end - start,
			interval  : interval,
			easing    : easing,
			timer     : null
		};
		(function tick() {
			if (step(state) < 1) {
				state.timer = setTimeout(tick, 10);
			}
		}());
		return state;
	}

	function flip(card, callback, complete) {
		var end = card.forwards ? 0 : 180;
		var start = card.front.rotation.y;
		var trigger = card.forwards ? 0.6: 0.3;
		var finished = false;
		return animate(
			start,
			end,
			card.forwards ? easeInOutQuint : easeOutQuint ,
			1500,
			function (value, percent) {
				card.front.rotation.y = value;
				card.engine.onInterval();
				if (!finished && percent > trigger && 'function' === typeof callback) {
					finished = true;
					callback();
				}
				if (1 === percent) {
					complete();
				}
			}
		);
	}

	function create(flipcard) {
		var canvas = flipcard.querySelector('canvas');
		var style = getComputedStyle(canvas);
		var w = parseInt(style.width, 10);
		var h = parseInt(style.height, 10);
		var aspect = w / h;
		var fov = 40;

		var engine = new Uhuru3D(w, h);
		engine.createCamera(fov, aspect, 1, 6000, 8);
		engine.camera.position.set(0, 0, 0);
		engine.scene.add(new Uhuru.Light([250, 250, 0], 1, 0, 0, 0));
		engine.renderer = new Uhuru.Renderer(
			canvas,
			engine.scene,
			engine.camera,
			engine.width,
			engine.height
		);
		engine.renderer.clearGrid = true;
		engine.renderer.fillColor = Colors.toString(Colors.rgb('#fff'));

		var q = 0.5 / Math.tan(Uhuru.toRad(fov / 2));
		var near = h * q;
		var far = (w * q) - near + h;
		var pos = new Uhuru.Vector(0, 0, near);
		var backColor = Colors.toString(Colors.rgb('#111'));

		var img = flipcard.querySelector('img');
		var frontTexture = img.src;

		var front = new Uhuru.Plane3D(engine, w, h, 3, 3, frontTexture);
		front.doubleSided = false;
		front.rotation.y = 0;
		front.position.copy(pos);
		engine.scene.add(front);
		
		var back = new Uhuru.Plane3D(engine, w, h, 1, 1, null, null, backColor);
		back.doubleSided = false;
		back.shadable = false;
		back.position.copy(pos);
		back.rotation.y = 180;
		engine.scene.add(back);

		engine.registerCallback(function () {
			var f = Math.abs(Math.sin(Uhuru.toRad(front.rotation.y)));
			front.position.z = back.position.z = near + (f * far);
			back.rotation.y = front.rotation.y + 180;
		});

		engine.start(false);

		canvas.style.position = 'absolute';

		var card = {
			front    : front,
			engine   : engine,
			forwards : true
		};

		var frontside = flipcard.querySelector('.front');
		var backside = flipcard.querySelector('.back');
		var state;

		flipcard.addEventListener('click', function () {
			if (state && state.timer) {
				clearTimeout(state.timer);
			}

			card.forwards = !card.forwards;

			frontside.style.left = -w + 'px';
			backside.style.left = w + 'px';
			img.style.opacity = 0;
			canvas.style.opacity = 1;

			state = flip(card, function () {
				if (card.forwards) {
					frontside.style.opacity = 1;
					frontside.style.left = 0;
				} else {
					backside.style.opacity = 1;
					backside.style.left = 0;
				}
			}, function () {
				if (card.forwards) {
					img.style.opacity = 1;
					canvas.style.opacity = 0;
				}
			});
		}, false);
	}

	window.Flipcards = {
		create : create
	};

}());
