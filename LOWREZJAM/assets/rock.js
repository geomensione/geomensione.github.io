 var classRock = class{
             constructor(g){
               this.g = g;
               this.screen = [[1,1,1,1],
                      [0,0,0,0],
                      [0,0,0,0],
                      [1,1,1,1]];
              this.pos = {x:0,y:0};
             } 
             draw(){
               let b = '#000000';
               let w = '#FFFFFF';
               
               let dimx = this.asset.length;
               let dimy = this.asset[0].length;
               let yPos = this.pos.y;
                let xPos = this.pos.x;
                for(let tx = 0;tx<dimx;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.asset[this.frame][tx][ty] == 1)?this.g.cx.fillStyle=w:this.g.cx.fillStyle=b;
                    this.g.cx.fillRect(xPos,yPos,this.g.rockWidth,this.g.rockHeight)
                    xPos += this.g.rockWidth;
                  }
                  yPos += this.g.rockHeight;
                  xPos = this.pos.x;
                }
               
             }
           };

export { classRock };
