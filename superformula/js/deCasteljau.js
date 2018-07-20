//https://gist.github.com/atomizer/1049745
function bezier(pts) {
	var points = pts;
	function fn(t) {
		for (var a = points; a.length > 1; a = b)  // do..while loop in disguise
			for (var i = 0, b = [], j; i < a.length - 1; i++)  // cycle over control points
				for (b[i] = [], j = 0; j < a[i].length; j++)  // cycle over dimensions
					b[i][j] = a[i][j] * (1 - t) + a[i+1][j] * t;  // interpolation
		return a[0];
	}
	let pointToDraw = [];
	let steps = 5;
	let steps_diff = pts.length - 3;
	if(steps_diff)
		steps = steps * steps_diff;
	for (var t = 0; t <= steps; t++) 
	      pointToDraw.push(fn(t/steps));
	return pointToDraw;
	
}
