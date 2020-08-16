var classWall = class{
             constructor(g,px,py){
               this.g = g;
               this.pos = {x:px,y:py};
               this.name = 'wall';
               this.wallWidth = this.g.rockWidth/2;
             } 
             draw(){
               let g = '#777777';
               this.g.cx.fillStyle=g;
               //center wall
               let offsetx = this.pos.x + this.wallWidth/2 - this.wallWidth/2;
               this.g.cx.fillRect(offsetx,this.pos.y,this.wallWidth,this.g.rockHeight)
             }
           };

export { classWall };
