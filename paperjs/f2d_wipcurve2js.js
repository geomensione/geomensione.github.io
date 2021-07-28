<html>
<head>
	<style>
		#myCanvas{
			width:100%;
			height: 100%;
		}
	</style>
  <script src="js/paper.js"></script>
  <script src="js/tangents.js"></script>
<script>
	var defaultRadius = 30;
var curveStyleConeMin2Max = function(l){
	var radius=[];
	var stepDelta = defaultRadius / l;
	var step = stepDelta;
	for(var rl = 0;rl < l;rl++){
		radius.push(step);
		step += stepDelta;
	}
	return radius;
};


	var path;
	var data = [];
	
	
	
	window.onload = function() {
		document.title = 'f2d_008';
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		
		
		tool.onMouseDown = function(event) {
			
			path = new Path();
      path.fillColor = {
        hue: Math.random() * 360,
        saturation: 1,
        brightness: 1
      };

      path.add(event.point);

		}
		tool.onMouseMove = function(event){
			path.add(event.point);
			
		}
		
		tool.onMouseUp = function(event) {
			var dataCount = path.segments.length;
	    var radius = curveStyleConeMin2Max(dataCount);
      for (var s = 0;s<dataCount;s++) {
        new Path.Circle({
          center: path.segments[s].point,
          radius: radius[s],
          strokeColor: 'black',
          fillColor: 'white'
        });

      }			
		}
	
		
		
	}
</script>
</head>
<body>
<canvas id="myCanvas" resize></canvas>
</body>
</html>
