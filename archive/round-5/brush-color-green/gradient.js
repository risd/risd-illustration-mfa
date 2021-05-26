var color1 = new Color(1.0, 0.52, 0.89, 0);
var color2 = new Color(1.0, 0.52, 0.89, 1);

var gradient, topLeft, bottomRight, gradientTween;

rectFrom = view.bounds.leftCenter - new Point(0, 200);
rectTo = view.bounds.bottomRight;
gradientFrom = view.bounds.center - new Point(0, 200);
gradientTo = view.bounds.bottomCenter;
gradient = new Shape.Rectangle({
	from: rectFrom,
	to: rectTo,
	fillColor: {
		gradient: {
			stops: [[color1, 0], [color2, 1]],
		},
		origin: gradientFrom,
		destination: gradientTo
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

function onMouseDown() {

}

function onResize(event) {
	//
	// gradient.size.height = view.bounds.size.height;
	// gradient.size.width = view.bounds.size.width;
	// gradient.position = view.bounds.center;
	// gradient.fillColor.origin = view.bounds.center;
	// gradient.fillColor.destination = view.bounds.bottomCenter;
}
