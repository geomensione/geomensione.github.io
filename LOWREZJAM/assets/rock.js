import { classTile } from './tile.js' 
var classRock = class{
             constructor(g){
               this.g = g;
               this.screen = [[1,1,1,1],
                      [0,0,0,0],
                      [0,0,0,0],
                      [1,1,1,1]];
              this.pos = {x:0,y:0};
              this.draw = true;
             } 
             draw(){
               if(this.draw){
                 let b = '#000000';
                 let y = '#FFFF00';

                 let dimx = this.screen.length;
                 let dimy = this.screen[0].length;
                 let yPos = this.pos.y;
                 let xPos = this.pos.x;
                 for(let tx = 0;tx<dimx;tx++){
                  for(let ty = 0;ty<dimy;ty++){
                    (this.screen[tx][ty] == 1){
                     this.g.g.push(new classTile(this.g,xPos,yPos))
                    xPos += this.g.rockWidth;
                  }
                  yPos += this.g.rockHeight;
                  xPos = this.pos.x;
                 }
               }
             }
          };

export { classRock };
