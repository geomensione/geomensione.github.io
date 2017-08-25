//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 36;
//sprite dimension
h.s = 5;
//score
h.hero = true;

function random(range, negative){
    var num = Math.floor(Math.random()*range); // this will get a number between 1 and 99;
    if(negative)
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; //
    return num;
}

h.setRandomValue = function(){
    h.qy = random(20,true);
    h.qx = random(20,true);
    h.cx = random(this.rx);
    h.cy = random(this.ry);
    this.picked = false;
}

h.fb_fn = function(){
    this.fb = [];
    //if I've grabbed hero,I set position of the new one
    if(this.picked){
        this.setRandomValue();
    }else{
        //create variable to decide when recreate quadrant position and coordinates of hero
        this.picked = false;
        this.setRandomValue()
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
    if(this.qx === qx && this.qy === qy){
        for(let xo = 0;xo<this.s;xo++)
        {
            for(let yo = 0;yo<this.s;yo++)
            {
                if(sh[this.dir][yo][xo] === 'W')
                    this.fb[this.cx+xo][this.cy+yo] = ['FF','FF','FF'];
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
//end text layer
