var classBat = class{
             constructor(h,x,y){
               this.h = h;
               this.name = 'bat';
               this.asset = [1,0,0,0,1,0,1,0,1,0,0,0,1,0,0];
               this.spriteWidth = 5;
               this.spriteHeight =  this.asset.length/this.spriteWidth;
               this.xPos = x;
               this.yPos = y;
               this.cirPoints = [];
               this.frame = 0;
               this.nFrames = 10;
               this.radius = 30;
               this.circumferencePoints();
             } 
             circumferencePoints(){
              for(let a = 0;a<1;){
                let x = this.xPos + Math.cos(a)*this.radius;
                let y = this.yPos + Math.sin(a)*this.radius;
                a += 1/this.nFrames;
                this.cirPoints.push({xp:x,yp:y})
              }
             }
             getBBox(){               
               return {x:this.xPos,y:this.yPos,width:this.spriteWidth*this.h.g.tileWidth,height:this.spriteHeight*this.h.g.tileWidth}
             }
             hit(){
              var find = false;
              var rect1 = this.getBBox();
               
              for(let t = 0,g_l = this.h.g[this.h.rockObj.position].length;t<g_l;t++){
                
                if(this.h.g[this.h.rockObj.position][t].getBBox && !this.h.g[this.h.rockObj.position][t].hide && this.h.g[this.h.rockObj.position][t].name.indexOf('snake') != -1){
                 var rect2 = this.h.g[this.h.rockObj.position][t].getBBox();
                 
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){
                      find = true;
                      this.h.g[this.h.rock.position][t].hide = true;
                      this.h.g.increaseScore(50);
                 }
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
             }
             draw(){
               let v = '#ff00ff';
               this.h.cx.fillStyle=v;
               let dimy = this.asset.length;
               let yPos = this.cirPoints[this.frame].yp;
               let xPos = this.cirPoints[this.frame].xp;
                for(let ty = 0;ty<dimy;ty++){
                  if(this.asset[ty] == 1)this.h.cx.fillRect(xPos,yPos,this.h.tileWidth,this.h.tileHeight)
                  if((ty+1)%this.spriteWidth == 0){
                    yPos += this.h.tileHeight;
                    xPos = this.cirPoints[this.frame].xp;
                  }else{
                    xPos += this.h.tileWidth;
                  }
                }
                

               
               this.hit();
               this.frame = (this.frame+1)>this.nFrames?0:this.frame+1;
           }
}
export { classBat };
