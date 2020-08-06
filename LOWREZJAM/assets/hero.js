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
