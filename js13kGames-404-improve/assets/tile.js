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
               /*let y = '#';
               for(let i = 0,s_l=6;i<s_l;i++)y+=(Math.round(Math.random()))?'F':'0'; */
               let y = '#FFFF00';
               this.g.cx.fillStyle=y;
               this.g.cx.fillRect(this.pos.x,this.pos.y,this.g.rockWidth,this.g.rockHeight)
             }
           };

export { classTile };
