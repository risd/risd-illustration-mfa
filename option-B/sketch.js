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

var circle;
// circle = new Shape.Circle({
// 	center: view.center,
// 	radius: radius,
// 	fillColor: {
// 		gradient: {
// 			stops: [[color1, 0], [color2, 1]],
// 			radial: true
// 		},
// 		origin: view.center,
// 		destination: view.center + (radius / 2)
// 	}
// });


var circleInstance, mousePos;
var circleGroup = new Group();

function onMouseMove(event) {
	mousePos = event.point;
	var circle = new Shape.Circle({
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

	circle.tween({
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
