var classBat = class{
             constructor(h,x,y){
               this.h = h;
               this.name = 'bat';
               this.asset = [1,0,0,0,1,0,1,0,1,0,0,0,1,0,0];
               this.spriteWidth = 5;
               this.xPos = x;
               this.yPos = y;
               this.cirPoints = [];
               this.circumferencePoints();
               this.frame = 0;
               this.nFrames = 10;
             } 
             circumferencePoints(){
              for(let a = 0;a<1;){
                let x = this.xPos + Math.cos(angle)*radius;
                let y = this.yPos + Math.sin(angle)*radius;
                a += 1/this.nFrames;
                this.cirPoints.push({xp:x,yp:y})
              }
             }
             getBBox(){               
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
              for(let t = 0,g_l = this.h.g.g[this.h.rock.position].length;t<g_l;t++){
                
                if(this.h.g.g[this.h.rock.position][t].getBBox && !this.h.g.g[this.h.rock.position][t].hide && this.h.g.g[this.h.rock.position][t].name.indexOf('snake') != -1){
                 var rect2 = this.h.g.g[this.h.rock.position][t].getBBox();
                 
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){
                      find = true;
                      this.h.g.g[this.h.rock.position][t].hide = true;
                      this.h.g.increaseScore(50);
                 }
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
             }
             draw(){
               let v = '#ff00ff';
               this.h.g.cx.fillStyle=v;
               let dimy = this.asset.length;
               let yPos = this.this.cirPoints[this.frame].y;
               let xPos = this.this.cirPoints[this.frame].x;
               this.h.g.cx.fillStyle=r;
                for(let ty = 0;ty<dimy;ty++){
                  if(this.asset[ty] == 1)this.h.g.cx.fillRect(xPos,yPos,this.h.g.tileWidth,this.h.g.tileHeight)
                  if((tx+1)%this.spriteWidth == 0){
                    yPos += this.h.g.tileHeight;
                    yPos += this.this.cirPoints[this.frame].x;
                  }else{
                    yPos += this.h.g.tileWidth;
                  }
                }
                

               
               this.hit();
             
           };

export { classBat };
