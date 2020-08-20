import { classTile } from './tile.js' 
import { classHero } from './hero.js' 
import { classWall } from './wall.js' 
import { classSnake } from './snake.js' 

var classRock = class{
             constructor(g){
               this.g = g;
               //1-tile,2-hero,3-wall,4-snake on left,5-snake on right
               this.screen = [[1,1,1,1],
                              [2,0,3,0],
                              [1,4,1,5],
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
                      switch(this.screen[tx][ty]){
                        case 1:
                             this.g.g.push(new classTile(this.g,xPos,yPos))
                             break
                        case  2:
                            this.g.heroObj = new classHero(this.g,xPos,yPos)
                            this.g.g.push(this.g.heroObj)
                            break
                        case 3:
                            this.g.g.push(new classWall(this.g,xPos,yPos))
                            break
                        case 4:
                            this.g.g.push(new classSnake(this.g,xPos,yPos,'l'))
                            break
                        case 5:
                            this.g.g.push(new classSnake(this.g,xPos,yPos,'r'))
                            break
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
