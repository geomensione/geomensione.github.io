var classTrap1 = class{
             constructor(g,posx,posy,dir){
               this.g = g;
               this.name = 'snake';
               this.asset = [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
               this.minLength = 5;
               this.length = this.minLength;
               this.maxLength = 20;
               this.posx = posx;
               this.posy = posy;
               this.dir = dir;
               this.scale = 'plus';
             } 
             getBBox(){
               let py = this.posy + (4*this.g.tileWidth)
               if(this.dir == 'r') return {x:this.posx,y:py,width:this.length*this.g.tileWidth,height:this.g.tileHeight}
               else return {x:this.posx + this.g.rockWidth - (3*this.g.tileWidth),y:py,width:this.length*this.g.tileWidth,height:this.g.tileHeight}
             }
             draw(){
               let g = '#0000ff';
               this.g.cx.fillStyle=g;
               let dimy = this.asset.length;
               let yPos = this.posy;
               let rect1 = this.getBBox();
               this.g.cx.beginPath();
               this.g.cx.lineWidth = "1"
               this.g.cx.strokeStyle = "yellow";
               this.g.cx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
               this.g.cx.stroke();
               
               this.g.cx.fillStyle=g;
               if(this.dir == 'r'){
                let xPos = this.posx;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    if(this.asset[ty] == 1)this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    yPos += this.g.tileHeight;

                  }
                  xPos += this.g.tileWidth;
                  yPos = this.posy;
                }
               }else{
                let xPos = this.posx + this.g.rockWidth - this.g.tileWidth;
                for(let tx = 0;tx<this.length;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    if(this.asset[ty] == 1)this.g.cx.fillRect(xPos,yPos,this.g.tileWidth,this.g.tileHeight)
                    yPos += this.g.tileHeight;
                  }
                  xPos -= this.g.tileWidth;
                  yPos = this.posy;
                }
               }
               if(this.scale == 'plus')
                if(this.length<this.maxLength)this.length++;
                else this.scale = 'minus'
               else
                if(this.length>this.minLength)this.length--;
                else this.scale = 'plus'
               
             }
           };

export { classTrap1 };
