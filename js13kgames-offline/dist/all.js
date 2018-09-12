var chars = {
	'A': [
		'00100',
		'01010',
		'10001',
		'11111',
		'10001'
	],
	'B': [
		'11110',
		'10001',
		'11110',
		'10001',
		'11111'
	],
	'C': [
		'01111',
		'10000',
		'10000',
		'10000',
		'01111'
	],
	'D': [
		'11110',
		'10001',
		'10001',
		'10001',
		'11111'
	],
	'E': [
		'11111',
		'10000',
		'11100',
		'10000',
		'11111'
	],
	'F': [
		'11111',
		'10000',
		'11100',
		'10000',
		'10000'
	],
	'G': [
		'01111',
		'10000',
		'10011',
		'10001',
		'01110'
	],
	'H': [
		'10001',
		'10001',
		'11111',
		'10001',
		'10001'
	],
	'I': [
		'00100',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'J': [
		'00001',
		'00001',
		'00001',
		'10001',
		'01110'		
	],
	'K': [
		'10001',
		'10010',
		'11100',
		'10010',
		'10001'		
	],
	'L': [
		'10000',
		'10000',
		'10000',
		'10000',
		'11111'		
	],
	'M': [
		'10001',
		'11011',
		'10101',
		'10001',
		'10001'		
	],
	'N': [
		'10001',
		'11001',
		'10101',
		'10011',
		'10001'
	],
	'O': [
		'01110',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'P': [
		'11110',
		'10001',
		'11110',
		'10000',
		'10000'		
	],
	'Q': [
		'01110',
		'10001',
		'10101',
		'10011',
		'01110'		
	],
	'R': [
		'11110',
		'10001',
		'11110',
		'10001',
		'10001'		
	],
	'S': [
		'01111',
		'10000',
		'01110',
		'00001',
		'11110'		
	],
	'T': [
		'11111',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'U': [
		'10001',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'V': [
		'10001',
		'10001',
		'10001',
		'01010',
		'00100'		
	],
	'W': [
		'10001',
		'10101',
		'10101',
		'10101',
		'01010'		
	],
	'X': [
		'10001',
		'01010',
		'00100',
		'01010',
		'10001'		
	],
	'Y': [
		'10001',
		'01010',
		'00100',
		'00100',
		'00100'		
	],
	'Z': [
		'11111',
		'00010',
		'00100',
		'01000',
		'11111'		
	],
	'!': [
		'00100',
		'00100',
		'00100',
		'00000',
		'00100'		
	],
	'.': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00100'		
	],
	' ': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00000'		
	],
	'1': [
		'00010',
		'00110',
		'01010',
		'00010',
		'00010'		
	],
	'2': [
		'01110',
		'10001',
		'00010',
		'01100',
		'11111'		
	],
	'3': [
		'11110',
		'00001',
		'00110',
		'00001',
		'11110'		
	],
	'4': [
		'00010',
		'00110',
		'01010',
		'11111',
		'00010'		
	],
	'5': [
		'11111',
		'10000',
		'11110',
		'00001',
		'11110'		
	],
	'6': [
		'01111',
		'10000',
		'11110',
		'10001',
		'01110'		
	],
	'7': [
		'11111',
		'00001',
		'00010',
		'00100',
		'01000'		
	],
	'8': [
		'01110',
		'10001',
		'01110',
		'10001',
		'01110'		
	],
	'9': [
		'01110',
		'10001',
		'01111',
		'00001',
		'01110'		
	],
	'0': [
		'01110',
		'11001',
		'10101',
		'10011',
		'01110'		
	],
	'-': [
		'00000',
		'00000',
		'01110',
		'00000',
		'00000'				
	]
}

sh = {
         39:[  'W0W00000',
            'W0WW0000',
            'WWWWW000',
            'WWW0WWWW',
            'WWW0WWWW',
            'WWWWW000',
            'W0WW0000',
            'W0W00000'],
        38:[
            '000WW000',
            '000WW000',
            '000WW000',
            '00WWWW00',
            '0WW00WW0',
            'WWWWWWWW',
            '00WWWW00',
            'WWWWWWWW'],
        37:[
            '00000W0W',
            '0000WW0W',
            '000WWWWW',
            'WWWW0WWW',
            'WWWW0WWW',
            '000WWWWW',
            '0000WW0W',
            '00000W0W'],
        40:[
            'WWWWWWWW',
            '00WWWW00',
            'WWWWWWWW',
            '0WW00WW0',
            '00WWWW00',
            '000WW000',
            '000WW000',
            '000WW000']
    };

en = {
	39:[  'W0W00000',
		   'W0WW0000',
		   'WWWWW000',
		   'WWW0WWWW',
		   'WWW0WWWW',
		   'WWWWW000',
		   'W0WW0000',
		   'W0W00000'],
	   38:[
		   '000WW000',
		   '000WW000',
		   '000WW000',
		   '00WWWW00',
		   '0WW00WW0',
		   'WWWWWWWW',
		   '00WWWW00',
		   'WWWWWWWW'],
	   37:[
		   '00000W0W',
		   '0000WW0W',
		   '000WWWWW',
		   'WWWW0WWW',
		   'WWWW0WWW',
		   '000WWWWW',
		   '0000WW0W',
		   '00000W0W'],
	   40:[
		   'WWWWWWWW',
		   '00WWWW00',
		   'WWWWWWWW',
		   '0WW00WW0',
		   '00WWWW00',
		   '000WW000',
		   '000WW000',
		   '000WW000']
   };

var hero = {0:[	'WWWWW',
				'W000W',
				'WWWWW',
				'0W0W0',
				'W0W0W']};
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

u.timer;
u.startTimer = (fn,t) => {
    if(!u.timer)
        u.timer = setInterval(fn, t)
}

u.clearTimer = () => {
    window.clearInterval(u.timer);
    u.timer = false;
}

u.timerRun = () => {
    return (u.timer)?true:false;
}

window.a = document.getElementsByTagName('canvas')[0];
window.b = document.getElementsByTagName('body')[0];
window.c = window.a.getContext('2d');
window.d = document;
a.width = window.innerWidth;
a.height = window.innerHeight;

/*
JS1K start
*/
//Init layers
var la = [], 
    fr = 100, 
    t = {}, 
    g = {}, 
    b = {},
    bo = {},
    e = {},
    h = {},
    //start point when move background
    mx = 0,
    my = 0,
    //shared data
    sx = 0,
    sy = 0,
    mousepressed = false,
    el = d.documentElement,
    //quadrant
    qx = 0,
    qy = 0;

//global score
window.score = 0;
window.l_i;
window.l_spl;	
//bottom
la[la.length]=bo;
//background
la[la.length]=b;
//frames
la[la.length]=g;
//hero
la[la.length]=h;
//text
la[la.length]=t;

/*
left arrow	37
up arrow	38
right arrow	39
down arrow	40
*/

function down(_la){
    if((_la.my+_la.sp)<_la.ry){
        return _la.my + _la.sp;
    }else{
        if(_la.update_quadrant)
            qx--;
        return 0;
    }
}

function up(_la){
   if((_la.my-_la.sp)>0){
        return _la.my - _la.sp;
   }else{
        //if(la.my>0)
        if(_la.update_quadrant)
            qx++;
       return _la.ry-1;
   }
}

function left(_la){
    if((_la.mx-_la.sp)>0){
            return _la.mx - _la.sp;
    }else{
        //if(la.mx>0)
        if(_la.update_quadrant)
            qy--;
        return _la.rx-_la.sp;
    }
}

function right(_la){
    if((_la.mx+_la.sp)<_la.rx){
            return _la.mx + _la.sp;
    }else{
        if(_la.update_quadrant)
            qy++;
        return 0;
    }
}

function doInt(x,y){
    //divide screen vertically in 3 parts
    let portx = la[0].w/3;
    //divide screen horizontally in 2 parts
    let porty = la[0].h/2;
    let dir;
    for(let l = 0,la_l=la.length;l<la_l;l++){
        if(la[l].sp){
            la[l].x = x || la[l].x;
            la[l].y = y || la[l].y;
            
            if (la[l].x < portx) {
               dir = '37';
               la[l].mx = left(la[l]);
            }
            //x > 2/3 screen width
            else if (la[l].x > (portx*2)) {
                dir = '39';
                la[l].mx = right(la[l]);
            }
            else if (la[l].x > portx) {
               if (la[l].y > porty) {
                   dir = '40';
                   la[l].my = down(la[l]);
                }
                else{
                    dir = '38';
                    la[l].my = up(la[l]);
                }
            }
            sx = la[l].mx;
            sy = la[l].my;
        }
        if(la[l].dir){
            la[l].dir = dir;

        }
    }
}; 

function updateCoord(x,y){
    if(mousepressed){
        for(let l = 0,la_l=la.length;l<la_l;l++){
            la[l].x = x;
            la[l].y = y;
        }
    }
}

function gameEvents(){
	el.ontouchstart = function(e){
		mousepressed = true;
		doInt(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
	}
	el.ontouchend = function(e){
		mousepressed = false;
	}
	el.ontouchmove = function(e){
		updateCoord(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
	}

	d.onmousemove = function(e){
		updateCoord(e.clientX, e.clientY);    
	};

	d.onmouseup = function(e){
		mousepressed = false;
	};

	d.onmousedown = function(e){
		mousepressed = true;
		let x = e.clientX;
		let y = e.clientY;
		doInt(x,y);
	};

	d.onkeydown = function(e){
		e = e || window.event;
		let dir = '';
		for(let l = 0,la_l=la.length;l<la_l;l++){
			if(la[l].sp){
				if (e.keyCode == '40') {
				   la[l].my = down(la[l]);
					dir = '40';
				}
				if (e.keyCode == '38') {
					la[l].my = up(la[l]);
					dir = '38';
				}
				if (e.keyCode == '37') {
				   la[l].mx = left(la[l]);
					dir = '37';
				}
				if (e.keyCode == '39') {
				   la[l].mx = right(la[l]);
					dir = '39';
				}
				sx = la[l].mx;
				sy = la[l].my;
			}
			if(la[l].dir){
				la[l].dir = dir;
			}

		}
	}; 
	
}


//create grid
function gr(i){
    function gr_i(index){
        var w = la[index].w;
        var h = la[index].h;
        var ox, oy = 0;
        if(h<w){
            ox = Math.round(h/la[index].r);
            la[index].ry = Math.round(h/ox);
            la[index].rx = Math.round(w/ox);
        }else{
            ox = Math.round(w/la[index].r);
            la[index].rx = Math.round(w/ox);
            la[index].ry = Math.round(h/ox);
        }
        //offset
        la[index].o = ox;
        //randomlly draw main character
        if(la[index].fb_fn)
            la[index].fb_fn();
    }
    if(i)
        gr_i(i);
    else
        for(let l = 0,la_l=la.length;l<la_l;l++){
            gr_i(l);    
        }
    
}
//draw pixel using canvas api
function dr(){
    if(mousepressed)
        doInt();
    for(let l = 0,la_l=la.length;l<la_l;l++){
        la[l].d_fn();
    }
}
//every frame value, draw scene
function l(){
	u.clearInterval();
	gameEvents();
    u.startInterval(function() {
        u.clear(c,0,0,0);
		gr();
        dr();
    }, fr);
}
 
function splash(_doc){
    let i = 0;
    var array_strings;
    if(_doc)
        array_strings = _doc;
    else
        array_strings = doc;
	if(window.difficulty)
		window.difficulty = undefined;
	if(u.intervRun()){
		u.clearInterval();
    }
    u.startInterval(function() {
        u.clear(c,0,0,0);
        gr();
        if(t.fb_fn)
            t.fb_fn('OFFLINE-'+array_strings[i%5]);
        if(t.d_fn)
            t.d_fn();    
        i++;
    }, 800);
	
	d.onkeydown = (e) => {
		switch(e.key){
			case 'v':
			case 'e':
			case 'm':
			case 'h':
			case 'w':
                g.difficulty = e.key;
                if(u.intervRun()){
                    u.clearInterval();
                }
                u.startTimer(function() {
                    t.setTime();
                }, 1000);
				l();
				break;
			case 's':
				splash(doc);
				break;
			
		}
	}
}
var doc = ['V VERY-EASY','E EASY','M MEDIUM','H HARD','W VERY-HARD'];		
//splash(doc);
 
//l();

//start foreground layer
g.w = window.innerWidth;
g.h = window.innerHeight;
//resolution
g.r = 24;
//sprite dimension
g.s = 8;
g.dir = 39;
g.difficulty;
g.fb_fn = function(){
    this.fb = [];
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
    }
    let x = Math.floor((this.w/2)/this.o-(this.s/2));
    let y = Math.floor((this.h/2)/this.o-(this.s/2));
    for(let xo = 0;xo<this.s;xo++)
    {
        for(let yo = 0;yo<this.s;yo++)
        {
            if(sh[this.dir] && sh[this.dir][yo] && sh[this.dir][yo][xo] && sh[this.dir][yo][xo] === 'W')
                this.fb[x+xo][y+yo] = ['FF','FF','FF'];
        }
    }
}

g.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0;
    for(let i = 0;i<rx;i++){
        for(let d = 0;d<ry;d++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            cy += o;
        }
        cx += o;
        cy = 0;
    }
}    
//enf foreground layer
//start bottom layer
bo.w = window.innerWidth;
bo.h = window.innerHeight;
//resolution
bo.r = 96;
//sprite dimension
bo.s = 1;
//fill fb only one time
bo.do = 0;
//number of stars
bo.sts = 50;
//offset
bo.sp = 1;
//start point when move background
bo.mx = 0;
bo.my = 0;
bo.fb_fn = function(){
    if(!this.do){
        this.do = 1;
        
        this.fb = [];
        let rx = this.rx,
            ry = this.ry;
        for(let i = 0;i<rx;i++){
            this.fb[i] = [];
            for(let d = 0;d<ry;d++){
                //clear all
                this.fb[i][d] = ['00', '00', '00'];
            }
        }
        //every time is a different stars landscape
        for(let s = 0;s<this.sts;s++){
            let x = Math.floor(Math.random() * (this.rx-this.s));
            let y = Math.floor(Math.random() * (this.ry-this.s));
            this.fb[x][y] = ['11','00','AA'];       
        }
    }
    
}

bo.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        x_l = rx,
        y_l = ry;
    for(let i = this.mx,l = 0;l<rx;l++){
        for(let d = this.my,ll=0;ll<ry;ll++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            if((d+1)<ry)
                d += 1;
            else
                d = 0;
            cy += o;
        }
        if((i+1)<rx)
            i += 1;
        else
            i = 0;
        cx += o;
        cy = 0;
    }
}    
//end bottom layer
//start text layer
t.w = window.innerWidth;
t.h = window.innerHeight;
//resolution
t.r = 36;
//sprite dimension
t.s = 5;
//score
t.sc = '';


t.fb_fn = function(txt){
    this.fb = [];
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
        if(txt){
            this.sc = txt;
        }else{
            this.sc = `${window.score} ${window.dir}-${t.countDown}`;
            
            
        }
            
        u.drawText(this);
    }
}

t.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0;
    for(let i = 0;i<rx;i++){
        for(let d = 0;d<ry;d++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            cy += o;
        }
        cx += o;
        cy = 0;
    }
}    
t.countDown = 60;
t.startSeconds = 60;
t.setTime = () => {
	if((t.countDown-1)>0){
        t.countDown--;
        t.fb_fn();
    }else{
        
        t.countDown = 60;
        window.score = 0;
        window.clearInterval(window.gameInterval);
		splash(['TIME-IS-FINISHED','PRESS-S TO-RESTART']);
    }
		
}
//end text layer
//start background layer
b.w = window.innerWidth;
b.h = window.innerHeight;
//resolution
b.r = 48;
//sprite dimension
b.s = 1;
//fill fb only one time
b.do = 0;
//number of stars
b.sts = 50;
//offset
b.sp = 2;
//start point when move background
b.mx = 0;
b.my = 0;
b.update_quadrant = true;
b.fb_fn = function(){
    if(!this.do){
        this.do = 1;
        
        this.fb = [];
        let rx = this.rx,
            ry = this.ry;
        for(let i = 0;i<rx;i++){
            this.fb[i] = [];
            for(let d = 0;d<ry;d++){
                //clear all
                this.fb[i][d] = ['00', '00', '00'];
            }
        }
        //every time is a different stars landscape
        for(let s = 0;s<this.sts;s++){
            let x = Math.floor(Math.random() * (this.rx-this.s));
            let y = Math.floor(Math.random() * (this.ry-this.s));
            this.fb[x][y] = ['AA','AA','AA'];       
        }
    }
    
}

b.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        x_l = rx,
        y_l = ry;
    for(let i = this.mx,l = 0;l<rx;l++){
        for(let d = this.my,ll=0;ll<ry;ll++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            if((d+1)<ry)
                d += 1;
            else
                d = 0;
            cy += o;
        }
        if((i+1)<rx)
            i += 1;
        else
            i = 0;
        cx += o;
        cy = 0;
    }
}
//end background layer
//bkp
//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 48;
//sprite dimension
h.s = 5;
//score
h.sp = 2;
h.mx = 0;
h.my = 0;



h.setRandomValue = function(){
    h.quy = random(3,true);
    h.qux = random(3,true);
	console.log(`${h.qux} ${h.quy}`);
    h.cx = random(this.rx-h.s);
    h.cy = random(this.ry-h.s);
    this.picked = false;
}

h.fb_fn = function(){
    this.fb = [];
	
    //if I've grabbed hero,I set position of the new one
    if(this.picked === undefined || this.picked){
        u.setRandomValue(this);
        switch(g.difficulty){
            case 'v':
                t.countDown--;
                break;
            case 'e':
                t.countDown-=2;
                break;
            case 'm':
                t.countDown-=5;
                break;
            case 'h':
                t.countDown-=15;
                break;
            case 'w':
                t.countDown = Math.round(t.countDown/2);
                break;
        }
        if(this.picked)
			this.picked = false;
    }
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
    }
    for(let xo = 0;xo<this.s;xo++)
    {
        for(let yo = 0;yo<this.s;yo++)
        {
            if(hero[0][yo][xo] === 'W')
                this.fb[this.cx+xo][this.cy+yo] = ['11','FF','00'];
        }
    }
    
    
}

h.hit = function(x,y,width,height,fn){
    var imgd = c.getImageData(x, y, width, height);
    var pix = imgd.data;
	var hitColor = [255,255,255];
    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
		if(pix[i] === hitColor[0] && pix[i+1] === hitColor[1] && pix[i+2] === hitColor[2]){
            fn();
			u.clear(c,255,255,255);
			break;
		}
    }
}

h.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        d_o = 0,
        reset_cy = 0;
	var me = this;
    //draw the sprite in fb
    function checkQuadrant(_me,x,y){
        return (_me.qux === x && _me.quy === y);
    }
    window.dir = '';
	if(this.qux<qx)
		window.dir += 'D'
	if(this.qux>qx)
		window.dir += 'U'
	if(this.quy<qy)
		window.dir += 'L'
	if(this.quy>qy)
		window.dir += 'R'
	
    if(checkQuadrant(this,qx-1,qy) || checkQuadrant(this,qx,qy+1) || checkQuadrant(this,qx-1,qy+1) || checkQuadrant(this,qx,qy)){
        let init_i = 0,
			init_d = 0,
			condition_i = 0,
			condition_d = 0,
			si = 0,
			sd = 0;

        init_i = sx;
        init_d = sy;
        condition_i = rx;
        condition_d = ry;
        //wrong <- ->
        if(checkQuadrant(this,qx,qy)){
            //console.log('1');
			//condition_i = rx-sx;
            //condition_d = ry-sy;
            
		}

        //check if I'am in up quadrant
        //wrong v ^
        if(checkQuadrant(this,qx-1,qy)){
            //console.log('2');
			cy = (ry-sy)*o;
			reset_cy = (ry-sy)*o;
			init_d = (ry-sy);
			sd = (ry-sy);
			//condition_i = sx;
            //condition_d = sy;
            //cy = sy -1;
        }

        //check if I'am in the left
        if(checkQuadrant(this,qx,qy+1)){
            //console.log('3');
			cx = (rx-sx)*o;
			//init_i = condition_i;
			init_i = 0;
			
        }

        //check if I'am in the left up
        
        if(checkQuadrant(this,qx-1,qy+1)){
            //console.log('4');
			cy = (ry-sy)*o;
			reset_cy = (ry-sy)*o;
			init_d = (ry-sy);
			sd = (ry-sy);
			cx = (rx-sx)*o;
			init_i = 0;
        }
		let lock = false;
        for(let i = init_i;i<condition_i;i++){
            for(let d = init_d;d<condition_d;d++){
                if(!(this.fb[i-si] && this.fb[i-si][d-sd] && this.fb[i-si][d-sd][0]))
                    console.log('not exist '+i+', '+d);
                if(this.fb[i-si][d-sd][0] !== '00' && !lock){
                    this.hit(cx+(o/2),cy+(o/2),1,1,function(){
						lock = true;
						window.score++;
						me.picked = true;
						h.fb_fn();
						
					});
                    c.fillStyle = "#"+this.fb[i-si][d-sd][0]+this.fb[i-si][d-sd][1]+this.fb[i-si][d-sd][2];
                    c.fillRect(cx,cy,o,o);
                }else{
                    c.fillStyle = "rgba(0,255,0,0.1)";
                    c.fillRect(cx,cy,o,o);
                }
                cy += o;
            }
            cx += o;
            cy = reset_cy;
            
        }
    }
}    
//end text layer
var chars = {
	'A': [
		'00100',
		'01010',
		'10001',
		'11111',
		'10001'
	],
	'B': [
		'11110',
		'10001',
		'11110',
		'10001',
		'11111'
	],
	'C': [
		'01111',
		'10000',
		'10000',
		'10000',
		'01111'
	],
	'D': [
		'11110',
		'10001',
		'10001',
		'10001',
		'11111'
	],
	'E': [
		'11111',
		'10000',
		'11100',
		'10000',
		'11111'
	],
	'F': [
		'11111',
		'10000',
		'11100',
		'10000',
		'10000'
	],
	'G': [
		'01111',
		'10000',
		'10011',
		'10001',
		'01110'
	],
	'H': [
		'10001',
		'10001',
		'11111',
		'10001',
		'10001'
	],
	'I': [
		'00100',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'J': [
		'00001',
		'00001',
		'00001',
		'10001',
		'01110'		
	],
	'K': [
		'10001',
		'10010',
		'11100',
		'10010',
		'10001'		
	],
	'L': [
		'10000',
		'10000',
		'10000',
		'10000',
		'11111'		
	],
	'M': [
		'10001',
		'11011',
		'10101',
		'10001',
		'10001'		
	],
	'N': [
		'10001',
		'11001',
		'10101',
		'10011',
		'10001'
	],
	'O': [
		'01110',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'P': [
		'11110',
		'10001',
		'11110',
		'10000',
		'10000'		
	],
	'Q': [
		'01110',
		'10001',
		'10101',
		'10011',
		'01110'		
	],
	'R': [
		'11110',
		'10001',
		'11110',
		'10001',
		'10001'		
	],
	'S': [
		'01111',
		'10000',
		'01110',
		'00001',
		'11110'		
	],
	'T': [
		'11111',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'U': [
		'10001',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'V': [
		'10001',
		'10001',
		'10001',
		'01010',
		'00100'		
	],
	'W': [
		'10001',
		'10101',
		'10101',
		'10101',
		'01010'		
	],
	'X': [
		'10001',
		'01010',
		'00100',
		'01010',
		'10001'		
	],
	'Y': [
		'10001',
		'01010',
		'00100',
		'00100',
		'00100'		
	],
	'Z': [
		'11111',
		'00010',
		'00100',
		'01000',
		'11111'		
	],
	'!': [
		'00100',
		'00100',
		'00100',
		'00000',
		'00100'		
	],
	'.': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00100'		
	],
	' ': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00000'		
	],
	'1': [
		'00010',
		'00110',
		'01010',
		'00010',
		'00010'		
	],
	'2': [
		'01110',
		'10001',
		'00010',
		'01100',
		'11111'		
	],
	'3': [
		'11110',
		'00001',
		'00110',
		'00001',
		'11110'		
	],
	'4': [
		'00010',
		'00110',
		'01010',
		'11111',
		'00010'		
	],
	'5': [
		'11111',
		'10000',
		'11110',
		'00001',
		'11110'		
	],
	'6': [
		'01111',
		'10000',
		'11110',
		'10001',
		'01110'		
	],
	'7': [
		'11111',
		'00001',
		'00010',
		'00100',
		'01000'		
	],
	'8': [
		'01110',
		'10001',
		'01110',
		'10001',
		'01110'		
	],
	'9': [
		'01110',
		'10001',
		'01111',
		'00001',
		'01110'		
	],
	'0': [
		'01110',
		'11001',
		'10101',
		'10011',
		'01110'		
	],
	'-': [
		'00000',
		'00000',
		'01110',
		'00000',
		'00000'				
	]
}

sh = {
         39:[  'W0W00000',
            'W0WW0000',
            'WWWWW000',
            'WWW0WWWW',
            'WWW0WWWW',
            'WWWWW000',
            'W0WW0000',
            'W0W00000'],
        38:[
            '000WW000',
            '000WW000',
            '000WW000',
            '00WWWW00',
            '0WW00WW0',
            'WWWWWWWW',
            '00WWWW00',
            'WWWWWWWW'],
        37:[
            '00000W0W',
            '0000WW0W',
            '000WWWWW',
            'WWWW0WWW',
            'WWWW0WWW',
            '000WWWWW',
            '0000WW0W',
            '00000W0W'],
        40:[
            'WWWWWWWW',
            '00WWWW00',
            'WWWWWWWW',
            '0WW00WW0',
            '00WWWW00',
            '000WW000',
            '000WW000',
            '000WW000']
    };

en = {
	39:[  'W0W00000',
		   'W0WW0000',
		   'WWWWW000',
		   'WWW0WWWW',
		   'WWW0WWWW',
		   'WWWWW000',
		   'W0WW0000',
		   'W0W00000'],
	   38:[
		   '000WW000',
		   '000WW000',
		   '000WW000',
		   '00WWWW00',
		   '0WW00WW0',
		   'WWWWWWWW',
		   '00WWWW00',
		   'WWWWWWWW'],
	   37:[
		   '00000W0W',
		   '0000WW0W',
		   '000WWWWW',
		   'WWWW0WWW',
		   'WWWW0WWW',
		   '000WWWWW',
		   '0000WW0W',
		   '00000W0W'],
	   40:[
		   'WWWWWWWW',
		   '00WWWW00',
		   'WWWWWWWW',
		   '0WW00WW0',
		   '00WWWW00',
		   '000WW000',
		   '000WW000',
		   '000WW000']
   };

var hero = {0:[	'WWWWW',
				'W000W',
				'WWWWW',
				'0W0W0',
				'W0W0W']};
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

u.timer;
u.startTimer = (fn,t) => {
    if(!u.timer)
        u.timer = setInterval(fn, t)
}

u.clearTimer = () => {
    window.clearInterval(u.timer);
    u.timer = false;
}

u.timerRun = () => {
    return (u.timer)?true:false;
}

window.a = document.getElementsByTagName('canvas')[0];
window.b = document.getElementsByTagName('body')[0];
window.c = window.a.getContext('2d');
window.d = document;
a.width = window.innerWidth;
a.height = window.innerHeight;

/*
JS1K start
*/
//Init layers
var la = [], 
    fr = 100, 
    t = {}, 
    g = {}, 
    b = {},
    bo = {},
    e = {},
    h = {},
    //start point when move background
    mx = 0,
    my = 0,
    //shared data
    sx = 0,
    sy = 0,
    mousepressed = false,
    el = d.documentElement,
    //quadrant
    qx = 0,
    qy = 0;

//global score
window.score = 0;
window.l_i;
window.l_spl;	
//bottom
la[la.length]=bo;
//background
la[la.length]=b;
//frames
la[la.length]=g;
//hero
la[la.length]=h;
//text
la[la.length]=t;

/*
left arrow	37
up arrow	38
right arrow	39
down arrow	40
*/

function down(_la){
    if((_la.my+_la.sp)<_la.ry){
        return _la.my + _la.sp;
    }else{
        if(_la.update_quadrant)
            qx--;
        return 0;
    }
}

function up(_la){
   if((_la.my-_la.sp)>0){
        return _la.my - _la.sp;
   }else{
        //if(la.my>0)
        if(_la.update_quadrant)
            qx++;
       return _la.ry-1;
   }
}

function left(_la){
    if((_la.mx-_la.sp)>0){
            return _la.mx - _la.sp;
    }else{
        //if(la.mx>0)
        if(_la.update_quadrant)
            qy--;
        return _la.rx-_la.sp;
    }
}

function right(_la){
    if((_la.mx+_la.sp)<_la.rx){
            return _la.mx + _la.sp;
    }else{
        if(_la.update_quadrant)
            qy++;
        return 0;
    }
}

function doInt(x,y){
    //divide screen vertically in 3 parts
    let portx = la[0].w/3;
    //divide screen horizontally in 2 parts
    let porty = la[0].h/2;
    let dir;
    for(let l = 0,la_l=la.length;l<la_l;l++){
        if(la[l].sp){
            la[l].x = x || la[l].x;
            la[l].y = y || la[l].y;
            
            if (la[l].x < portx) {
               dir = '37';
               la[l].mx = left(la[l]);
            }
            //x > 2/3 screen width
            else if (la[l].x > (portx*2)) {
                dir = '39';
                la[l].mx = right(la[l]);
            }
            else if (la[l].x > portx) {
               if (la[l].y > porty) {
                   dir = '40';
                   la[l].my = down(la[l]);
                }
                else{
                    dir = '38';
                    la[l].my = up(la[l]);
                }
            }
            sx = la[l].mx;
            sy = la[l].my;
        }
        if(la[l].dir){
            la[l].dir = dir;

        }
    }
}; 

function updateCoord(x,y){
    if(mousepressed){
        for(let l = 0,la_l=la.length;l<la_l;l++){
            la[l].x = x;
            la[l].y = y;
        }
    }
}

function gameEvents(){
	el.ontouchstart = function(e){
		mousepressed = true;
		doInt(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
	}
	el.ontouchend = function(e){
		mousepressed = false;
	}
	el.ontouchmove = function(e){
		updateCoord(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
	}

	d.onmousemove = function(e){
		updateCoord(e.clientX, e.clientY);    
	};

	d.onmouseup = function(e){
		mousepressed = false;
	};

	d.onmousedown = function(e){
		mousepressed = true;
		let x = e.clientX;
		let y = e.clientY;
		doInt(x,y);
	};

	d.onkeydown = function(e){
		e = e || window.event;
		let dir = '';
		for(let l = 0,la_l=la.length;l<la_l;l++){
			if(la[l].sp){
				if (e.keyCode == '40') {
				   la[l].my = down(la[l]);
					dir = '40';
				}
				if (e.keyCode == '38') {
					la[l].my = up(la[l]);
					dir = '38';
				}
				if (e.keyCode == '37') {
				   la[l].mx = left(la[l]);
					dir = '37';
				}
				if (e.keyCode == '39') {
				   la[l].mx = right(la[l]);
					dir = '39';
				}
				sx = la[l].mx;
				sy = la[l].my;
			}
			if(la[l].dir){
				la[l].dir = dir;
			}

		}
	}; 
	
}


//create grid
function gr(i){
    function gr_i(index){
        var w = la[index].w;
        var h = la[index].h;
        var ox, oy = 0;
        if(h<w){
            ox = Math.round(h/la[index].r);
            la[index].ry = Math.round(h/ox);
            la[index].rx = Math.round(w/ox);
        }else{
            ox = Math.round(w/la[index].r);
            la[index].rx = Math.round(w/ox);
            la[index].ry = Math.round(h/ox);
        }
        //offset
        la[index].o = ox;
        //randomlly draw main character
        if(la[index].fb_fn)
            la[index].fb_fn();
    }
    if(i)
        gr_i(i);
    else
        for(let l = 0,la_l=la.length;l<la_l;l++){
            gr_i(l);    
        }
    
}
//draw pixel using canvas api
function dr(){
    if(mousepressed)
        doInt();
    for(let l = 0,la_l=la.length;l<la_l;l++){
        la[l].d_fn();
    }
}
//every frame value, draw scene
function l(){
	u.clearInterval();
	gameEvents();
    u.startInterval(function() {
        u.clear(c,0,0,0);
		gr();
        dr();
    }, fr);
}
 
function splash(_doc){
    let i = 0;
    var array_strings;
    if(_doc)
        array_strings = _doc;
    else
        array_strings = doc;
	if(window.difficulty)
		window.difficulty = undefined;
	if(u.intervRun()){
		u.clearInterval();
    }
    u.startInterval(function() {
        u.clear(c,0,0,0);
        gr();
        if(t.fb_fn)
            t.fb_fn('OFFLINE-'+array_strings[i%5]);
        if(t.d_fn)
            t.d_fn();    
        i++;
    }, 800);
	
	d.onkeydown = (e) => {
		switch(e.key){
			case 'v':
			case 'e':
			case 'm':
			case 'h':
			case 'w':
                g.difficulty = e.key;
                if(u.intervRun()){
                    u.clearInterval();
                }
                u.startTimer(function() {
                    t.setTime();
                }, 1000);
				l();
				break;
			case 's':
				splash(doc);
				break;
			
		}
	}
}
var doc = ['V VERY-EASY','E EASY','M MEDIUM','H HARD','W VERY-HARD'];		
//splash(doc);
 
//l();

//start foreground layer
g.w = window.innerWidth;
g.h = window.innerHeight;
//resolution
g.r = 24;
//sprite dimension
g.s = 8;
g.dir = 39;
g.difficulty;
g.fb_fn = function(){
    this.fb = [];
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
    }
    let x = Math.floor((this.w/2)/this.o-(this.s/2));
    let y = Math.floor((this.h/2)/this.o-(this.s/2));
    for(let xo = 0;xo<this.s;xo++)
    {
        for(let yo = 0;yo<this.s;yo++)
        {
            if(sh[this.dir] && sh[this.dir][yo] && sh[this.dir][yo][xo] && sh[this.dir][yo][xo] === 'W')
                this.fb[x+xo][y+yo] = ['FF','FF','FF'];
        }
    }
}

g.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0;
    for(let i = 0;i<rx;i++){
        for(let d = 0;d<ry;d++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            cy += o;
        }
        cx += o;
        cy = 0;
    }
}    
//enf foreground layer
//start bottom layer
bo.w = window.innerWidth;
bo.h = window.innerHeight;
//resolution
bo.r = 96;
//sprite dimension
bo.s = 1;
//fill fb only one time
bo.do = 0;
//number of stars
bo.sts = 50;
//offset
bo.sp = 1;
//start point when move background
bo.mx = 0;
bo.my = 0;
bo.fb_fn = function(){
    if(!this.do){
        this.do = 1;
        
        this.fb = [];
        let rx = this.rx,
            ry = this.ry;
        for(let i = 0;i<rx;i++){
            this.fb[i] = [];
            for(let d = 0;d<ry;d++){
                //clear all
                this.fb[i][d] = ['00', '00', '00'];
            }
        }
        //every time is a different stars landscape
        for(let s = 0;s<this.sts;s++){
            let x = Math.floor(Math.random() * (this.rx-this.s));
            let y = Math.floor(Math.random() * (this.ry-this.s));
            this.fb[x][y] = ['11','00','AA'];       
        }
    }
    
}

bo.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        x_l = rx,
        y_l = ry;
    for(let i = this.mx,l = 0;l<rx;l++){
        for(let d = this.my,ll=0;ll<ry;ll++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            if((d+1)<ry)
                d += 1;
            else
                d = 0;
            cy += o;
        }
        if((i+1)<rx)
            i += 1;
        else
            i = 0;
        cx += o;
        cy = 0;
    }
}    
//end bottom layer
//start text layer
t.w = window.innerWidth;
t.h = window.innerHeight;
//resolution
t.r = 36;
//sprite dimension
t.s = 5;
//score
t.sc = '';


t.fb_fn = function(txt){
    this.fb = [];
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
        if(txt){
            this.sc = txt;
        }else{
            this.sc = `${window.score} ${window.dir}-${t.countDown}`;
            
            
        }
            
        u.drawText(this);
    }
}

t.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0;
    for(let i = 0;i<rx;i++){
        for(let d = 0;d<ry;d++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            cy += o;
        }
        cx += o;
        cy = 0;
    }
}    
t.countDown = 60;
t.startSeconds = 60;
t.setTime = () => {
	if((t.countDown-1)>0){
        t.countDown--;
        t.fb_fn();
    }else{
        
        t.countDown = 60;
        window.score = 0;
        window.clearInterval(window.gameInterval);
		splash(['TIME-IS-FINISHED','PRESS-S TO-RESTART']);
    }
		
}
//end text layer
//start background layer
b.w = window.innerWidth;
b.h = window.innerHeight;
//resolution
b.r = 48;
//sprite dimension
b.s = 1;
//fill fb only one time
b.do = 0;
//number of stars
b.sts = 50;
//offset
b.sp = 2;
//start point when move background
b.mx = 0;
b.my = 0;
b.update_quadrant = true;
b.fb_fn = function(){
    if(!this.do){
        this.do = 1;
        
        this.fb = [];
        let rx = this.rx,
            ry = this.ry;
        for(let i = 0;i<rx;i++){
            this.fb[i] = [];
            for(let d = 0;d<ry;d++){
                //clear all
                this.fb[i][d] = ['00', '00', '00'];
            }
        }
        //every time is a different stars landscape
        for(let s = 0;s<this.sts;s++){
            let x = Math.floor(Math.random() * (this.rx-this.s));
            let y = Math.floor(Math.random() * (this.ry-this.s));
            this.fb[x][y] = ['AA','AA','AA'];       
        }
    }
    
}

b.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        x_l = rx,
        y_l = ry;
    for(let i = this.mx,l = 0;l<rx;l++){
        for(let d = this.my,ll=0;ll<ry;ll++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            if((d+1)<ry)
                d += 1;
            else
                d = 0;
            cy += o;
        }
        if((i+1)<rx)
            i += 1;
        else
            i = 0;
        cx += o;
        cy = 0;
    }
}
//end background layer
//bkp
//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 48;
//sprite dimension
h.s = 5;
//score
h.sp = 2;
h.mx = 0;
h.my = 0;



h.setRandomValue = function(){
    h.quy = random(3,true);
    h.qux = random(3,true);
	console.log(`${h.qux} ${h.quy}`);
    h.cx = random(this.rx-h.s);
    h.cy = random(this.ry-h.s);
    this.picked = false;
}

h.fb_fn = function(){
    this.fb = [];
	
    //if I've grabbed hero,I set position of the new one
    if(this.picked === undefined || this.picked){
        u.setRandomValue(this);
        switch(g.difficulty){
            case 'v':
                t.countDown--;
                break;
            case 'e':
                t.countDown-=2;
                break;
            case 'm':
                t.countDown-=5;
                break;
            case 'h':
                t.countDown-=15;
                break;
            case 'w':
                t.countDown = Math.round(t.countDown/2);
                break;
        }
        if(this.picked)
			this.picked = false;
    }
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
    }
    for(let xo = 0;xo<this.s;xo++)
    {
        for(let yo = 0;yo<this.s;yo++)
        {
            if(hero[0][yo][xo] === 'W')
                this.fb[this.cx+xo][this.cy+yo] = ['11','FF','00'];
        }
    }
    
    
}

h.hit = function(x,y,width,height,fn){
    var imgd = c.getImageData(x, y, width, height);
    var pix = imgd.data;
	var hitColor = [255,255,255];
    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
		if(pix[i] === hitColor[0] && pix[i+1] === hitColor[1] && pix[i+2] === hitColor[2]){
            fn();
			u.clear(c,255,255,255);
			break;
		}
    }
}

h.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        d_o = 0,
        reset_cy = 0;
	var me = this;
    //draw the sprite in fb
    function checkQuadrant(_me,x,y){
        return (_me.qux === x && _me.quy === y);
    }
    window.dir = '';
	if(this.qux<qx)
		window.dir += 'D'
	if(this.qux>qx)
		window.dir += 'U'
	if(this.quy<qy)
		window.dir += 'L'
	if(this.quy>qy)
		window.dir += 'R'
	
    if(checkQuadrant(this,qx-1,qy) || checkQuadrant(this,qx,qy+1) || checkQuadrant(this,qx-1,qy+1) || checkQuadrant(this,qx,qy)){
        let init_i = 0,
			init_d = 0,
			condition_i = 0,
			condition_d = 0,
			si = 0,
			sd = 0;

        init_i = sx;
        init_d = sy;
        condition_i = rx;
        condition_d = ry;
        //wrong <- ->
        if(checkQuadrant(this,qx,qy)){
            //console.log('1');
			//condition_i = rx-sx;
            //condition_d = ry-sy;
            
		}

        //check if I'am in up quadrant
        //wrong v ^
        if(checkQuadrant(this,qx-1,qy)){
            //console.log('2');
			cy = (ry-sy)*o;
			reset_cy = (ry-sy)*o;
			init_d = (ry-sy);
			sd = (ry-sy);
			//condition_i = sx;
            //condition_d = sy;
            //cy = sy -1;
        }

        //check if I'am in the left
        if(checkQuadrant(this,qx,qy+1)){
            //console.log('3');
			cx = (rx-sx)*o;
			//init_i = condition_i;
			init_i = 0;
			
        }

        //check if I'am in the left up
        
        if(checkQuadrant(this,qx-1,qy+1)){
            //console.log('4');
			cy = (ry-sy)*o;
			reset_cy = (ry-sy)*o;
			init_d = (ry-sy);
			sd = (ry-sy);
			cx = (rx-sx)*o;
			init_i = 0;
        }
		let lock = false;
        for(let i = init_i;i<condition_i;i++){
            for(let d = init_d;d<condition_d;d++){
                if(!(this.fb[i-si] && this.fb[i-si][d-sd] && this.fb[i-si][d-sd][0]))
                    console.log('not exist '+i+', '+d);
                if(this.fb[i-si][d-sd][0] !== '00' && !lock){
                    this.hit(cx+(o/2),cy+(o/2),1,1,function(){
						lock = true;
						window.score++;
						me.picked = true;
						h.fb_fn();
						
					});
                    c.fillStyle = "#"+this.fb[i-si][d-sd][0]+this.fb[i-si][d-sd][1]+this.fb[i-si][d-sd][2];
                    c.fillRect(cx,cy,o,o);
                }else{
                    c.fillStyle = "rgba(0,255,0,0.1)";
                    c.fillRect(cx,cy,o,o);
                }
                cy += o;
            }
            cx += o;
            cy = reset_cy;
            
        }
    }
}    