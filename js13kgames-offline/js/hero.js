//bkp
//start text layer
h.w = window.innerWidth;
h.h = window.innerHeight;
//resolution
h.r = 48;
//sprite dimension
h.s = 5;
//score
h.sp = 2;
h.mx = 0;
h.my = 0;

h.fb_fn = function(){
    this.fb = [];
	
    //if I've grabbed hero,I set position of the new one
    if(this.picked === undefined || this.picked){
        u.setRandomValue(this);
        switch(g.difficulty){
            case 'v':
                t.countDown--;
                break;
            case 'e':
                t.countDown-=2;
                break;
            case 'm':
                t.countDown-=5;
                break;
            case 'h':
                t.countDown-=15;
                break;
            case 'w':
                t.countDown = Math.round(t.countDown/2);
                break;
        }
        if(this.picked)
			this.picked = false;
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
	var hitColor = [255,255,255];
    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
		if(pix[i] === hitColor[0] && pix[i+1] === hitColor[1] && pix[i+2] === hitColor[2]){
            fn();
			u.clear(c,255,255,255);
			break;
		}
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
	var me = this;
    //draw the sprite in fb
    function checkQuadrant(_me,x,y){
        return (_me.qux === x && _me.quy === y);
    }
    window.dir = '';
	if(this.qux<qx)
		window.dir += 'D'
	if(this.qux>qx)
		window.dir += 'U'
	if(this.quy<qy)
		window.dir += 'L'
	if(this.quy>qy)
		window.dir += 'R'
	
    if(checkQuadrant(this,qx-1,qy) || checkQuadrant(this,qx,qy+1) || checkQuadrant(this,qx-1,qy+1) || checkQuadrant(this,qx,qy)){
        let init_i = 0,
			init_d = 0,
			condition_i = 0,
			condition_d = 0,
			si = 0,
			sd = 0;

        init_i = sx;
        init_d = sy;
        condition_i = rx;
        condition_d = ry;
        //wrong <- ->
        if(checkQuadrant(this,qx,qy)){
            //console.log('1');
			//condition_i = rx-sx;
            //condition_d = ry-sy;
            
		}

        //check if I'am in up quadrant
        //wrong v ^
        if(checkQuadrant(this,qx-1,qy)){
            //console.log('2');
			cy = (ry-sy)*o;
			reset_cy = (ry-sy)*o;
			init_d = (ry-sy);
			sd = (ry-sy);
			//condition_i = sx;
            //condition_d = sy;
            //cy = sy -1;
        }

        //check if I'am in the left
        if(checkQuadrant(this,qx,qy+1)){
            //console.log('3');
			cx = (rx-sx)*o;
			//init_i = condition_i;
			init_i = 0;
			
        }

        //check if I'am in the left up
        
        if(checkQuadrant(this,qx-1,qy+1)){
            //console.log('4');
			cy = (ry-sy)*o;
			reset_cy = (ry-sy)*o;
			init_d = (ry-sy);
			sd = (ry-sy);
			cx = (rx-sx)*o;
			init_i = 0;
        }
		let lock = false;
        for(let i = init_i;i<condition_i;i++){
            for(let d = init_d;d<condition_d;d++){
                if(!(this.fb[i-si] && this.fb[i-si][d-sd] && this.fb[i-si][d-sd][0]))
                    console.log('not exist '+i+', '+d);
                if(this.fb[i-si][d-sd][0] !== '00' && !lock){
                    this.hit(cx+(o/2),cy+(o/2),1,1,function(){
						lock = true;
						window.score++;
						me.picked = true;
						h.fb_fn();
						
					});
                    c.fillStyle = "#"+this.fb[i-si][d-sd][0]+this.fb[i-si][d-sd][1]+this.fb[i-si][d-sd][2];
                    c.fillRect(cx,cy,o,o);
                }else{
					if(g.difficulty !== 'w'){
						c.fillStyle = "rgba(0,255,0,0.1)";
						c.fillRect(cx,cy,o,o);
					}
                    
                }
                cy += o;
            }
            cx += o;
            cy = reset_cy;
            
        }
    }
}    
//end text layer
