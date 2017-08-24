//start background layer
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
//offset
b.sp = 2;
//start point when move background
b.mx = 0;
b.my = 0;
b.update_quadrant = true;
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
    for(let i = this.mx,l = 0;l<rx;l++){
        for(let d = this.my,ll=0;ll<ry;ll++){
            if(this.fb[i][d][0] !== '00'){
                c.fillStyle = "#"+this.fb[i][d][0]+this.fb[i][d][1]+this.fb[i][d][2];
                c.fillRect(cx,cy,o,o);
            }
            if((d+1)<ry)
                d += 1;
            else
                d = 0;
            cy += o;
        }
        if((i+1)<rx)
            i += 1;
        else
            i = 0;
        cx += o;
        cy = 0;
    }
}
//end background layer
