var classTile = class{
             constructor(g,px,py){
               this.g = g;
               this.pos = {x:px,y:py};
               this.name = 'tile';
             } 
             getBBox(){
               return {x:this.pos.x,y:this.pos.y,width:this.g.rockWidth,height:this.g.rockHeight}
             }
             draw(){
               let y = '#FFFF00';
               this.g.cx.fillStyle=y;
               this.g.cx.fillRect(this.pos.x,this.pos.y,this.g.rockWidth,this.g.rockHeight)
             }
           };

export { classTile };
