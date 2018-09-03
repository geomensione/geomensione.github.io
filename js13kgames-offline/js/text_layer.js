//start text layer
t.w = window.innerWidth;
t.h = window.innerHeight;
//resolution
t.r = 36;
//sprite dimension
t.s = 5;
//score
t.sc = '';
t.fb_fn = function(){
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
    this.sc = `${window.score} ${window.dir}`;
    u.drawText(this);
}

t.d_fn = function(){
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
