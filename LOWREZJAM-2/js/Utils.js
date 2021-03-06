import {classHero} from '../assets/hero.js';
import {classRock} from '../assets/rock.js';
var Utils = class{
  Utils(){
    this.c = {};
    this.cx = {};
    this.tileWidth = 0;
    this.tileHeight = 0;
    this.resX = 0;
    this.resY = 0;
    this.heroDir = '';
    this.heroFire = false;
    this.idle = true;
  }
  init3dCanvas(){

  }
  init2DCanvas(rx,ry,square = true){
    this.c = document.createElement('canvas');
    if(square){ 
      let size = (window.innerWidth>window.innerHeight)?window.innerHeight:window.innerWidth;
      this.c.width = size;
      this.c.height = size;
    }else{
      this.c.width = window.innerWidth;
      this.c.height = window.innerHeight;
    }
    document.body.appendChild(this.c);
    this.get2DContext();
  }
  get2DContext(){
    this.cx = this.c.getContext('2d');
  }
  initLowRezCanvas(resx,resy,rockSizeX,rockSizeY){
    this.resX = resx;
    this.resY = resy;
    this.idle = true;
    this.c = document.getElementsByTagName('canvas');
    if(this.c.length > 0){
      this.c = this.c[0];
      this.get2DContext();
    }else{
      this.init2DCanvas(resx,resy)
    }
    this.setResolution(resx,resy,rockSizeX,rockSizeY)
    this.setHandlerEvents();
    this.g = [];
    this.rockObj = new classRock(this);
    this.g.push(this.rockObj);
    //this.heroObj = new classHero(this);
    //this.g.push(this.heroObj);
    this.drawGame();
  }
  setResolution(x,y,rx,ry){
    this.tileWidth = Math.round(this.c.width / x);
    this.tileHeight = Math.round(this.c.height / y);
    this.rockWidth = Math.round(this.c.width / rx);
    this.rockHeight = Math.round(this.c.height / ry);
  }
  setHandlerEvents(){
    document.addEventListener('keydown',event => {
      this.keyDown(event)
    })
    //document.addEventListener('keypress',event => {
    //  this.keyPress(event)
    //})
    document.addEventListener('keyup',event => {
      this.keyUp(event)
    })
  }
  keyDown(event){ 
    this.idle = false;
    switch(event.keyCode) {
      //space
      case 32:
        this.heroFire = true;
        this.heroObj.fire();
        break;
      //left
      case 37:
        this.heroObj.dir = 'l';
        this.heroObj.dirV = '';
        //this.heroObj.move(true);
        break;
      //up
      case 38:
        this.heroObj.dirV = 'u';
        //this.heroObj.move(true);
        break;
      //right
      case 39:
        this.heroObj.dir = 'r';
        this.heroObj.dirV = '';
        //this.heroObj.move(true);
        break;
      //down
      case 40:
        this.heroObj.dirV = 'd';
        //this.heroObj.move(true);
        break;
    }
  }
  /*
  keyPress(e){
    if(this.heroFire) this.heroObj.fire();
    if(this.heroDir){
      switch(this.heroDir){
        case 'l':
          this.heroObj.left();
          break;
        case 'u':
          this.heroObj.up();
          break;
        //right
        case 'r':
          this.heroObj.right();
          break;
        //down
        case 'd':
          this.heroObj.down();
          break;
      }
    }

  }
  */
  keyUp(e){
     this.idle = true;
     this.heroFire = false;
     this.heroObj.dirV = '';
     //this.heroObj.move(false);
  }
  cleanCanvas(){
     this.cx.fillStyle='black';
     this.cx.fillRect(0,0,this.c.width,this.c.height)
  }
  drawGame(){
    var me = this;
    setInterval(function(){
      me.cleanCanvas()
      me.gameLoop();
    },30)   
  }
  gameLoop(){
    for(let g_i = 0,g_l = this.g.length;g_i<g_l;g_i++){
      this.g[g_i].draw();
    }
  }
};

export {Utils};
