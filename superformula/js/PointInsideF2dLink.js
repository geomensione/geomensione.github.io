function isInLink(point, vs) {
    
    var x = point[0], y = point[1];
    
    inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};

//data structure for links between f2d: if clicled, all the body moves
  function f2dLink(){
    var points = [];
    function hit(x,y){
      //console.log(`${x} in ${this.maxX - this.offsetX - this.oldoffsetX} e ${this.minX - this.offsetX - this.oldoffsetX}, ${y} in ${this.maxY - this.offsetY - this.oldoffsetY} e ${this.minY - this.offsetY - this.oldoffsetY}`)
      if(x<=(this.maxX - this.offsetX - this.oldoffsetX) && x>=(this.minX - this.offsetX - this.oldoffsetX) && y<=(this.maxY - this.offsetY - this.oldoffsetY) && y>=(this.minY - this.offsetY - this.oldoffsetY))
        this.select = true;
      else
        this.select = false;
      return this.select;
    }
    
    function up(x,y,ref){        
    }
    
    function move(x,y){
    }

    function down(x,y){         
    }
  
  }
