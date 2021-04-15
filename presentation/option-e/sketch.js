paper.install(window);
var tool1, tool2, tool3, tool4, tool5, reset;

window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('myCanvas');

	var path;
	var circle;
	var mousePos;
	var tween;

	var gradientStartA = new Color(0.87, 0.72, 0.27, 1);
	var gradientEndA = new Color(0.87, 0.72, 0.27, 0);
	var gradientStartB = new Color(0.88, 0.45, 0.37, 1);
	var gradientEndB = new Color(0.88, 0.45, 0.37, 0);
	var radius = 50;

	var pathGroup = new Group();

	// Tool 1
  tool1 = new Tool();
  tool1.onMouseMove = function(event) {
		mousePos = event.point;
		path = new Shape.Circle({
			center: mousePos,
			radius: radius,
			fillColor: gradientStartA
		});

		tween = path.tween({
			opacity: 1,
			'radius': radius
		}, {
			opacity: 1,
			'radius': 0
		}, {
			easing: 'easeInOutCubic',
			duration: 1000
		});

		pathGroup.addChild(path);
  }

	// Tool 2
  tool2 = new Tool();
  tool2.onMouseMove = function(event) {
		mousePos = event.point;
		path = new Shape.Circle({
			center: mousePos,
			radius: 10,
			fillColor: gradientStartB
		});

		tween = path.tween({
			opacity: 1,
			'radius': 10
		}, {
			opacity: 1,
			'radius': 0
		}, {
			easing: 'easeInOutCubic',
			duration: 1000
		});

		pathGroup.addChild(path);
  }

	// Tool 3
	var color1 = new Color(0.4, 1.0, 0.4);
	var color2 = new Color(0.4, 1.0, 0.4, 0);
  tool3 = new Tool();
  tool3.onMouseMove = function(event) {
		mousePos = event.point;
		var gradientDestX = event.point.x + 50;
		var gradientDestY = event.point.y + 50;
		path = new Shape.Circle({
			center: mousePos,
			radius: 200
		});
		path.fillColor = {
			gradient: {
				stops: [[color1, 0], [color2, 1]],
				radial: true
			},
			origin: mousePos,
			destination: mousePos.add([100, 100])
		}

		tween = path.tween({
			opacity: 1,
			'radius': 200,
			'fillColor.destination': mousePos.add([100, 100])
		}, {
			opacity: 1,
			'radius': 0,
			'fillColor.destination': mousePos
		}, {
			easing: 'easeInOutCubic',
			duration: 2000
		});

		pathGroup.addChild(path);
  }

	// Tool 4
	tool4 = new Tool();
	tool4.onMouseMove = function(event) {
		mousePos = event.point;
		path = new Path.Line({
			from: mousePos,
			to: mousePos.add([100, 100])
		});
		path.strokeColor = '#6d67e3';
		path.strokeWidth = 4;
		path.rotate(Math.random() * 360);

		tween = path.tween({
			opacity: 1
		}, {
			opacity: 0
		}, {
			easing: 'easeInOutCubic',
			duration: 2000
		});

		pathGroup.addChild(circle);
	}

	// Tool 5
	tool5 = new Tool();
	tool5.onMouseMove = function(event) {
		mousePos = event.point;
		path = new Path.Arc({
			from: mousePos,
			through: mousePos.add([100, 0]),
			to: mousePos.add([100, 100])
		});
		path.strokeColor = '#fb46ff';
		path.strokeWidth = 15;
		path.shadowColor = '#fb46ff';
		path.shadowBlur = 15;
		path.shadowOffset = 0;
		path.strokeCap = 'round';
		path.rotate(Math.random() * 360);

		tween = path.tween({
			opacity: 1
		}, {
			opacity: 0
		}, {
			easing: 'easeInOutCubic',
			duration: 2000
		});

		pathGroup.addChild(circle);
	}

	paper.view.draw();

}
