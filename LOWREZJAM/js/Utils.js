import {classHero} from '../assets/hero.js';
var Utils = class{
  Utils(){
    this.c = {};
    this.cx = {};
    this.tileWidth = 0;
    this.tileHeight = 0;
    this.resX = 0;
    this.resY = 0;
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
    this.g.push(new classHero(this));
    this.drawGame();
  }
  setResolution(x,y){
    this.tileWidth = Math.round(this.c.width / x);
    this.tileHeight = Math.round(this.c.height / y);
  }
  setHandlerEvents(){
    document.addEventListener('keydown',event => {
      this.keysHandler(event)
    })
  }
  keysHandler(event){ 
    switch(event.keyCode) {
      //space
      case 32:
        break;
      //left
      case 37:
        break;
      //up
      case 38:
        break;
      //right
      case 39:
        break;
      //down
      case 40:
        break;
    }
  }
  drawGame(){
    var me = this;
    setInterval(function(){
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
