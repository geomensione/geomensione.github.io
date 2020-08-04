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
  }
  setResolution(x,y){
    this.tileWidth = Math.round(this.c.width / x);
    this.tileHeight = Math.round(this.c.height / y);
  }
  drawTest(){
    let b = 'black';
    let w = 'white';
    let xPos = 0;
    let yPos = 0;
    this.cx.fillStyle = 'black';
    for(let tx = 0;tx<this.resX;tx++){
      for(let ty = 0;ty<this.resY;ty++){
        (this.cx.fillStyle == b)?this.cx.fillColor=w:this.cx.fillColor=b;
        this.cx.fillRect(xPos,yPos,this.tileWidth,this.tileHeight)
        xPos += this.tileWidth;
      }
      yPos += this.tileHeight;
      xPos = 0;
      (this.cx.fillColor == b)?this.cx.fillColor=w:this.cx.fillColor=b;
    }
  }
};
