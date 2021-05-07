var color1 = new Color(0.84, 0.64, 1.0, 1);
var color2 = new Color(0.84, 0.64, 1.0, 0);
// vec3(0.84, 0.64, 1.0)
// hsl(273, 100%, 81%)
var radius = 800;

var circle, randPos, animationDirection, fadeIn, fadeOut, fadeInOut, mod;
randPos = view.bounds.bottomRight * Point.random();
animationDirection = 1;

circle = new Shape.Circle({
	center: randPos,
	radius: radius,
	fillColor: {
		gradient: {
			stops: [[color1, 0], [color2, 1]],
			radial: true
		},
		origin: randPos,
		destination: randPos + (radius / 2)
	},
	opacity: 0.01
});

fadeInOut = circle.tweenTo({ opacity: 1 }, { easing: 'easeInOutCubic', duration: 4000});
fadeInOut.then(function() {
	circle.tweenTo({ opacity: 0 }, { easing: 'easeInOutCubic', duration: 4000});
});

function onFrame(event) {
	color1.hue += .1;
  color2.hue += .1;
	if (circle.opacity < 0.01) {
		randPos = view.bounds.bottomRight * Point.random();
		circle.remove();
		circle = new Shape.Circle({
			center: randPos,
			radius: radius,
			fillColor: {
				gradient: {
					stops: [[color1, 0], [color2, 1]],
					radial: true
				},
				origin: randPos,
				destination: randPos + (radius / 2)
			},
			opacity: 0.01
		});
		fadeInOut = circle.tweenTo({ opacity: 1 }, { easing: 'easeInOutCubic', duration: 4000});
		fadeInOut.then(function() {
			circle.tweenTo({ opacity: 0 }, { easing: 'easeInOutCubic', duration: 4000});
		});
	}
}

function onMouseDown() {

}

function onResize(event) {

}
