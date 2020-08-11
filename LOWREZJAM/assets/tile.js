var classTile = class{
             constructor(g,px,py){
               this.g = g;
               this.pos = {x:px,y:py};
             } 
             draw(){
               let y = '#FFFF00';
               this.g.cx.fillStyle=y;
               this.g.cx.fillRect(this.pos.x,this.pos.y,this.g.rockWidth,this.g.rockHeight)
             }
           };

export { classRock };
