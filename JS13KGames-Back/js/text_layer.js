t = {};
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
    var me = this;
    return new Promise(function(res,rej){
        let rx = me.rx,
            ry = me.ry;
        for(let i = 0;i<rx;i++){
            me.fb[i] = [];
            for(let d = 0;d<ry;d++){
                //clear all
                me.fb[i][d] = ['00', '00', '00'];
                
                if(i == rx-1 && d == ry-1) res();
            }
        }
        me.sc = qx+' '+qy+', '+sx+' '+sy;
        drawText(me);
    })
}

t.d_fn = function(){
    let rx = this.rx,
        ry = this.ry,
        o = this.o,
        cx = 0, 
        cy = 0,
        me = this;
    return new Promise(function(res,rej){
        for(let i = 0;i<rx;i++){
            for(let d = 0;d<ry;d++){
                if(me.fb[i][d][0] !== '00'){
                    c.fillStyle = "#"+me.fb[i][d][0]+me.fb[i][d][1]+me.fb[i][d][2];
                    c.fillRect(cx,cy,o,o);
                }
                cy += o;
                
                if(i == rx-1 && d == ry-1) res();
            }
            cx += o;
            cy = 0;
        }
    })
}    
//end text layer
