var color1 = new Color(0.84, 0.64, 1.0, 0);
var color2 = new Color(0.84, 0.64, 1.0, 1);
// vec3(0.84, 0.64, 1.0)
// hsl(273, 100%, 81%)

var gradient, topLeft, bottomRight, gradientTween;

topLeft = view.bounds.leftCenter;
bottomRight = view.bounds.bottomRight;
gradient = new Shape.Rectangle({
	from: topLeft,
	to: bottomRight,
	fillColor: {
		gradient: {
			stops: [[color1, 0.3], [color2, 1]],
		},
		origin: view.bounds.center,
		destination: view.bounds.bottomCenter
	}
});

gradientTween = gradient.tween({
	opacity: 0
}, {
	opacity: 1
}, {
	easing: 'easeInOutCubic',
	duration: 2000
});

function onFrame(event) {
  color1.hue += .1;
  color2.hue += .1;
}

function onResize(event) {
	topLeft = view.bounds.leftCenter;
	bottomRight = view.bounds.bottomRight;
	gradient.from = topLeft;
	gradient.to = bottomRight;
}
