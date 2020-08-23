var classText = class{
             constructor(h,x,y,t){
               this.h = h;
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
              if((ts - this.TScreated)>this.timer) this.hide = true;
              this.h.cx.fillStyle="#FFFFFF";
              this.h.cx.fillText(this.str,this.hposx,this.hposy)

             }
           };

export { classText };
