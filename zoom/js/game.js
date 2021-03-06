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
    ma = {},
    l_i,
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

//bottom
la[0]=ma;


/*
left arrow	37
up arrow	38
right arrow	39
down arrow	40
*/

function down(la){
    if((la.my+la.sp)<la.ry){
        return la.my + la.sp;
    }else{
        if(la.update_quadrant)
            qx--;
        return 0;
    }
}

function up(la){
   if((la.my-la.sp)>0){
        return la.my - la.sp;
   }else{
        //if(la.my>0)
        if(la.update_quadrant)
            qx++;
       return la.ry-1;
   }
}

function left(la){
    if((la.mx-la.sp)>0){
            return la.mx - la.sp;
    }else{
        //if(la.mx>0)
        if(la.update_quadrant)
            qy--;
        return la.rx-la.sp;
    }
}

function right(la){
    if((la.mx+la.sp)<la.rx){
            return la.mx + la.sp;
    }else{
        if(la.update_quadrant)
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
    l_i = setInterval(function() {
        c.fillStyle = "rgb(0, 0, 0)";
        c.fillRect(0,0,la[0].w,la[0].h);
        gr();
        dr();
    }, fr);
}
    
l();
