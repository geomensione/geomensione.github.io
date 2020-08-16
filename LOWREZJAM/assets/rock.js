import { classTile } from './tile.js' 
import { classHero } from './hero.js' 
import { classWall } from './wall.js' 

var classRock = class{
             constructor(g){
               this.g = g;
               //1-tile,2-hero,3-wall
               this.screen = [[1,1,1,1],
                              [2,0,3,3],
                              [1,0,3,3],
                              [1,1,1,1]];
              this.pos = {x:0,y:0};
              this.drawEnv = true;
             } 
             draw(){
               if(this.drawEnv){
                 let b = '#000000';
                 let y = '#FFFF00';

                 let dimx = this.screen.length;
                 let dimy = this.screen[0].length;
                 let yPos = this.pos.y;
                 let xPos = this.pos.x;
                 for(let tx = 0;tx<dimx;tx++){
                    for(let ty = 0;ty<dimy;ty++){
                      if(this.screen[tx][ty] == 1){
                         this.g.g.push(new classTile(this.g,xPos,yPos))
                      }else if(this.screen[tx][ty] == 2){
                        this.g.heroObj = new classHero(this.g,xPos,yPos)
                        this.g.g.push(this.g.heroObj)
                      }else if(this.screen[tx][ty] == 3){
                        this.g.g.push(new classWall(this.g,xPos,yPos))
                      }
                      xPos += this.g.rockWidth;
                    }
                    yPos += this.g.rockHeight;
                    xPos = this.pos.x;
                  }

                  this.drawEnv = false;
                }
              }
};

export { classRock };
