//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 48;
//sprite dimension
h.s = 5;
//score
h.sp = 2;

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

h.hit = function(x,y,width,height,fn){
    var imgd = c.getImageData(x, y, width, height);
    var pix = imgd.data;

    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
        pix[i  ] = 255 - pix[i  ]; // red
        pix[i+1] = 255 - pix[i+1]; // green
        pix[i+2] = 255 - pix[i+2]; // blue
        // i+3 is alpha (the fourth element)
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
    //draw the sprite in fb
    function checkQuadrant(me,x,y){
        return (me.qux === x && me.quy === y);
    }
    
    if(checkQuadrant(this,qx-1,qy) || checkQuadrant(this,qx,qy+1) || checkQuadrant(this,qx-1,qy+1) || checkQuadrant(this,qx,qy)){
        let init_i,init_d,condition_i,condition_d = 0;

        
        init_i = sx;
        init_d = sy;
        condition_i = rx;
        condition_d = ry;
        //wrong <- ->
        if(checkQuadrant(this,qx,qy)){
            condition_i = rx-sx;
            condition_d = ry-sy;
            
  }

        //check if I'am in up quadrant
        //wrong v ^
        if(checkQuadrant(this,qx-1,qy)){
            //condition_i = sx;
            //condition_d = sy;
            //cy = sy -1;
        }

        //check if I'am in the left
        if(checkQuadrant(this,qx,qy+1)){
            init_i = sx-1;
            //init_d = ry+sy-1;
        }

        //check if I'am in the left up
        
        if(checkQuadrant(this,qx-1,qy+1)){
            //init_i = 0;
            //init_d = 0;
            //cx = (rx - sx)*o;
            //cy = (ry + sy)*o;
            //reset_cy = (ry - sy)*o;
            //init_i = 0;
            //init_d = 0;
            //cx = (rx - sx)*o;
            //cy = (ry + sy)*o;
            //reset_cy = (ry - sy)*o;
            
        }
        for(let i = init_i;i<condition_i;i++){
            for(let d = init_d;d<condition_d;d++){
                if(!(this.fb[i] && this.fb[i][d] && this.fb[i][d][0]))
                    console.log('not exist '+i+', '+d);
                if(this.fb[i][d][0] !== '00'){
                    this.hit(cx,cy,1,1,function(){});
                    c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
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
