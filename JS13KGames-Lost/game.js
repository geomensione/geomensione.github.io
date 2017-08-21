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
    l_i,
    sh = [
        'W0W00000',
        'W0WW0000',
        'WWWWW000',
        'WWW0WWWW',
        'WWW0WWWW',
        'WWWWW000',
        'W0WW0000',
        'w0W00000',
    ];
//foreground layer
g.w = window.innerWidth;
g.h = window.innerHeight;
//resolution
g.r = 24;
//sprite dimension
g.s = 8;

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
            if(sh[yo][xo] === 'W')
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
    for(let i = this.mx,l = 0;l<rx;){
        if(i<rx)
            i += 1;
        else
            i = 0;
        for(let d = this.my,ll=0;ll<ry;){
            if(d<ry)
                d += 1;
            else
                d = 0;
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
//background
la[0]=b;
//frames
la[1]=g;
a.onkeydown = function(e){
    la[0].mx += 1;
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
