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
              this.velocity = 6;
              //this.moving = false;
             } 
             left(){
              this.dir = 'l';
              this.pos.x -= this.velocity;
              this.hit().then((b)=>{if(b) this.pos.x += this.velocity;})
             }
             up(){
              this.dirV = 'u';
              this.pos.y -= this.velocity;
              this.hit().then((b)=>{if(b) this.pos.y += this.velocity;})
             }
             right(){
              this.dir = 'r';
              this.pos.x += this.velocity;
              this.hit().then((b)=>{if(b) this.pos.x -= this.velocity;})
             }
             down(){
              this.dirV = 'd';
              this.pos.y += this.velocity;
              this.hit().then((b)=>{
               if(b) 
                this.pos.y -= this.velocity;
              })
             }
             //move(b){
             // this.moving = b;
             //}
             hit(){
              var me = this;
              return new Promise(function(res,rej){
               var find = false;
              let dimy = me.asset[me.frame].length;
              let dimx = me.asset[me.frame][0].length;
               for(let t = 0,g_l = me.g.g.length;t<g_l;t++){
                 if(me.g.g[t].name && me.g.g[t].name == 'tile'){
                  //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
                  var rect1 = {x: me.pos.x, y: me.pos.y, width: dimx*me.g.tileWidth, height:dimy*me.g.tileHeight}//check collision with larger bbox
                  var rect2 = {x: me.g.g[t].pos.x, y: me.g.g[t].pos.y, width: me.g.rockWidth, height: me.g.rockHeight}
                  
                  if (rect1.x < rect2.x + rect2.width &&
                     rect1.x + rect1.width > rect2.x &&
                     rect1.y < rect2.y + rect2.height &&
                     rect1.y + rect1.height > rect2.y) {
                      find = true;
                  }
                  
                 }
               }
               return res(find);
              })
              
             }
             draw(){
               (this.dirV == 'u')?((this.frame+1)>this.nFrames-1)?this.frame=0:this.frame++:this.frame=0;
               let b = '#000000';
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
                   this.left();
                   break;
                 //right
                 case 'r':
                   this.right();
                   break;
                 }
                }else{
                  switch(this.dirV) {
                 case 'u':
                   this.up();
                   break;
                 //down
                 case 'd':
                   this.down();
                   break;
                 }
                }
               }else{
                 this.down();              
               }
               
               let dimx = this.asset[this.frame].length;
               let dimy = this.asset[this.frame][0].length;
               let yPos = this.pos.y;
               if(this.dir == 'r'){
                let xPos = this.pos.x;
                for(let tx = 0;tx<dimx;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.asset[this.frame][tx][ty] == 1)?this.g.cx.fillStyle=w:this.g.cx.fillStyle=b;
                    this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    xPos += this.g.tileWidth;
                  }
                  yPos += this.g.tileHeight;
                  xPos = this.pos.x;
                }
               }else{
                let xPos = this.pos.x;
                for(let tx = 0;tx<dimx;tx++){
                  for(let ty = dimy-1;ty>=0;ty--){
                    (this.asset[this.frame][tx][ty] == 1)?this.g.cx.fillStyle=w:this.g.cx.fillStyle=b;
                    this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    xPos += this.g.tileWidth;
                  }
                  yPos += this.g.tileHeight;
                  xPos = this.pos.x;
                }
               }
             }
           };

export { classHero };
