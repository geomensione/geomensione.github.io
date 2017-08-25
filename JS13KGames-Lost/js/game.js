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
    h = {},
    l_i,
    
    
    mousepressed = false,
    el = d.documentElement,
    //quadrant
    qx = 0,
    qy = 0;




//start foreground layer
g.w = window.innerWidth;
g.h = window.innerHeight;
//resolution
g.r = 24;
//sprite dimension
g.s = 8;
g.dir = 39;
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
            if(sh[this.dir][yo][xo] === 'W')
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
bo.mx = 0,
bo.my = 0,
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

//bottom
la[0]=bo;
//background
la[1]=b;
//frames
la[2]=g;
//text
la[3]=t;
//hero
la[4]=h;

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
            qy--;
        return 0;
    }
}

function up(la){
   if((la.my-la.sp)>0){
        return la.my - la.sp;
   }else{
        //if(la.my>0)
        if(la.update_quadrant)
            qy++;
       return la.ry-1;
   }
}

function left(la){
    if((la.mx-la.sp)>0){
            return la.mx - la.sp;
    }else{
        //if(la.mx>0)
        if(la.update_quadrant)
            qx--;
        return la.rx-la.sp;
    }
}

function right(la){
    if((la.mx+la.sp)<la.rx){
            return la.mx + la.sp;
    }else{
        if(la.update_quadrant)
            qx--;
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
               la.mx = left(la[l]);
            }
            //x > 2/3 screen width
            else if (la[l].x > (portx*2)) {
                dir = '39';
                la.mx = right(la[l]);
            }
            else if (la[l].x > portx) {
               if (la[l].y > porty) {
                   dir = '40';
                   la.my = down(la[l]);
                }
                else{
                    dir = '38';
                    la.my = up(la[l]);
                }
            }else{		
                if(la[l].dir){		
                    la[l].dir = dir;		
                }		
            }
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
    for(let l = 0,la_l=la.length;l<la_l;l++){
        if(la[l].sp){
            if (e.keyCode == '40') {
               la[l].my = down(la[l]);
            }
            if (e.keyCode == '38') {
                la[l].my = up(la[l]);
            }
            if (e.keyCode == '37') {
               la[l].mx = left(la[l]);
            }
            if (e.keyCode == '39') {
               la[l].mx = right(la[l]);
            }
        }else{
            if(la[l].dir){		 
                  la[l].dir = e.keyCode;		
            }
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
