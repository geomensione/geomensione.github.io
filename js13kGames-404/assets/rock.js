import { classTile } from './tile.js' 
import { classHero } from './hero.js' 
import { classWall } from './wall.js' 
import { classSnake } from './snake.js'
import { Maze } from './maze.js' 

var classRock = class{
             constructor(g){
               this.g = g;
               //1-tile,2-hero,3-wall,4-snake on left,5-snake on right
               let m = new Maze(20,20,30);
               this.screen = m.draw();
              this.pos = {x:0,y:0};
              this.drawEnv = true;
              this.position = 0;
              this.screenSize = 3;
             } 
             draw(){
               if(this.drawEnv){
                 let b = '#000000';
                 let y = '#FFFF00';

                 let dimx = this.screen[this.position].length;
                 let dimy = this.screen[this.position][0].length;
                 let yPos = this.pos.y;
                 let xPos = this.pos.x;
                 for(let tx = 0;tx<dimx;tx++){
                  switch(this.screen[this.position][tx]){
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
                    
                    if((tx+1)%this.screenSize == 0){
                      yPos += this.g.rockHeight;
                      xPos = this.pos.x;
                    }else{
                      xPos += this.g.rockWidth;
                    }
                 }
                 if(!this.g.heroObj){
                  this.g.heroObj = new classHero(this.g,this.g.rockWidth,this.g.rockHeight)
                  this.g.g.push(this.g.heroObj)
                 } 

                 this.drawEnv = false;
                }
              }
            
};

export { classRock };
