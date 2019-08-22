g = {};
//start foreground layer
g.w = window.innerWidth;
g.h = window.innerHeight;
//resolution
g.r = 24;
//sprite dimension
g.s = 8;
g.dir = 39;
g.fb_fn = function(){
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
            }
        }
        let x = Math.floor((me.w/2)/me.o-(me.s/2));
        let y = Math.floor((me.h/2)/me.o-(me.s/2));
        for(let xo = 0;xo<me.s;xo++)
        {
            for(let yo = 0;yo<me.s;yo++)
            {
                if(sh[me.dir] && sh[me.dir][yo] && sh[me.dir][yo][xo] && sh[me.dir][yo][xo] === 'W')
                    this.fb[x+xo][y+yo] = ['FF','FF','FF'];
            }
        }
    })
}

g.d_fn = function(){
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
            }
            cx += o;
            cy = 0;
        }
    })
    
}    
//enf foreground layer
