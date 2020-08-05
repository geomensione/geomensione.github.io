 var classHero = class{
             var asset = [[1,1,1,1,1,1,1,0],
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
                      [0,0,0,0,1,1,1,0]];
             var pos = {x:0,y:0};
             classHero(g){
               this.g = g;  
             } 
             draw(){
               let b = '#000000';
               let w = '#FFFFFF';
               let xPos = this.pos.x;
               let yPos = this.pos.y;
               g.cx.fillStyle = '#000000';
               let dimx = this.asset.length;
               let dimy = this.asset[0].length;
               for(let tx = 0;tx<dimx;tx++){
                 for(let ty = 0;ty<dimy;ty++){
                   (this.asset[tx][ty] == 1)?g.cx.fillStyle=w:g.cx.fillStyle=b;
                   g.cx.fillRect(xPos,yPos,g.tileWidth,g.tileHeight)
                   xPos += g.tileWidth;
                 }
                 yPos += g.tileHeight;
                 xPos = 0;
                 //(hero[tx][hero[tx].length-1] == 1)?this.cx.fillStyle=w:this.cx.fillStyle=b;
               }
             }
            
            };

export { classHero };
