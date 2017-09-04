//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 48;
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
    h.quy = 0;
    h.qux = 0;
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
    for(let xo = 0;xo<this.s;xo++)
    {
        for(let yo = 0;yo<this.s;yo++)
        {
            if(hero[0][yo][xo] === 'W')
                this.fb[this.cx+xo][this.cy+yo] = ['11','FF','00'];
        }
    }
    
    
}

h.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        reset_cy = 0;
    //draw the sprite in fb
    function checkQuadrant(me,x,y){
        /*
        to print correctly hero quadrant we need to change loop conditions:
        1-I'm in the same quadrant and I'm going down or right 
            for(let i = sx;i<rx;i++){
                for(let d = sy;d<ry;d++){
        2-up or left 
            for(let i = 0;i<sx;i++){
                for(let d = 0;d<sy;d++){
        */
        return (me.qux === x && me.quy === y);
    }
    let init_i,init_d,condition_i,condition_d = 0;
    
    init_i = sx;
    init_d = sy;
    condition_i = rx;
    condition_d = ry;

    //check if I'am in up quadrant
    
    if(checkQuadrant(this,qx-1,qy)){
        init_d = ry-sy;
        reset_cy = (ry - sy)*o;
        //init_i = 0;
        //condition_d = ry;
        cy = (ry - sy)*o;
    }
    
    //check if I'am in the left
    if(checkQuadrant(this,qx,qy+1)){
        init_i = 0;
        init_d = sy;
        cx = (rx - sx)*o;
        cy = (ry + sy)*o;
    }

    //check if I'am in the left up
    if(checkQuadrant(this,qx-1,qy+1)){
        reset_cy = (ry - sy)*o;
        init_i = 0;
        init_d = sy-sy;
        cx = (rx - sx)*o;
        cy = (ry + sy)*o;
    }
    
    for(let i = init_i;i<condition_i;i++){
        for(let d = init_d;d<condition_d;d++){
            /*
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            */
            c.fillStyle = "rgba(0,255,0,0.5)";
            c.fillRect(cx,cy,o,o);
            cy += o;
        }
        cx += o;
        cy = reset_cy;
    }
    
}    
//end text layer
