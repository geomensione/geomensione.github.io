var classLaser = class{
             constructor(h){
               this.h = h;
               this.name = 'laser';
               this.asset = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
               this.length = 3;
             } 
             getBBox(){
               let xPos = 0;
               if(this.h.dir == 'r') xPos = this.h.pos.x + (this.h.asset[0][0].length*this.h.g.tileWidth);
               else xPos = this.h.pos.x - this.h.g.tileWidth;
               
               return {x:xPos,y:this.h.pos.y+(3*this.h.g.tileWidth),width:this.length*this.h.g.tileWidth,height:this.h.g.tileHeight}
             }
             hit(){
              var find = false;
              var rect1 = this.getBBox();
               this.h.g.cx.beginPath();
               this.h.g.cx.lineWidth = "1"
               this.h.g.cx.strokeStyle = "blue";
               this.h.g.cx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
               this.h.g.cx.stroke();
              for(let t = 0,g_l = this.h.g.g.length;t<g_l;t++){
                
                if(this.h.g.g[t].getBBox && !this.h.g.g[t].hide && this.h.g.g[t].name.indexOf('snake') != -1){
                 var rect2 = this.h.g.g[t].getBBox();
                 
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){
                      find = true;
                      this.h.g.g[t].hide = true;
                      this.h.g.increaseScore(50);
                 }
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
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
               this.hit();
             }
           };

export { classLaser };
