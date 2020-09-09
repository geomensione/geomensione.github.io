var classPage = class{
             constructor(h,x,y){
               this.h = h;
               this.name = 'page';
               this.asset = [1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1];
               this.fly = 0;
               this.spriteWidth = 6;
               this.spriteHeight =  this.asset.length/this.spriteWidth;
               this.xPos = x;
               this.yPos = y;
               this.cirPoints = [];
               this.frame = 0;
               this.nFrames = 30;
               this.radius = 20;
               this.circleRange = 360;
               this.circumferencePoints();
             } 
             circumferencePoints(){
              var centerX=this.xPos;//Utils.random(r/2,gC.width-r);
              var centerY=this.yPos;//Utils.random(r/2,gC.height/2);
              var radius=this.radius;
        
              // an array to save your points
              var points=[];
              let v;
              for(var degree=0;degree<this.circleRange;){
                var radians = degree * Math.PI/180;
                var x = centerX + radius * Math.cos(radians);
                var y = centerY + radius * Math.sin(radians);
                points.push({xp:x,yp:y});
                degree+=this.circleRange/this.nFrames;

                
              }
              this.cirPoints = points;
              /*
              for(let a = 0;a<this.circleRange;){
                a = a*Math.PI*2;
                let x = this.xPos + Math.cos(a)*this.radius;
                let y = this.yPos + Math.sin(a)*this.radius;
                a += this.circleRange/this.nFrames;
                this.cirPoints.push({xp:x,yp:y})
              }
              */
             }
             getBBox(){               
               return {x:this.xPos,y:this.yPos,width:this.spriteWidth*this.h.tileWidth,height:this.spriteHeight*this.h.tileWidth}
             }
             hit(){
              var find = false;
              var rect1 = this.getBBox();
               
              for(let t = 0,g_l = this.h.g[this.h.rockObj.position].length;t<g_l;t++){
                
                if(this.h.g[this.h.rockObj.position][t].getBBox && !this.h.g[this.h.rockObj.position][t].hide && this.h.g[this.h.rockObj.position][t].name.indexOf('hero') != -1){
                 var rect2 = this.h.g[this.h.rockObj.position][t].getBBox();
                 
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){
                      find = true;
                      this.h.g[this.h.rock.position][t].hide = true;
                      this.h.g.findPage();
                 }
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
             }
             draw(){
               let v = '#ff7777';
               let b = '#000000';
               this.h.cx.fillStyle=v;
               let dimy = this.asset.length;
               this.yPos = this.cirPoints[this.frame].yp;
               this.xPos = this.cirPoints[this.frame].xp;
               let rect1 = this.getBBox();
               /*this.h.cx.beginPath();
               this.h.cx.lineWidth = "1"
               this.h.cx.strokeStyle = "red";
               this.h.cx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
               this.h.cx.stroke();*/
                for(let ty = 0;ty<dimy;ty++){
                  if(this.asset[ty] == 1)this.h.cx.fillRect(this.xPos,this.yPos,this.h.tileWidth,this.h.tileHeight)
                  if((ty+1)%this.spriteWidth == 0){
                    this.yPos += this.h.tileHeight;
                    this.xPos = this.cirPoints[this.frame].xp;
                  }else{
                    this.xPos += this.h.tileWidth;
                  }
                }
                

               
               this.hit();
               this.frame = (this.frame+1)>=this.nFrames?0:this.frame+1;
               if(this.frame == 0)
                  this.h.cx.fillStyle=b;
               else
                  this.h.cx.fillStyle=v;
               this.fly = (this.fly+1)>=this.asset.length?0:this.fly+1;
           }
}
export { classPage };
