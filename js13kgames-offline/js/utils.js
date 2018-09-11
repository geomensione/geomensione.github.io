var u = {};
//tl -> text layer
u.drawText = (tl) => {
	var x = 1;
    var y = 1;
    if(tl.sc.indexOf('-')!==-1){
        let parts = tl.sc.split('-');
        let parts_l = parts.length;
        for(let p = 0;p<parts_l;p++){
            let p_p_l = parts[p].length;
            for(var i=0; i < p_p_l; i++) {
                x += u.drawLetter(tl, x, y, parts[p].charAt(i), ['EE','EE','11']) + 1;
            }
            x = 0;
            y += chars[0].length + 1;
        }
        
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
u.interval;
u.startInterval = (fn,t) => {
    if(!u.interval)
        u.interval = setInterval(fn, t)
}

u.clearInterval = () => {
    window.clearInterval(u.interval);
    u.interval = false;
}

u.intervRun = () => {
    return (u.interval)?true:false;
}

