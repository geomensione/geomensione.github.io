var Utils = class{
  Utils(){
    this.c = {};
    this.cx = {};
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
  }
  get2DContext(){
    this.cx = c.getContext('2d');
  }
  initLowRezCanvas(resx,resy){
    this.c = document.getElementsByTagName('canvas');
    if(this.c.length > 0){
      this.c = this.c[0];
      this.get2DCotext();
    }else{
      this.init2DCanvas(resx,resy)
    }
  }
};
