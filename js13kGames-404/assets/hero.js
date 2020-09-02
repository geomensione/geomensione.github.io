 import {classLaser} from './laser.js';
 var classHero = class{
             constructor(g,xp,yp,rock){
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
              this.rock = rock;
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
              else if(!this.g.idle) this.g.addBomb(this,this.pos.x,this.pos.y)
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
              var rect1 = me.getBBox();
              rect1.x=posx;
              rect1.y=posy;
              //this.g.cx.beginPath();
              //this.g.cx.lineWidth = "1"
              //this.g.cx.strokeStyle = "red";
              //this.g.cx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
              //this.g.cx.stroke();
              for(let t = 0,g_l = me.g.g[me.rock.position].length;t<g_l;t++){
                
                if(me.g.g[me.rock.position][t].getBBox && !me.g.g[me.rock.position][t].hide && 'herobombtext'.indexOf(me.g.g[me.rock.position][t].name) == -1){
                 var rect2 = me.g.g[me.rock.position][t].getBBox();
                 this.g.cx.beginPath();
                 this.g.cx.lineWidth = "1"
                 this.g.cx.strokeStyle = "red";
                 this.g.cx.rect(rect2.x, rect2.y, rect2.width, rect2.height);                 
                 this.g.cx.stroke();
                //if(me.g.g[t].name && me.g.g[t].name == 'tile'){
                //  rect2 = {x: me.g.g[t].pos.x, y: me.g.g[t].pos.y, width: me.g.rockWidth, height: me.g.rockHeight}
                // }else  if(me.g.g[t].name && me.g.g[t].name == 'wall'){
                //    rect2 = {x: me.g.g[t].pos.x + (me.g.rockWidth/2) - (me.g.g[t].wallWidth/2), y: me.g.g[t].pos.y, width: me.g.rockWidth/2, height: me.g.rockHeight}
                // }   
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){
                  find = true;
                  if('snake'.indexOf(me.g.g[me.rock.position][t].name) != -1){
                    this.hide = true;
                    this.die();
                  }
                 }
                 
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
             }
             die(){
              let rect1 = this.getBBox();
              //la scritta DIE non si deve sovrapporre con B O O M o altre scritte
              this.g.addText(rect1.x,rect1.y+rect1.height/2-40,"D I E!")

             }
             draw(){
               (this.dirV == 'u')?((this.frame+1)>this.nFrames-1)?this.frame=0:this.frame++:this.frame=0;
               
               let w = '#FFFFFF';
               
               if(!this.g.idle){
                 
                if(!this.dirV && !this.fireLaser){
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
               let refresh = false;
               if(this.pos.y > this.g.c.height){
                this.rock.position += (this.g.rockObj.numRoomsX);
                this.pos.y -= this.g.c.height;
                refresh = true;
               }else if(this.pos.y < 0){
                this.rock.position -= (this.g.rockObj.numRoomsX);
                this.pos.y += this.g.c.height;
                refresh = true;
               }
               if(this.pos.x > this.g.c.width){
                this.rock.position+=1;
                this.pos.x -= this.g.c.width;
                refresh = true;
               }else if(this.pos.x < 0){
                this.rock.position-=1;
                this.pos.x += this.g.c.width;
                refresh = true;
               } 
               if(refresh){
                this.g.g.length = 0;
                this.rock.drawEnv=true;
                return;
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
