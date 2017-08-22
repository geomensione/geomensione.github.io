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
    g = {}, 
    b = {},
    bo = {},
    l_i,
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
//foreground layer
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


//bottom
la[0]=bo;
//background
la[1]=b;
//frames
la[2]=g;
/*
left arrow	37
up arrow	38
right arrow	39
down arrow	40
*/

function down(la){
    if((la.my+la.sp)<la.ry)
        return la.my + la.sp;
    else
        return 0;
}

function up(la){
   if((la.my-la.sp)>0)
        return la.my - la.sp;
   else
        return la.ry-1;
}

function left(la){
    if((la.mx-la.sp)>0)
            return la[l].mx - la[l].sp;
    else
            return la[l].rx-la[l].sp;
}

function right(la){
    if((la.mx+la.sp)<la.rx)
            return la[l].mx + la[l].sp;
       else
            return = 0;
}

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
               la[l].my = left(la[l]);
            }
            if (e.keyCode == '39') {
               la[l].mx = right();
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
