paper.install(window);
var tool1, tool2, reset;
var path;

window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('myCanvas');

	path = new Path();
	path.add(event.point);

  tool1 = new Tool();
  tool1.onMouseMove = function(event) {
    path.strokeColor = 'red';
    path.strokeWidth = 10;
    path.add(event.point);
  }

  tool2 = new Tool();
  tool2.onMouseMove = function(event) {
    path.strokeColor = 'blue';
    path.strokeWidth = 2;
    path.add(event.point);
  }

}

view.draw();
