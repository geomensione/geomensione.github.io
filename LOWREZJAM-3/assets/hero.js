 import {classLaser} from './laser.js';
 var classHero = class{
             constructor(g,xp,yp){
               this.g = g;
               this.asset = [[[1,1,1,1,1,1,1,0],
                      [0,0,0,1,0,0,0,0],
                      [0,0,0,1,0,1,1,0],
                      [0,0,0,1,1,1,0,0],
                      [0,0,0,1,1,1,1,0],
                      [0,0,0,1,0,1,0,0],
                      [0,0,0,1,1,1,1,0],
                      [0,0,0,1,0,1,1,0],
                      [0,0,0,1,0,0,1,0],
                      [0,0,0,1,1,1,1,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,1,0]],
                      [[0,1,1,1,1,1,0,0],
                      [0,0,0,1,0,0,0,0],
                      [0,0,0,1,0,1,1,0],
                      [0,0,0,1,1,1,0,0],
                      [0,0,0,1,1,1,1,0],
                      [0,0,0,1,0,1,0,0],
                      [0,0,0,1,1,1,1,0],
                      [0,0,0,1,0,1,1,0],
                      [0,0,0,1,0,0,1,0],
                      [0,0,0,1,1,1,1,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,0,0],
                      [0,0,0,0,1,1,1,0]]];
              this.pos = {x:xp,y:yp};
              this.frame = 0;
              this.nFrames = this.asset.length;
              this.dir = 'r';
              this.velocity = this.g.tileWidth;
              this.name = 'hero';
              this.laser = new classLaser(this);
              //this.moving = false;
             } 
             left(){
              this.dir = 'l';
              if(!this.hit(this.pos.x - this.velocity,this.pos.y)) this.pos.x -= this.velocity;
             }
             up(){
              this.dirV = 'u';
              if(!this.hit(this.pos.x,this.pos.y - this.velocity)) this.pos.y -= this.velocity;
             }
             right(){
              this.dir = 'r';
              if(!this.hit(this.pos.x + this.velocity,this.pos.y)) this.pos.x += this.velocity;
             }
             down(){
              this.dirV = 'd';
              if(!this.hit(this.pos.x,this.pos.y + this.velocity)) this.pos.y += this.velocity;
             }
             fire(){
              this.laser.fire();
             }
             getBBox(){
                return {x: this.pos.x, y: this.pos.y, width: ((this.asset[this.frame][0].length)*this.g.tileWidth), height:((this.asset[this.frame].length)*this.g.tileHeight)} 
             }
             //move(b){
             // this.moving = b;
             //}
             hit(posx,posy){
              var me = this;
              var find = false;
              for(let t = 0,g_l = me.g.g.length;t<g_l;t++){
                var rect1 = me.getBBox();
                rect1.x=posx;
                rect1.y=posy;
                if(me.g.g[t].getBBox && me.g.g[t].name.indexOf('hero') == -1){
                 var rect2 = me.g.g[t].getBBox();
                //if(me.g.g[t].name && me.g.g[t].name == 'tile'){
                //  rect2 = {x: me.g.g[t].pos.x, y: me.g.g[t].pos.y, width: me.g.rockWidth, height: me.g.rockHeight}
                // }else  if(me.g.g[t].name && me.g.g[t].name == 'wall'){
                //    rect2 = {x: me.g.g[t].pos.x + (me.g.rockWidth/2) - (me.g.g[t].wallWidth/2), y: me.g.g[t].pos.y, width: me.g.rockWidth/2, height: me.g.rockHeight}
                // }   
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y)
                      find = true;
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
             }
             draw(){
               (this.dirV == 'u')?((this.frame+1)>this.nFrames-1)?this.frame=0:this.frame++:this.frame=0;
               
               let w = '#FFFFFF';
               
               if(!this.g.idle){
                 
                if(!this.dirV){
                 switch(this.dir) {
                 //case 'f':
                 //  this.heroFire = true;
                 //  this.fire();
                 //  break;
                 //left
                 case 'l':
                   this.left.call(this);
                   break;
                 //right
                 case 'r':
                   this.right.call(this);
                   break;
                 }
                }else{
                  switch(this.dirV) {
                 case 'u':
                   this.up.call(this);
                   break;
                 //down
                 case 'd':
                   this.down.call(this);
                   break;
                 }
                }
                if(this.fireLaser) this.fire()
               }else{
                 this.down.call(this);              
               }
               
               let dimx = this.asset[this.frame].length;
               let dimy = this.asset[this.frame][0].length;
               let yPos = this.pos.y;
               this.g.cx.fillStyle=w;
               if(this.dir == 'r'){
                let xPos = this.pos.x;
                for(let tx = 0;tx<dimx;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    if(this.asset[this.frame][tx][ty] == 1)this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    xPos += this.g.tileWidth;
                  }
                  yPos += this.g.tileHeight;
                  xPos = this.pos.x;
                }
               }else{
                let xPos = this.pos.x;
                for(let tx = 0;tx<dimx;tx++){
                  for(let ty = dimy-1;ty>=0;ty--){
                    if(this.asset[this.frame][tx][ty] == 1)this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    xPos += this.g.tileWidth;
                  }
                  yPos += this.g.tileHeight;
                  xPos = this.pos.x;
                }
               }
             }
           };

export { classHero };
