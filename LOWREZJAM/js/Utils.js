var Utils = {
  c:{},
  cx:{},
  init3dCanvas: function(){

  },
  init2dCanvas: function(rx,ry,square = true){
    this.c = document.createElement('canvas');
    if(square){ 
      let size = (window.innerWidth>window.innerHeight)?window.innerHeight:window.innerWidth;
      this.c.width = size;
      this.c.height = size;
    }else{
      this.c.width = window.innerWidth;
      this.c.height = window.innerHeight;
    }
  },
  get2DContext: function(){
    this.cx = c.getContext('2d');
  }
  initLowRezCanvas: function(resx,resy){
    this.c = document.getElementsByTagName('canvas');
    if(this.c.length > 0) this.get2DCotext();
    else this.init2DCanvas(resx,resy)
  }
};
