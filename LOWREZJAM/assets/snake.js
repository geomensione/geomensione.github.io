var classSnake = class{
             constructor(g,posx,posy,dir){
               this.g = g;
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
               this.g.cx.fillStyle=g;
               let dimy = this.asset.length;
               let yPos = this.posy;
               if(this.dir == 'r'){
                let xPos = this.posx;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.asset[ty] == 1)?this.g.cx.fillStyle=g:this.g.cx.fillStyle=b;
                    this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    yPos += this.g.tileHeight;

                  }
                  xPos += this.g.tileWidth;
                  yPos = this.posy;
                }
               }else{
                let xPos = this.posx + this.g.rockWidth;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.asset[ty] == 1)?this.g.cx.fillStyle=r:this.g.cx.fillStyle=b;
                    this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    yPos += this.g.tileHeight;
                  }
                  xPos -= this.g.tileWidth;
                  yPos = this.posy;
                }
               }
             }
           };

export { classSnake };
