tool.minDistance = 10;
tool.maxDistance = 45;

var brushColor = Math.random() * 360;
var brushTip = new Path.Circle(view.center, 10);
brushTip.fillColor = {
	hue: brushColor,
	saturation: 1,
	brightness: 1
};
var path;

function onMouseDown(event) {
	path = new Path();
	path.fillColor = {
		hue: brushColor,
		saturation: 1,
		brightness: 1,
	};

	path.add(event.point);
}

function onMouseDrag(event) {
	var step = event.delta / 2;
	step.angle += 90;

	var top = event.middlePoint + step;
	var bottom = event.middlePoint - step;

	path.add(top);
	path.insert(0, bottom);
	path.smooth();
}

function onMouseUp(event) {
	path.add(event.point);
	path.closed = true;
	path.smooth();
	brushColor = Math.random() * 360;
	brushTip.fillColor = {
		hue: brushColor,
		saturation: 1,
		brightness: 1
	};
	brushTip.bringToFront();
  brushTip.position = event.point;
}

function onMouseMove(event) {
	brushTip.position = event.point;
}
