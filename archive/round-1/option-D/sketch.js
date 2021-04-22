var lineCount = 10;
project.currentStyle = {
    fillColor: 'yellow',
    strokeColor: new Color(1, 0, 0, .2),
    strokeWidth: 2
}

var mousePos, line, lineLayer, randomAngle, randomLength;
var lineGroup = new Group();

function onMouseDown(event) {
	lineGroup = new Group();
	for (var i = 0; i < lineCount; i++) {
		randomAngle = Math.random() * 360;
		randomLength = Math.random() * 100;
		line = new Path.Line(mousePos, (mousePos + randomLength));
		line.rotate(randomAngle, mousePos);
		lineGroup.addChild(line);
	}
}

function onMouseMove(event) {
	mousePos = event.point;
	for (var i = 0; i < lineGroup.children.length; i++) {
		lineGroup.children[i].segments[0].point = mousePos;
	}
}
