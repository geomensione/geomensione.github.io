bo = {};
//start bottom layer
bo.w = window.innerWidth;
bo.h = window.innerHeight;
//resolution
bo.r = 96;
//sprite dimension
bo.s = 1;
//fill fb only one time
bo.do = 0;
//number of stars
bo.sts = 50;
//offset
bo.sp = 1;
//start point when move background
bo.mx = 0;
bo.my = 0;
bo.fb_fn = function(){
    var me = this;
    return new Promise(function(res,rej){
        if(!me.do){
            me.do = 1;

            me.fb = [];
            let rx = me.rx,
                ry = me.ry;
            for(let i = 0;i<rx;i++){
                me.fb[i] = [];
                for(let d = 0;d<ry;d++){
                    //clear all
                    me.fb[i][d] = ['00', '00', '00'];
                }
            }
            //every time is a different stars landscape
            for(let s = 0;s<me.sts;s++){
                let x = Math.floor(Math.random() * (me.rx-me.s));
                let y = Math.floor(Math.random() * (me.ry-me.s));
                me.fb[x][y] = ['11','00','AA'];
                if(s == me.sts-1) res()
            }
        }
        else
        {
            res();
        }
    })
    
}

bo.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        x_l = rx,
        y_l = ry,
        me = this;
    return new Promise(function(res,rej){
        for(let i = me.mx,l = 0;l<rx;l++){
            for(let d = me.my,ll=0;ll<ry;ll++){
                if(me.fb[i][d][0] !== '00'){
                    c.fillStyle = "#"+me.fb[i][d][0]+me.fb[i][d][1]+me.fb[i][d][2];
                    c.fillRect(cx,cy,o,o);
                }
                if((d+1)<ry)
                    d += 1;
                else
                    d = 0;
                cy += o;
                if(l == rx-1 && ll == ry-1) res()
            }
            if((i+1)<rx)
                i += 1;
            else
                i = 0;
            cx += o;
            cy = 0;
        }
    })
}    
//end bottom layer
