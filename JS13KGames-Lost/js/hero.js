//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 36;
//sprite dimension
h.s = 5;
//score

function random(range, negative){
    var num = Math.floor(Math.random()*range); // this will get a number between 1 and 99;
    if(negative)
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; //
    return num;
}

h.setRandomValue = function(){
    //h.qy = random(20,true);
    //h.qx = random(20,true);
    h.qy = 0;
    h.qx = 0;
    h.cx = random(this.rx);
    h.cy = random(this.ry);
    this.picked = false;
}

h.fb_fn = function(){
    this.fb = [];
    //if I've grabbed hero,I set position of the new one
    if(this.picked === undefined || this.picked){
        this.setRandomValue();
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
    function checkQuadrant(x,y){
        return (this.qx === x && this.qy === y) || ((this.qx-1) === x && this.qy === y) || ((this.qx+1) === x && this.qy === y) || (this.qx === x && (this.qy-1) === y) || (this.qx === x && (this.qy+1) === y);
    }
    //draw the sprite in fb
    if(checkQuadrant(qx,qy)){
        for(let xo = 0;xo<this.s;xo++)
        {
            for(let yo = 0;yo<this.s;yo++)
            {
                if(hero[0][yo][xo] === 'W')
                    this.fb[this.cx+xo][this.cy+yo] = ['11','FF','00'];
            }
        }
    }
    
}

h.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0;
    //draw the sprite in fb
    if(this.qx === qx && this.qy === qy){
        for(let i = sx;i<rx;i++){
            for(let d = sy;d<ry;d++){
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
}    
//end text layer
