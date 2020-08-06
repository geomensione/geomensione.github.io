import {classHero} from '../assets/hero.js';
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
  initLowRezCanvas(resx,resy){
    this.resX = resx;
    this.resY = resy;
    this.c = document.getElementsByTagName('canvas');
    if(this.c.length > 0){
      this.c = this.c[0];
      this.get2DContext();
    }else{
      this.init2DCanvas(resx,resy)
    }
    this.setResolution(resx,resy)
    this.setHandlerEvents();
    this.g = [];
    this.heroObj = new classHero(this);
    this.g.push(this.heroObj);
    this.drawGame();
  }
  setResolution(x,y){
    this.tileWidth = Math.round(this.c.width / x);
    this.tileHeight = Math.round(this.c.height / y);
  }
  setHandlerEvents(){
    document.addEventListener('keydown',event => {
      this.keyDown(event)
    })
    document.addEventListener('keypress',event => {
      this.keyPress(event)
    })
    document.addEventListener('keyup',event => {
      this.keyUp(event)
    })
  }
  keyDown(event){ 
    switch(event.keyCode) {
      //space
      case 32:
        this.heroFire = true;
        this.heroObj.fire();
        break;
      //left
      case 37:
        this.heroDir = 'l';
        this.heroObj.left();
        break;
      //up
      case 38:
        this.heroDir = 'u';
        this.heroObj.up();
        break;
      //right
      case 39:
        this.heroDir = 'r';
        this.heroObj.right();
        break;
      //down
      case 40:
        this.heroDir = 'd';
        this.heroObj.down();
        break;
    }
  }
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
  keyUp(e){
     this.heroFire = false
     this.heroDir = '';
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
      this.g[0].draw();
    }
  }
};

export {Utils};
