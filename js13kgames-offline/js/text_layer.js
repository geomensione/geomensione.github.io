//start text layer
t.w = window.innerWidth;
t.h = window.innerHeight;
//resolution
t.r = 36;
//sprite dimension
t.s = 5;
//score
t.sc = '';


t.fb_fn = function(txt){
    this.fb = [];
    let rx = this.rx,
        ry = this.ry;
    for(let i = 0;i<rx;i++){
        this.fb[i] = [];
        for(let d = 0;d<ry;d++){
            //clear all
            this.fb[i][d] = ['00', '00', '00'];
        }
        if(txt){
            this.sc = txt;
        }else{
            this.sc = window.score.toString();
			if(g.difficulty !== 'w')
				this.sc += ` ${window.dir}`
			this.sc += `-${t.countDown}`;
            
            
        }
            
        u.drawText(this);
    }
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
t.countDown = 60;
t.startSeconds = 60;
t.setTime = () => {
	if((t.countDown-1)>0){
        t.countDown--;
        t.fb_fn();
    }else{
        
        t.countDown = 60;
        window.score = 0;
        u.clearTimer();
		splash(['TIME-IS-FINISHED','PRESS-S TO-RESTART']);
    }
		
}
//end text layer
