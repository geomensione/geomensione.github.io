var classLaser = class{
             constructor(h){
               this.h = h;
               this.name = 'laser';
               this.asset = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
               this.length = 3;
             } 
             getBBox(){
               return {x:this.h.pos.x + (this.h.asset[0][0].length*this.h.g.tileWidth),y:this.h.pos.y+(3*this.h.g.tileWidth),width:this.length*this.h.g.tileWidth,height:this.h.g.tileHeight}
             }
             fire(){
               let r = '#ff0000';
               this.h.g.cx.fillStyle=r;
               let dimy = this.asset.length;
               let yPos = this.h.pos.y;
               this.h.g.cx.fillStyle=r;
               if(this.h.dir == 'r'){
                let xPos = this.h.pos.x + (this.h.asset[0][0].length*this.h.g.tileWidth);
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    if(this.asset[ty] == 1)this.h.g.cx.fillRect(xPos,yPos,this.h.g.tileWidth,this.h.g.tileHeight)
                    yPos += this.h.g.tileHeight;

                  }
                  xPos += this.h.g.tileWidth;
                  yPos = this.h.pos.y;
                }
               }else{
                let xPos = this.h.pos.x - this.h.g.tileWidth;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    if(this.asset[ty] == 1)this.h.g.cx.fillRect(xPos,yPos,this.h.g.tileWidth,this.h.g.tileHeight)
                    yPos += this.h.g.tileHeight;
                  }
                  xPos -= this.h.g.tileWidth;
                  yPos = this.h.pos.y;
                }
               }
             }
           };

export { classLaser };
