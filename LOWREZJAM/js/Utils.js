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
    this.get2DCotext();
  }
  get2DContext(){
    this.cx = c.getContext('2d');
  }
  initLowRezCanvas(resx,resy){
    this.resX = resx;
    this.resY = resy;
    this.c = document.getElementsByTagName('canvas');
    if(this.c.length > 0){
      this.c = this.c[0];
      this.get2DCotext();
    }else{
      this.init2DCanvas(resx,resy)
    }
    this.setResolution(resx,resy)
  }
  setResolution(x,y){
    this.tileWidth = this.c.width / x;
    this.tileHeight = this.c.height / y;
  }
  drawTest(){
    let b = '#000000';
    let w = '#ffffff';
    let xPos = 0;
    let yPos = 0;
    this.cx.fillColor = b;
    for(let tx = 0;tx<this.resX;tx++){
      for(let ty = 0;ty<this.resY;ty++){
        this.cx.fillRext(xPos,yPos,this.resX,this.resY)
        xPos += this.tileWidth;
        (this.cx.fillColor == b)?this.cx.fillColor=w:this.cx.fillColor=b;
      }
      yPos += this.tileHeight;
      (this.cx.fillColor == b)?this.cx.fillColor=w:this.cx.fillColor=b;
    }
  }
};
