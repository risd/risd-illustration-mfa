if (Modernizr.touchevents) {
  console.log("supported");
} else {
	console.log("not supported");
}

var color1 = new Color(0.84, 0.64, 1.0);
var color2 = new Color(0.84, 0.64, 1.0, 0);
// vec3(0.84, 0.64, 1.0)
// hsl(273, 100%, 81%)
var radius = 200;

var circle, circleInstance, mousePos, mouseHue, tween;
var circleGroup = new Group();

function onMouseMove(event) {
  // mouseHue = (event.point.x / view.size.width) * 360;
  mouseHue = ((event.point.x / (view.size.width * 3)) * 360) + (360 * 2 / 3);
  console.log(mouseHue);
  color1.hue = mouseHue;
  color2.hue = mouseHue;
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
		duration: 4000
	});

	circleGroup.addChild(circle);
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
