var color1 = new Color(0.84, 0.64, 1.0, 1);
var color2 = new Color(0.84, 0.64, 1.0, 0);
// vec3(0.84, 0.64, 1.0)
// hsl(273, 100%, 81%)

var circle, topLeft, bottomRight, gradientTween;

topLeft = (view.bounds.topLeft) + (view.bounds.width / 3);
bottomRight = (view.bounds.bottomRight) - (view.bounds.width / 3);
circle = new Shape.Circle({
	center: view.bounds.topLeft,
	radius: view.bounds.width / 2,
	fillColor: {
		gradient: {
			stops: [[color1, 0], [color2, 1]],
			radial: true
		},
		origin: view.bounds.topLeft,
		destination: view.bounds.topLeft + (view.bounds.width / 4)
	}
});

var circleSymbol = new SymbolDefinition(circle);

var circleInstance = new SymbolItem(circleSymbol);
circleInstance.position = topLeft;

var circleInstance = new SymbolItem(circleSymbol);
circleInstance.position = bottomRight;

gradientTween = circle.tween({
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

}
