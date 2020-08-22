var classWall = class{
             constructor(g,px,py){
               this.g = g;
               this.pos = {x:px,y:py};
               this.name = 'wall';
               this.wallWidth = this.g.rockWidth/2;
             } 
              getBBox(){
               return {x:this.pos.x + this.g.rockWidth/2 - this.wallWidth/2,y:this.pos.y,width:this.wallWidth,height:this.g.rockHeight}
             }
             draw(){
               let g = '#777777';
               this.g.cx.fillStyle=g;
               //center wall
               let offsetx = this.pos.x + this.g.rockWidth/2 - this.wallWidth/2;
               this.g.cx.fillRect(offsetx,this.pos.y,this.wallWidth,this.g.rockHeight)
             }
           };

export { classWall };
