(function () {
	'use strict';

	var camera;
	var scene;
	var renderer;
	var SEPERATION = 10000;
	var POPULATION = 300;
	var SPEED = 40;
	var SIZE = 400;
	var FAR_CLIPPING_PLANE = SEPERATION * 1;
	var ASPECT = window.innerWidth / window.innerHeight;
	var FG = new THREE.Color(0xffffff);
	var BG = new THREE.Color(0x0467e6);

	function pointInSphere(aspect) {
		var r = Math.random();
		var phi = Math.random() * Math.PI;
		var theta = Math.random() * Math.PI * 2;
		return {
			x: r * Math.cos(theta) * Math.sin(phi) * aspect,
			y: r * Math.sin(theta) * Math.sin(phi),
			z: r * Math.cos(phi)
		};
	}

	function pointOnSphere() {
		var x = Math.random() - 0.5, y = Math.random() - 0.5, z = Math.random() - 0.5;
		var k = Math.sqrt(x * x + y * y + z * z);
		while (k < 0.2 || k > 0.3) {
			x = Math.random() - 0.5;
			y = Math.random() - 0.5;
			z = Math.random() - 0.5;
			k = Math.sqrt(x * x + y * y + z * z);
		}
		return {x: x/k, y: y/k, z: z/k};
	}

	function createBox(aspect, rand, i) {
		var point = rand(aspect);
		var box = new THREE.Mesh(
			new THREE.PlaneGeometry(SIZE, SIZE * 1.4),
			new THREE.MeshBasicMaterial({color: FG.getHex()})
		);
		box.position.x = point.x * SEPERATION;
		box.position.y = point.y * SEPERATION;
		box.position.z = point.z * SEPERATION / 4;
		return box;
	}

	function generate(aspect) {
		var boxes = [];
		var i;
		var third = POPULATION / 3;
		for (i = 0; i < third; i++) {
			boxes.push(createBox(ASPECT, pointInSphere, i));
		}
		for (i = 0; i < third * 2; i++) {
			boxes.push(createBox(ASPECT, pointOnSphere, i));
		}
		return boxes;
	}

	function generateLines(boxes) {
		var lines = [];
		var line;
		var geo;
		var pos;
		var count;
		var j;
		var i;
		for (i = 0; i < POPULATION; i+=2) {
			geo = new THREE.Geometry();
			pos = boxes[i].position;
			geo.vertices.push(new THREE.Vector3(pos.x, pos.y, pos.z));
			pos = boxes[Math.round(Math.random() * (POPULATION - 1))].position;
			count = Math.random() * 4;
			for (j = 0; j < count; j++) {
				pos = boxes[Math.round(Math.random() * (POPULATION - 1))].position;
				geo.vertices.push(new THREE.Vector3(pos.x, pos.y, pos.z));
			}
			lines.push(new THREE.Line(geo, new THREE.LineBasicMaterial({
				color: FG.getHex(),
				opacity: 0.1,
				linewidth: 3
			})));
		}
		return lines;
	}

	function populate(scene) {
		var boxes = generate(ASPECT);
		var lines = generateLines(boxes);
		boxes.concat(lines).forEach(function (box) {
			scene.add(box);
		});
		return {
			boxes: boxes,
			lines: lines
		};
	}

	function init(objs) {
		var w = window.innerWidth;
		var h = window.innerHeight;
		camera = new THREE.PerspectiveCamera(175, ASPECT, 1, FAR_CLIPPING_PLANE);
		renderer = new THREE.CanvasRenderer();
		scene = new THREE.Scene();
		renderer.setSize(w, h);
		camera.position.z = -SEPERATION / 4;
		return populate(scene);
	}

	function free(objs) {
		objs.forEach(function (obj) {
			obj.parent.remove(obj);
		});
	}

	function fade(from, to, percent) {
		var r = to.r - from.r;
		var g = to.g - from.g;
		var b = to.b - from.b;
		return {
			r: from.r + (r * percent),
			g: from.g + (g * percent),
			b: from.b + (b * percent)
		};
	}

	function updateBoxes(boxes, lines) {
		var obj, i, j, l, percent, color;
		for (i = 0, l = boxes.length; i < l; i++) {
			obj = boxes[i];
			percent = Math.min(1, Math.abs(obj.position.z / FAR_CLIPPING_PLANE));
			//(FAR_CLIPPING_PLANE)/(FAR_CLIPPING_PLANE - obj.position.z)
			if (percent > 0.3) {
				color = fade(FG, BG, percent);
				obj.material.color.r = color.r;
				obj.material.color.g = color.g;
				obj.material.color.b = color.b;
			}
			obj.position.z -= SPEED;
		}
		for (i = 0, l = lines.length; i < l; i++) {
			obj = lines[i];
			percent = Math.abs(obj.position.z / (FAR_CLIPPING_PLANE * 2));
			obj.material.opacity = Math.min(0.2, percent);
			obj.material.linewidth = 3 * (1 - percent);
			obj.position.z -= SPEED;
		}
	}

	var stopped = false;

	function animate(boxes, lines) {
		if (!stopped) {
			requestAnimationFrame(function () {
				animate(boxes, lines);
			});
			updateBoxes(boxes, lines);
			renderer.render(scene, camera);
		}
	}

	var boxes = [];
	var lines = [];
	var initialized = false;

	var Flythrough = {
		start: function (container) {
			if (!initialized) {
				init();
				initialized = true;
			} else {
				free(boxes.concat(lines));
				boxes = lines = [];
			}
			var objs = populate(scene);
			boxes = objs.boxes;
			lines = objs.lines;
			stopped = false;
			container.appendChild(renderer.domElement);
			animate(boxes, lines);
		},
		stop: function () {
			stopped = true;
			free(boxes.concat(lines));
			boxes = lines = [];
		}
	};

	window.Flythrough = Flythrough;

}());
