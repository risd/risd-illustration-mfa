// Adapted from the following Processing example:
// http://processing.org/learning/topics/follow3.html

// The amount of points in the path:
var points = 300;

// The distance between the points:
var length = 3;

var path = new Path();
var circleGroup = new Group();
var circle;

var start = view.center / [10, 1];
for (var i = 0; i < points; i++) {
	path.add(start + new Point(i * length, 0));
}
for (var j = 0; j < path.segments.length; j++) {
  circle = new Shape.Circle(path.segments[j].point, 5);
  circle.fillColor = new Color(1, 0, 0);
  circle.opacity = (j/path.segments.length);
	circleGroup.addChild(circle);
}
circleGroup.reverseChildren();

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
		circleGroup.children[i].position = segment.point - vector;
	}
}

function onMouseDown(event) {
	// path.fullySelected = true;
	// path.strokeColor = '#e08285';
}

function onMouseUp(event) {
	// path.fullySelected = false;
	// path.strokeColor = '#e4141b';
}
