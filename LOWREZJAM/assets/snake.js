var classSnake = class{
             constructor(h,posx,posy,dir){
               this.h = h;
               this.name = 'snake';
               this.asset = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
               this.length = 3;
               this.posx = posx;
               this.posy = posy;
               this.dir = dir;
             } 
             draw(){
               let g = '#00ff00';
               let b = '#000000';
               this.h.g.cx.fillStyle=r;
               let dimy = this.asset.length;
               let yPos = this.posy;
               if(this.dir == 'r'){
                let xPos = this.posx;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.asset[ty] == 1)?this.h.g.cx.fillStyle=g:this.h.g.cx.fillStyle=b;
                    this.h.g.cx.fillRect(xPos,yPos,this.h.g.tileWidth,this.h.g.tileHeight)
                    yPos += this.h.g.tileHeight;

                  }
                  xPos += this.h.g.tileWidth;
                  yPos = this.h.pos.y;
                }
               }else{
                let xPos = this.h.pos.x + this.g.rockWidth;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.asset[ty] == 1)?this.h.g.cx.fillStyle=r:this.h.g.cx.fillStyle=b;
                    this.h.g.cx.fillRect(xPos,yPos,this.h.g.tileWidth,this.h.g.tileHeight)
                    yPos += this.h.g.tileHeight;
                  }
                  xPos -= this.h.g.tileWidth;
                  yPos = this.h.pos.y;
                }
               }
             }
           };

export { classSnake };
