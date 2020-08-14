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
             }
             up(){
              this.dirV = 'u';
              this.pos.y -= this.velocity;
             }
             right(){
              this.dir = 'r';
              this.pos.x += this.velocity;
             }
             down(){
              this.dirV = 'd';
              this.pos.y += this.velocity;
             }
             //move(b){
             // this.moving = b;
             //}
             hit(){
              var find = false;
              let dimy = this.asset[this.frame].length;
              let dimx = this.asset[this.frame][0].length;
               for(let t = 0,g_l = this.g.g.length;t<g_l;t++){
                 if(this.g.g[t].name && this.g.g[t].name == 'tile'){
                  /*
                  //https://stackoverflow.com/questions/2752349/fast-rectangle-to-rectangle-intersection
                  let a = {l:this.pos.x,r:(this.pos.x + (dimx*this.g.tileWidth)),u:this.pos.y,d:(this.pos.y+ (dimy*this.g.tileHeight))}
                  let b = {l:this.g.g[t].pos.x,r:this.g.g[t].pos.x + this.g.rockWidth,u:this.g.g[t].pos.y,d:this.g.g[t].pos.y + this.g.rockHeight}
                  if(!find) find = !(a.l > b.r || a.r < b.l || a.u > b.d || a.d < b.u);
                  */
                  //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
                  var rect1 = {x: this.pos.x, y: this.pos.y, width: dimx*this.g.tileWidth, height: dimy*this.g.tileHeight}
                  var rect2 = {x: this.g.g[t].pos.x, y: this.g.g[t].pos.y, width: this.g.rockWidth, height: this.g.rockHeight}

                  if (rect1.x < rect2.x + rect2.width &&
                     rect1.x + rect1.width > rect2.x &&
                     rect1.y < rect2.y + rect2.height &&
                     rect1.y + rect1.height > rect2.y) {
                      find = true;
                  }
                  
                 }
               }
              return find;
             }
             draw(){
               (this.dirV == 'u')?((this.frame+1)>this.nFrames-1)?this.frame=0:this.frame++:this.frame=0;
               let b = '#000000';
               let w = '#FFFFFF';
               
               if(!this.g.idle){
                if(!this.hit()){
                 
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
                
                
               }
               }else{
                 if(!this.hit()){
                  //gravity
                  //this.moving = true; 
                  this.down();
                 }
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
