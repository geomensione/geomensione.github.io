

TAN_HALF_PI=Math.tan(Math.PI/2)

function direction(d){
	var horiz=(Math.abs(d.x)>Math.abs(d.z))
	if (horiz){
		if (d.x<0) return 0;
		return 1;
	}else{
		if (d.y<0) return 2;
		return 3;
	}
}

colors=['rgba(255,0,0,0.5)',
			  'rgba(0,255,0,0.5)',
			  'rgba(0,0,255,0.5)',
			  'rgba(200,200,0,0.5)',
			  ]

function vector(x, z){
	return {
		x:x, 
		z:z,
	}
}
			  
function delta(a, b){
	return vector(a.x - b.x, a.z - b.z)
}

function angle(d){
	return Math.atan((1.0*d.y)/d.z)
}

function angle_between(a, b){
	return Math.acos((a.x*b.x + a.z*b.z)/(len(a)*len(b)))
}

function len(v){
	return Math.sqrt(v.x*v.x + v.z*v.z)
}

function unit(c){
	var l=len(c)
	return vector(c.x/len(c), c.z/len(c))
}

function scale(c, f){
	return vector(c.x*f, c.z*f)
}

function add(a, b){
	return vector(a.x+b.x, a.z+b.z)
}

function rotate(v, a){
	return vector(	v.x*Math.cos(a) - v.z*Math.sin(a),
					v.x*Math.sin(a) + v.z*Math.cos(a))
}

function average(l){
	var x=0
	var z=0
	for (var i=0; i<l.length; i++){x+=l[i].x; z+=l[i].z}
	return vector(x/l.length, z/l.length)
}
