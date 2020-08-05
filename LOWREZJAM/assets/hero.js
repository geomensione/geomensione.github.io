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
              this.velocity = 3;
             } 
             draw(){
               ((this.frame+1)>this.nFrames-1)?this.frame=0:this.frame++;
               let b = '#000000';
               let w = '#FFFFFF';
               let xPos = this.pos.x;
               let yPos = this.pos.y;
               this.g.cx.fillStyle = '#000000';
               let dimx = this.asset[this.frame].length;
               let dimy = this.asset[this.frame][0].length;
               for(let tx = 0;tx<dimx;tx++){
                 for(let ty = 0;ty<dimy;ty++){
                   (this.asset[this.frame][tx][ty] == 1)?this.g.cx.fillStyle=w:this.g.cx.fillStyle=b;
                   this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                   xPos += this.g.tileWidth;
                 }
                 yPos += this.g.tileHeight;
                 xPos = 0;
                 //(hero[tx][hero[tx].length-1] == 1)?this.cx.fillStyle=w:this.cx.fillStyle=b;
               }
             }
             left(){
              this.dir = 'l';
              this.pos.x -= this.velocity;
             }
             up(){
              this.pos.y -= this.velocity;
             }
             right(){
              this.dir = 'r';
              this.pos.x += this.velocity;
             }
             down(){
              this.pos.y += this.velocity;
             }
            
            };

export { classHero };
