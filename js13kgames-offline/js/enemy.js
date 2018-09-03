//start foreground layer
e.w = window.innerWidth;
e.h = window.innerHeight;
//resolution
e.r = 24;
//sprite dimension
e.s = 8;
e.dir = 38;
h.mx = 0;
h.my = 0;
e.fb_fn = function(){
    this.fb = [];
	
	u.setRandomValue(this);
	
	
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
            if(en[this.dir] && en[this.dir][yo] && en[this.dir][yo][xo] && en[this.dir][yo][xo] === 'W')
                this.fb[x+xo][y+yo] = ['FF','00','FF'];
        }
    }
}

e.d_fn = function(){
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
