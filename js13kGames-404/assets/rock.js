import { classTile } from './tile.js' 
import { classHero } from './hero.js' 
import { classWall } from './wall.js' 
import { classSnake } from './snake.js'
import { classBat } from './bat.js'
import { Maze } from './maze.js' 

var classRock = class{
             constructor(g){
               this.g = g;
               this.numRoomsX = 20;
               this.numRoomsY = 20;
               //1-tile,2-hero,3-wall,4-snake on left,5-snake on right
               let m = new Maze(this.numRoomsX,this.numRoomsY,30);
               this.screen = m.draw();
              this.pos = {x:0,y:0};
              this.drawEnv = true;
              this.position = 0;
              this.screenSize = 5;
             } 
             drawMap(){
              let x = 0, y = 0;
              let roomX = 0, roomY = 0;
              let roomSizeX = Math.floor(this.g.c.width/this.numRoomsX);
              let roomSizeY = Math.floor(this.g.c.height/this.numRoomsY);
              let rockSizeX = Math.floor(roomSizeX/this.screenSize);
              let rockSizeY = Math.floor(roomSizeY/this.screenSize);
              for(let s = 0,s_l = this.screen.length;s<s_l;s++){
                this.g.cx.fillStyle = '#333333';
                let dimx = this.screen[s].length;
                this.g.cx.fillRect(roomX,roomY,roomSizeX,roomSizeY)
                this.g.cx.fillStyle = '#FFFF00';
                for(let tx = 0;tx<dimx;tx++){
                  if(this.screen[s][tx]==1){
                    this.g.cx.fillStyle = '#FFFF00';
                    this.g.cx.fillRect(x,y,rockSizeX,rockSizeY)
                  }else if(this.screen[s][tx]==3){
                    this.g.cx.fillStyle = '#777777';
                    this.g.cx.fillRect(x,y,rockSizeX,rockSizeY)
                  }else if(this.screen[s][tx]==4 || this.screen[s][tx]==5){
                    this.g.cx.fillStyle = '#00ff00';
                    this.g.cx.fillRect(x,y,rockSizeX,rockSizeY)
                  }
                  else if(this.screen[s][tx]==6){
                    this.g.cx.fillStyle = '#00ffff';
                    this.g.cx.fillRect(x,y,rockSizeX,rockSizeY)
                  }
                  
                  if((tx+1)%this.screenSize == 0){
                    y += rockSizeY;
                    x = roomX;
                  }else{
                    x += rockSizeX;
                  }
                }
                if(s == this.position){
                  this.g.cx.fillStyle = '#ffffff';
                  this.g.cx.beginPath();
                  this.g.cx.arc(roomX+roomSizeX/2, roomY+roomSizeY/2, roomSizeX/2, 0, 2 * Math.PI);
                  this.g.cx.fill();
                }
                if((s+1)%this.numRoomsX == 0){
                  roomY += roomSizeY;
                  y = roomY;
                  x = 0;
                  roomX=0;
                }else{
                  roomX += roomSizeX
                  x = roomX;
                  y = roomY;
                }
                
              }
             }
             draw(){
               if(this.drawEnv){
                 let b = '#000000';
                 let y = '#FFFF00';

                 let dimx = this.screen[this.position].length;
                 let dimy = this.screen[this.position][0].length;
                 let yPos = this.pos.y;
                 let xPos = this.pos.x;
                 if(!this.g.g[this.position]){
                   this.g.g[this.position] = [];
                  for(let tx = 0;tx<dimx;tx++){
                  switch(this.screen[this.position][tx]){
                    case 1:
                         this.g.g[this.position].push(new classTile(this.g,xPos,yPos))
                         break
                    case  2:
                        //this.g.heroObj = new classHero(this.g,xPos,yPos,this)
                        //this.g.g[this.position].push(this.g.heroObj)
                        break
                    case 3:
                        this.g.g[this.position].push(new classWall(this.g,xPos,yPos))
                        break
                    case 4:
                        this.g.g[this.position].push(new classSnake(this.g,xPos,yPos,'l'))
                        break
                    case 5:
                        this.g.g[this.position].push(new classSnake(this.g,xPos,yPos,'r'))
                        break
                     case 6:
                        this.g.g[this.position].push(new classBat(this.g,xPos,yPos))
                        break
                    }
                    
                    if((tx+1)%this.screenSize == 0){
                      yPos += this.g.rockHeight;
                      xPos = this.pos.x;
                    }else{
                      xPos += this.g.rockWidth;
                    }
                  }
                 }
                 
                 if(!this.g.heroObj){
                  this.g.heroObj = new classHero(this.g,this.g.rockWidth,this.g.rockHeight,this)
                  this.g.sg.push(this.g.heroObj)
                 } 

                 this.drawEnv = false;
                }
              }
            
};

export { classRock };
