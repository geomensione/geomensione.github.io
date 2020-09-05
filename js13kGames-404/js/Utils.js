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
    this.splash = true;
    this.stringToPrint = "M.Y.H.E.R.O.<br />Homage to Atari classic H.E.R.O. by Morticcino.<br />Press 's' to start. In game: press 'm' to show map, use arrow keys to move, space for laser. Arrow down for bomb.<br />Discover all pages to finish level in time!"
    if(!localStorage.myheroScore) localStorage.myheroScore = 0;
  }
  increaseScore(points){
    this.score += points;
    localStorage.myheroScore = (this.score>parseInt(localStorage.myheroScore))?this.score:localStorage.myheroScore;
    document.getElementById('score').innerText = this.score;
  }
  laserTemp(points){
    if(this.lazTemp < 100) this.lazTemp++;
    document.getElementById('laserTemperature').innerText = this.lazTemp;
  }
  die(){
    this.lives--;
    document.getElementById('lives').innerText = this.lives;
    if(this.lives == 0){
      this.splash = true;
      this.stringToPrint = 'No other life!<br />Your record is '+localStorage.myheroScore+'<br />Press \'s\' to restart';
    } 
  }
  printScore(){
    document.getElementById('score').innerText = this.score;
  }
  printLaserTemp(){
    document.getElementById('laserTemperature').innerText = this.lazTemp;  
  }
  printLives(){
    document.getElementById('lives').innerText = this.lives;
  }
  printTimer(){
    document.getElementById('timer').innerText = this.timer;
  }
  updateTime(){
    if(!this.splash){
      let min_sec = this.timer.split(':');
      if(parseInt(min_sec[1]) == 0){
        min_sec[1] = '59';
        if((parseInt(min_sec[0])-1) < 0){
          this.splash = true;
          min_sec[1] = '00';
          this.stringToPrint = 'Time ends!<br />Your record is '+localStorage.myheroScore+'<br />Press \'s\' to restart';
        }else{
          min_sec[0] = (parseInt(min_sec[0])-1)+''
        }
      }else{
        min_sec[1] = (parseInt(min_sec[1])-1)+''
      }
      this.timer = min_sec[0] + ':' + min_sec[1];
      this.printTimer();
    }
  }
  startTimer(){
    this.timerInterval = setInterval(()=>{this.updateTime()},1000)
  }
  stopTimer(){
    clearInterval(this.timerInterval);
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
    this.drawGame();

  }
  startGame(){
    this.heroDir = '';
    this.heroFire = false;
    this.idle = true;
    this.score = 0;
    this.lives = 3;
    this.lazTemp = 0;
    this.timer = '02:00';
    this.sg = [];
    this.heroObj = null;
    this.rockObj = new classRock(this);
    this.sg.push(this.rockObj);
    this.g = new Array(this.rockObj.numRoomsX * this.rockObj.numRoomsY);
    this.printScore();
    this.printLaserTemp();
    this.printLives();
    this.printTimer();
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
        //this.idle = false;
        //this.heroObj.dirV = '';
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
      case 83:
          if(this.splash) this.splash = false;
          this.hideString();
          this.startGame();
          this.startTimer();
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
      this.g[this.rockObj.position].push(new classBomb(h,x,y))
      this.bombAdded = true;    
    }
    
  }
  addText(x,y,t){
      this.g[this.rockObj.position].push(new classText(this,x,y,t))
    
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
  printString(){
    document.getElementsByTagName('canvas')[0].style.display = 'none';
    document.getElementById('gamesdata').style.display = 'none';
    document.getElementsByClassName('printString')[0].style.display = 'block';
    document.getElementsByClassName('printString')[0].innerHTML = this.stringToPrint;
  }
  hideString(){
    document.getElementsByTagName('canvas')[0].style.display = 'block';
    document.getElementById('gamesdata').style.display = 'block';
    document.getElementsByClassName('printString')[0].style.display = 'none';
  }
  gameLoop(){
    if(!this.showMap && !this.credits && !this.splash){
      for(let g_i = 0,g_l = this.sg.length;g_i<g_l;g_i++){
        if(!this.sg[g_i].hide) this.sg[g_i].draw();
      }
      for(let g_i = 0,g_l = this.g[this.rockObj.position].length;g_i<g_l;g_i++){
        if(!this.g[this.rockObj.position][g_i].hide) this.g[this.rockObj.position][g_i].draw();
      }
    }else if(this.showMap){
      this.cleanCanvas();
      this.rockObj.drawMap();
    }else if(this.splash){
      this.cleanCanvas();
      this.stopTimer();
      this.printString();
    }
  }
};

export {Utils};
