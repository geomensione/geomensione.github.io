function getTangents(x1,y1,r1,x2,y2,r2){
    	
	if (r1 < r2){
		var temp = r1;
		r1 = r2;
		r2 = temp;
		cen1x = x2; 
		cen1y = y2;
		cen2x = x1; 
		cen2y = y1;
	} else {
		cen1x = x1; 
		cen1y = y1;
		cen2x = x2; 
		cen2y = y2;
	}
	//Distance between two centres
	var cendistance = Math.sqrt((cen1x-cen2x)*(cen1x-cen2x) + (cen1y-cen2y)*(cen1y-cen2y));
	var a = cendistance*r2/Math.max(r1-r2,0.0000001);
	//Coordinates at the vertex
	var vx = cen2x + (cen2x - cen1x)/cendistance*a;
	var vy = cen2y + (cen2y - cen1y)/cendistance*a;
	//Angle between line joining two centres and the x-axis
	var pheta = Math.atan2(cen1y-cen2y,cen1x-cen2x);
	//Angle between line joining two centres and the common tangent
	var phi = Math.asin(r2/a);
	//One tangent is at the angle (pheta-phi) with x-axis; the other is (pheta+phi)
	var tan1angle = pheta - phi;
	var tan2angle = pheta + phi;
	//Find the length of tangents (to C1 and C2)
	var criterion = a*a-r2*r2;
	if (criterion < 0){
		console.log('criterion < 0');
	}
	t1 = Math.sqrt(criterion);
	t2 = Math.sqrt((cendistance+a)*(cendistance+a)-r1*r1);
	//Find the points of contact; this sequence is used to form a polygon
	var poc1x = vx + Math.cos(tan1angle)*t1; var poc1y = vy + Math.sin(tan1angle)*t1;
	var poc2x = vx + Math.cos(tan1angle)*t2; var poc2y = vy + Math.sin(tan1angle)*t2;
	var poc3x = vx + Math.cos(tan2angle)*t2; var poc3y = vy + Math.sin(tan2angle)*t2;
	var poc4x = vx + Math.cos(tan2angle)*t1; var poc4y = vy + Math.sin(tan2angle)*t1;
	
	return [{x:poc2x,y:poc2y},{x:poc1x,y:poc1y},{x:poc4x,y:poc4y},{x:poc3x,y:poc3y}];

    				
    				
    	
    	}
