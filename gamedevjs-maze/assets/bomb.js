var classBomb = class{
             constructor(h,x,y){
               this.h = h;
               this.name = 'bomb';
               this.hposx = x;
               this.hposy = y;
               this.width = 50;
               this.height = 70;
               this.ewidth = 250;
               this.eheight = 300;
               this.timer = 2000;//2 seconds
               this.TScreated = Date.now() 
               this.timePassed = 0
               this.explode = false;
             } 
             getBBox(){
              let xPos = 0;
              let yPos = 0;
               if(this.explode){
                xPos = this.hposx + (this.h.asset[0][0].length*this.h.g.tileWidth)/2 - this.ewidth/2;
                yPos = this.hposy + (this.h.asset[0].length*this.h.g.tileHeight) - this.eheight;
                return {x:xPos,y:yPos,width:this.ewidth,height:this.eheight}
               }else{
                xPos = this.hposx + (this.h.asset[0][0].length*this.h.g.tileWidth)/2 - this.width/2;
                yPos = this.hposy + (this.h.asset[0].length*this.h.g.tileHeight) - this.height;
                return {x:xPos,y:yPos,width:this.width,height:this.height}
               }
             }
             hit(){
              let ts = Date.now()
              if((ts - this.TScreated)>this.timer) this.explode = true;
              var rect1 = this.getBBox();
              var find = false;
               /*
               this.h.g.cx.beginPath();
               this.h.g.cx.lineWidth = "1"
               this.h.g.cx.strokeStyle = "blue";
               this.h.g.cx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
               this.h.g.cx.stroke();
              */
              for(let t = 0,g_l = this.h.g.g[this.h.rock.position].length;t<g_l;t++){
                
                if(this.h.g.g[this.h.rock.position][t].getBBox && !this.h.g.g[this.h.rock.position][t].hide && this.h.g.g[this.h.rock.position][t].name.indexOf('wall') != -1){
                 var rect2 = this.h.g.g[this.h.rock.position][t].getBBox();
                 
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){
                      find = true;
                      this.h.g.g[this.h.rock.position][t].hide = true;
                      this.h.g.increaseScore(50);
                 }
                
                }
                
                if(this.h.getBBox && this.explode){
                 var rect2 = this.h.getBBox();
                 
                 if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y && !this.h.hide){
                      find = true;
                   this.h.hide = true;
                      this.h.die();
                 }
                
                }
                if(t==g_l-1) return find;

                  
               }
               
              
              
             }
             draw(){
               this.hit();
               let r = '#ff0000';
               this.h.g.cx.fillStyle=r;
               let rect1 = this.getBBox()
               let hw = Math.ceil(this.width/2);
               let hh = Math.ceil(this.height/2);
               this.h.g.cx.fillRect(rect1.x,rect1.y,hw,hh)
               this.h.g.cx.fillRect(rect1.x,rect1.y+rect1.height-hh,hw,hh)
               this.h.g.cx.fillRect(rect1.x+rect1.width-hw,rect1.y,hw,hh)
               this.h.g.cx.fillRect(rect1.x+rect1.width-hw,rect1.y+rect1.height-hh,hw,hh)
               if(this.explode){
                this.h.g.addText(rect1.x,rect1.y+rect1.height/2,"B O O M!")
                this.hide = true;
               } 

             }
           };

export { classBomb };
