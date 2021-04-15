var color1 = new Color(0.4, 1.0, 0.4);
var color2 = new Color(0.4, 1.0, 0.4, 0);
// vec3(1.0, 0.9, 0.22)
var radius = 100;
//
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
		'radius': radius,
		'fillColor.destination': mousePos + (radius / 2)
	}, {
		easing: 'easeInOutCubic',
		duration: 2000
	});

	circleGroup.addChild(circle);
}
