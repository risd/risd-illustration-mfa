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
var circle = new Path.Circle({
	center: view.center,
	radius: radius,
	fillColor: {
		gradient: {
			stops: [[color1, 0], [color2, 1]],
			radial: true
		},
		origin: view.center,
		destination: view.center + (radius / 2)
  }
});

var circleSymbol = new SymbolDefinition(circle);
var circleInstance, mousePos;
circleInstance = circleSymbol.place();

function onMouseMove(event) {
	mousePos = event.point;
	circleInstance = circleSymbol.place();
	circleInstance.position = mousePos;
	// console.log(circleInstance);
	circleInstance.tween({
		opacity: 1,
		'definition.item.radius': 20
	}, {
		opacity: 0,
		'definition.item.radius': 0
	}, {
		easing: 'easeInOutCubic',
		duration: 2000
	});

	if (circleInstance.opacity = 0) {
		circleInstance.remove();
	}
}

function onMouseDown(event) {
	randomHue = Math.random() * 360;
	color1.hue = randomHue;
	color2.hue = randomHue;
	circleInstance.definition.item.fillColor.gradient = {
		stops: [[color1, 0], [color2, 1]],
		radial: true
  };
}
