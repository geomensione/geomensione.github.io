"use strict";

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
    l_i,
	l_spl,
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
function gr(){
    for(let l = 0,la_l=la.length;l<la_l;l++){
        var w = la[l].w;
        var h = la[l].h;
        var ox, oy = 0;
        if(h<w){
            ox = Math.round(h/la[l].r);
            la[l].ry = Math.round(h/ox);
            la[l].rx = Math.round(w/ox);
        }else{
            ox = Math.round(w/la[l].r);
            la[l].rx = Math.round(w/ox);
            la[l].ry = Math.round(h/ox);
        }
        //offset
        la[l].o = ox;
        //randomlly draw main character
        la[l].fb_fn();
        
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
	window.clearInterval(l_spl);
	gameEvents();
    l_i = setInterval(function() {
        u.clear(c,0,0,0);
		gr();
        dr();
    }, fr);
}
 
function splash(doc){
	let i = 0;
	if(l_i){
		window.clearInterval(l_i);
	}
	l_spl = setInterval(function() {
        u.clear(c,0,0,0);
		gr();
		t.fb_fn('OFFLINE-'+doc[i%5]);
		t.d_fn();
		i++;
    }, 500);
	
	d.onkeydown = (e) => {
		switch(e.key){
			case 'v':
			case 'e':
			case 'm':
			case 'h':
			case 'w':
				g.difficulty = e.key;
				l();
				break;
			case 's':
				splash(doc);
				break;
			
		}
	}
}
let doc = ['V VERY-EASY','E EASY','M MEDIUM','H HARD','W VERY-HARD'];		
splash(doc);
 
//l();

