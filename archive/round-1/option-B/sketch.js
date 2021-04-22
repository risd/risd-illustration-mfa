var randomHue = Math.random() * 360;
var color1 = {
	hue: randomHue,
	saturation: 1,
	brightness: 1,
	alpha: 1
};
var color2 = {
	hue: randomHue,
	saturation: 1,
	brightness: 1,
	alpha: 0
};
var radius = 50;

var circle, circleInstance, mousePos, tween;
var circleGroup = new Group();

function onMouseMove(event) {
	mousePos = event.point;
	circle = new Shape.Circle({
		center: mousePos,
		radius: radius,
		fillColor: {
			gradient: {
				stops: [[color1, 0], [color2, 1]],
				radial: true
			},
			origin: mousePos,
			destination: mousePos + (radius / 2)
	  }
	});

	tween = circle.tween({
		opacity: 1,
		'radius': radius,
		'fillColor.destination': mousePos + (radius / 2)
	}, {
		opacity: 1,
		'radius': 0,
		'fillColor.destination': mousePos
	}, {
		easing: 'easeInOutCubic',
		duration: 1000
	});

	circleGroup.addChild(circle);
}

function onMouseDown(event) {
	randomHue = Math.random() * 360;
	color1.hue = randomHue;
	color2.hue = randomHue;
	circle.fillColor.gradient = {
		stops: [[color1, 0], [color2, 1]],
		radial: true
  };
}

function onFrame(event) {
	if (circleGroup.children.length > 0) {
		for (var i = 0; i < circleGroup.children.length; i++) {
			// console.log(circleGroup.children[i].radius);
			if (circleGroup.children[i].radius = 0) {
				// circleGroup.children[i].remove();
			}
		}
	}
}
