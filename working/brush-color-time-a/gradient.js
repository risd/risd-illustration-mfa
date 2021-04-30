var color1 = new Color(0.84, 0.64, 1.0, 0);
var color2 = new Color(0.84, 0.64, 1.0, 1);
// vec3(0.84, 0.64, 1.0)
// hsl(273, 100%, 81%)

var gradient, topLeft, bottomRight, gradientTween;

rectFrom = view.bounds.leftCenter;
rectTo = view.bounds.bottomRight;
gradientFrom = view.bounds.center;
gradientTo = view.bounds.bottomCenter + new Point(0, 40);
gradient = new Shape.Rectangle({
	from: rectFrom,
	to: rectTo,
	fillColor: {
		gradient: {
			stops: [[color1, 0.3], [color2, 1]],
		},
		origin: gradientFrom,
		destination: gradientTo
	}
});
console.log(gradient);

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
