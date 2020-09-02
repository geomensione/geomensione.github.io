import {classRock} from '../assets/rock.js';
import {classBomb} from '../assets/bomb.js';
import {classText} from '../assets/text.js';
var Utils = class{
  constructor(){
    this.c = {};
    this.cx = {};
    this.tileWidth = 0;
    this.tileHeight = 0;
    this.resX = 0;
    this.resY = 0;
    this.heroDir = '';
    this.heroFire = false;
    this.idle = true;
    this.score = 0
  }
  increaseScore(points){
    this.score += points;
    document.getElementById('score').innerText = this.score;
  }
  init3dCanvas(){

  }
  init2DCanvas(rx,ry,square = true){
    //this.c = document.createElement('canvas');
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
    this.c = document.getElementsByTagName('canvas')[0];
    if(this.c.length > 0){
      this.c = this.c[0];
      this.get2DContext();
    }
    this.init2DCanvas(resx,resy)
    
    this.setResolution(resx,resy,rockSizeX,rockSizeY)
    this.setHandlerEvents();
    this.cx.font = "bold 50px sans-serif";
    
    this.sg = [];
    this.rockObj = new classRock(this);
    this.sg.push(this.rockObj);
    this.g = new Array(this.rockObj.numRoomsX * this.rockObj.numRoomsY);
    //this.heroObj = new classHero(this);
    //this.g.push(this.heroObj);
    this.drawGame();
  }
  setResolution(x,y,rx,ry){
    this.tileWidth = Math.floor(this.c.width / x);
    this.tileHeight = Math.floor(this.c.height / y);
    this.c.width = this.tileWidth * x;
    this.c.height = this.tileHeight * y;
    this.rockWidth = Math.floor(this.c.width / rx);
    this.rockHeight = Math.floor(this.c.height / ry);
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
    switch(event.keyCode) {
      //space
      case 32:
        this.idle = false;
        this.heroObj.dirV = '';
        this.heroObj.fireLaser = true;
        break;
      //left
      case 37:
        this.idle = false;
        this.heroObj.dir = 'l';
        this.heroObj.dirV = '';
        //this.heroObj.move(true);
        break;
      //up
      case 38:
        this.idle = false;
        this.heroObj.dirV = 'u';
        //this.heroObj.move(true);
        break;
      //right
      case 39:
        this.idle = false;
        this.heroObj.dir = 'r';
        this.heroObj.dirV = '';
        //this.heroObj.move(true);
        break;
      //down
      case 40:
        this.idle = false;
        this.heroObj.dirV = 'd';
        //this.heroObj.move(true);
        break;
      //m
      case 77:
        //this.heroObj.move(true);
        this.showMap = true;
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
     this.heroObj.fireLaser = false;
     this.heroObj.dirV = '';
     this.bombAdded = false;  
     this.showMap = false;
     //this.heroObj.move(false);
  }
  addBomb(h,x,y){
    if(!this.bombAdded){
      this.g.push(new classBomb(h,x,y))
      this.bombAdded = true;    
    }
    
  }
  addText(x,y,t){
      this.g.push(new classText(this,x,y,t))
    
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
    if(!this.showMap){
      for(let g_i = 0,g_l = this.sg.length;g_i<g_l;g_i++){
        if(!this.sg[g_i].hide) this.sg[g_i].draw();
      }
      for(let g_i = 0,g_l = this.g[this.rockObj.position ].length;g_i<g_l;g_i++){
        if(!this.g[this.rockObj.position ][g_i].hide) this.g[this.rockObj.position ][g_i].draw();
      }
    }else if(this.showMap){
      this.cleanCanvas();
      this.rockObj.drawMap();
    }//else...score,splash,credits,...
    
  }
};

export {Utils};
