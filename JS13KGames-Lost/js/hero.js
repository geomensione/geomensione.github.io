//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 36;
//sprite dimension
h.s = 5;
//score

function random(range, negative){
    var num = Math.floor(Math.random()*20); // this will get a number between 1 and 99;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; //
    return num;
}

function setRandomValue(){
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
        setRandomValue();
    }else{
        //create variable to decide when recreate quadrant position and coordinates of hero
        this.picked = false;
        setRandomValue()
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
    this.sc = qx+' '+qy;
    drawText(this);
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
