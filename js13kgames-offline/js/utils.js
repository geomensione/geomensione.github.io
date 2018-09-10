var u = {};
//tl -> text layer
u.drawText = (tl) => {
	var x = 1;
	var y = 1;
	for(var i=0; i < tl.sc.length; i++) {
		x += u.drawLetter(tl, x, y, tl.sc.charAt(i), ['EE','EE','11']) + 1;
	}
}

u.drawLetter = (tl, x, y, chr, c) => {
	var l = chars[chr];
    	if(!l) { return 0; }
	for(var i=0; i < l[0].length; i++) {
		for(var j=0; j < l.length; j++) {
			if(l[j].charAt(i) === "1") {
				if(tl['fb'] && tl['fb'][x+i] && tl['fb'][x+i][y+j])
					tl['fb'][x+i][y+j] = c;
			}
		}
	}
	return l[0].length;
}

u.random = (range, negative)=>{
    var num = Math.floor(Math.random()*range); // this will get a number between 1 and 99;
    if(negative)
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; //
    return num;
}

u.setRandomValue = function(obj){
    obj.quy = u.random(3,true);
    obj.qux = u.random(3,true);
	console.log(`${obj.qux} ${obj.quy}`)
    //h.quy = 0;
    //h.qux = 0;
    obj.cx = u.random(obj.rx);
    obj.cy = u.random(obj.ry);
    obj.picked = false;
}

u.clear = (c,r,g,b) => {
	c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    c.fillRect(0,0,la[0].w,la[0].h);
}


