 var classHero = class{
             constructor(g){
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
              this.pos = {x:0,y:0};
              this.frame = 0;
              this.nFrames = this.asset.length;
              this.dir = 'r';
              this.velocity = 6;
              this.moving = false;
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
             move(b){
              this.moving = b;
             }
             hit(){
               return false;
             }
             draw(){
               (this.dirV == 'u')?((this.frame+1)>this.nFrames-1)?this.frame=0:this.frame++:this.frame=0;
               let b = '#000000';
               let w = '#FFFFFF';
               if(this.moving){
                if(!this.dirV){
                 switch(this.dir) {
                 case 'f':
                   this.heroFire = true;
                   this.fire();
                   break;
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
                 if(!this.hit()){
                  //gravity
                  this.moving = true; 
                  this.dirV = 'd';
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
