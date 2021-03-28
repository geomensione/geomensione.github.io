var classText = class{
             constructor(g,x,y,t){
               this.g = g;
               this.name = 'text';
               this.hposx = x;
               this.hposy = y;
               this.timer = 2000;//2 seconds
               this.TScreated = Date.now() 
               this.timePassed = 0
               this.str = t;
             } 
             
             draw(){
              let ts = Date.now()
              if((ts - this.TScreated)>this.timer){
                this.hide = true;
                if(this.g.lives>0 && this.g.heroObj.hide) this.g.heroObj.hide = false;
              } 
              this.g.cx.fillStyle="#FFFFFF";
              this.g.cx.fillText(this.str,this.hposx,this.hposy)

             }
           };

export { classText };
