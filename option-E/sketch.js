// paper.install(window);
// var tool1, tool2, reset;
//
// window.onload = function() {
// 	// Setup directly from canvas id:
// 	paper.setup('myCanvas');
//
// 	var path;
//
// 	path = new Path();
// 	path.add(event.point);
//
//   tool1 = new Tool();
//   tool1.onMouseMove = function(event) {
//     path.strokeColor = 'red';
//     path.strokeWidth = 10;
//     path.add(event.point);
//   }
//
//   tool2 = new Tool();
//   tool2.onMouseMove = function(event) {
//     path.strokeColor = 'blue';
//     path.strokeWidth = 2;
//     path.add(event.point);
//   }
//
// 	paper.view.draw();
//
// }


paper.install(window);
var tool1, tool2, reset;

window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('myCanvas');

	var path;
	var circle = new Shape.Circle();
	var mousePos;
	var tween;

	var gradientStartA = new Color(0.87, 0.72, 0.27, 1);
	var gradientEndA = new Color(0.87, 0.72, 0.27, 0);
	var gradientStartB = new Color(0.88, 0.45, 0.37, 1);
	var gradientEndB = new Color(0.88, 0.45, 0.37, 0);
	var radius = 50;

	var circleGroup = new Group();

	function onMouseMove(event) {


	}

	// function onFrame(event) {
	// 	if (circleGroup.children.length > 0) {
	// 		for (var i = 0; i < circleGroup.children.length; i++) {
	// 			// console.log(circleGroup.children[i].radius);
	// 			if (circleGroup.children[i].radius = 0) {
	// 				// circleGroup.children[i].remove();
	// 			}
	// 		}
	// 	}
	// }

  tool1 = new Tool();
  tool1.onMouseMove = function(event) {
		mousePos = event.point;
		circle = new Shape.Circle({
			center: mousePos,
			radius: radius,
			fillColor: gradientStartA
		});

		tween = circle.tween({
			opacity: 1,
			'radius': radius
		}, {
			opacity: 1,
			'radius': 0
		}, {
			easing: 'easeInOutCubic',
			duration: 1000
		});

		circleGroup.addChild(circle);
		circle.fillColor = gradientStartA;
  }

  tool2 = new Tool();
  tool2.onMouseMove = function(event) {
		mousePos = event.point;
		circle = new Shape.Circle({
			center: mousePos,
			radius: radius,
			fillColor: gradientStartA
		});

		tween = circle.tween({
			opacity: 1,
			'radius': radius
		}, {
			opacity: 1,
			'radius': 0
		}, {
			easing: 'easeInOutCubic',
			duration: 1000
		});

		circleGroup.addChild(circle);
		circle.fillColor = gradientStartB;
  }

	paper.view.draw();

}
