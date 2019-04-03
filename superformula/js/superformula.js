class superformulaobj(){
    
   constructor(){
   	var a,b,m,n1,n2,n3;
	    var points = [];
	    var moveX = 200;
	    var moveY = 200;
	    var lineWidth = 1;
	    var color = '#000';
	    var selected_color = '#F00';
	    var numberOfPoints = 45;
	    var minX = 0, maxX = 0, minY = 0, maxY = 0;
	    var select = false;
	    var name;
	    var offsetX = 0,offsetY = 0, oldoffsetX = 0, oldoffsetY = 0;
	    var oldCoordX, oldCoordY;
	    var f2d_links = [];
	    this.scale = 1;

   }
    
    function hit(x,y){
      //console.log(`${x} in ${this.maxX - this.offsetX - this.oldoffsetX} e ${this.minX - this.offsetX - this.oldoffsetX}, ${y} in ${this.maxY - this.offsetY - this.oldoffsetY} e ${this.minY - this.offsetY - this.oldoffsetY}`)
      if(x<=(this.maxX - this.offsetX - this.oldoffsetX) && x>=(this.minX - this.offsetX - this.oldoffsetX) && y<=(this.maxY - this.offsetY - this.oldoffsetY) && y>=(this.minY - this.offsetY - this.oldoffsetY))
        this.select = true;
      else
        this.select = false;
      return this.select;
    }
    
    function up(x,y,ref){  
      if(isFinite(ref))
        this.shapeindex = ref;
    }
    
    function move(x,y,diff){
      if(!isFinite(this.oldCoordX) && !isFinite(this.oldCoordY)){
        this.oldCoordX = this.moveX;
        this.oldCoordY = this.moveY;
      }
      if(diff){
        this.offsetX = x;
        this.offsetY = y;
      }else{
        this.offsetX = this.oldCoordX - x;
        this.offsetY = this.oldCoordY - y;
      }
              
    }
    
    function wheel(s){
        if(this.select){
          if(s>0){
            this.a++;
            this.b++;
          }else{
            if((this.a - 1) > 0 && (this.b - 1) > 0){
                this.a--;
                this.b--;
            }
            
          }
          this.renderFormula(this.m,this.n1,this.n2,this.n3,this.a,this.b)
        }
    }
    
    function down(x,y){
      if(!isFinite(this.oldCoordX) && !isFinite(this.oldCoordY)){
        this.oldCoordX = x;
        this.oldCoordY = y;
      }
         
    }
    
    function setAB(v){
      this.a = v;
      this.b = v;
      this.renderFormula(this.m,this.n1,this.n2,this.n3,this.a,this.b)
    }
    
    function superformula(phi,a,b,m,n1,n2,n3) {
      return Math.pow( Math.pow( Math.abs( Math.cos(m * phi / 4) / a ), n2 ) + Math.pow( Math.abs( Math.sin(m * phi / 4) / b ), n3 ), -1 / n1 );
    }
    
    function getName(){
      return this.name;
    }
    
    function setName(str){
      this.name = str;
    }
    
    function setName(str){
      this.name = str;
    }
    
    
    function getCenterAndRadius(){
      let MX = this.maxX - this.offsetX - this.oldoffsetX;
      let mx = this.minX - this.offsetX - this.oldoffsetX;
      let MY = this.maxY - this.offsetY - this.oldoffsetY;
      let my = this.minY - this.offsetY - this.oldoffsetY;
      let c_r = (MX-mx)/2;
      let c_x = mx + (c_r);
      let c_y = my + ((MY-my)/2);
      return {x:c_x,y:c_y,r:c_r};
    }
    
    function close(i){
      this.shapeindex = i;
    }
    
    function drawFormula(m,n1,n2,n3,a,b) {
     
      //context.beginPath();
      var points_length = this.points.length;
      let str_path = '';
      if(!isFinite(this.offsetX) && !isFinite(this.oldoffsetX) && !isFinite(this.offsetY) && !isFinite(this.oldoffsetY)){
        this.offsetX = 0;
        this.oldoffsetX = 0;
        this.offsetY = 0;
        this.oldoffsetY = 0;      
      }
      //creare una struttura dati che contiene informazioni sui lati del link, se c'è curva o no, memorizzare i punti della curva se si estende per più segmenti
      for (let index = 0; index < numberOfPoints; index++) {
        var x,y;
        //points[index]._x += offsetX;
        x = this.points[index]._x - this.offsetX - this.oldoffsetX;
        //points[index]._y += offsetY;
        y = this.points[index]._y - this.offsetY - this.oldoffsetY;
        if(!isFinite(x) && !isFinite(y)){
		x = 0;
		y = 0;
	}
	  if (index === 0) {
	    //context.moveTo(x,y);
	    str_path += 'M'+x+' '+y+' ';
	  } else {
	    //context.lineTo(x,y);
	    str_path += 'L'+x+' '+y+' ';
	  }
        
      }
      //context.closePath();
      //context.lineWidth = lineWidth;
      str_path += 'Z';
      let stroke_color = '';
      if(this.select){
        rc.rectangle(this.minX - this.offsetX - this.oldoffsetX, this.minY - this.offsetY - this.oldoffsetY, this.maxX - this.minX, this.maxY - this.minY, { stroke: selected_color, strokeWidth: 1 });
        //context.rect(minX - offsetX - oldoffsetX, minY - offsetY - oldoffsetY, maxX - minX, maxY - minY);
        stroke_color = selected_color;
      }else{
        stroke_color = color;
      }
      //context.stroke();
      rc.path(str_path, { stroke: stroke_color,fill: stroke_color, fillStyle: 'zigzag' });
    }
    
    function renderFormula(m,n1,n2,n3,a,b,i,x,y) {
      this.m = m;
      this.n1 = n1;
      this.n2 = n2;
      this.n3 = n3;
      this.a = a;
      this.b = b;
      this.points = [];
      if(isFinite(i))
        this.shapeindex = i;
      if(isFinite(x))
        this.moveX = x;
      if(isFinite(y))
        this.moveY = y;
      
      if(!isFinite(a))
        a = -(-document.getElementById('a').value);
      else
        document.getElementById('a').value = a;
      if(!isFinite(b))
        b = -(-document.getElementById('b').value);
      else
        document.getElementById('b').value = b;
      if(!isFinite(m))
        m = -(-document.getElementById('m').value);
      else
        document.getElementById('m').value = m;
      if(!isFinite(n1))
        n1 = -(-document.getElementById('n1').value);
      else
        document.getElementById('n1').value = n1;
      if(!isFinite(n2))
        n2 = -(-document.getElementById('n2').value);
      else
        document.getElementById('n2').value = n2;
      if(!isFinite(n3))
        n3 = -(-document.getElementById('n3').value);
      else
        document.getElementById('n3').value = n3;
      
      for (let index = 0; index < numberOfPoints; index++) {
        var x,y;
        
        const radius = superformula(index / numberOfPoints * Math.PI * 2,a,b,m,n1,n2,n3);
        x = Math.cos(index / numberOfPoints * Math.PI * 2) * radius + this.moveX;
        y = Math.sin(index / numberOfPoints * Math.PI * 2) * radius + this.moveY;
        
        if(index===0){
          this.minX=x;
          this.maxX=x;
          this.minY=y;
          this.maxY=y;
        }else{
          if(x<this.minX)
            this.minX=x;
          if(x>this.maxX)
            this.maxX=x;
          if(y<this.minY)
            this.minY=y;
          if(y>this.maxY)
            this.maxY=y;
        }
        this.points.push({_x:x,_y:y});
      }
    }
    
    function getRTangents(body){
      if(isFinite(this.shapeindex)){
        let my_json = this.getCenterAndRadius();
        let link_json = scene[body].nodes[this.shapeindex].getCenterAndRadius();
        let tangents = getTangents(link_json.x,link_json.y,link_json.r,my_json.x,my_json.y,my_json.r);
        let new_link = new f2d_Link();
        new_link.setPoints(tangents);
        //new_link.draw();
        scene[body].links.push(new_link);
        
        //rc.line(tangents[0].x, tangents[0].y, tangents[1].x, tangents[1].y);
        //rc.line(tangents[2].x, tangents[2].y, tangents[3].x, tangents[3].y);
      }
      
    }
    return{
      renderFormula: renderFormula,
      drawFormula: drawFormula,
      hit: hit,
      move: move,
      up: up,
      down: down,
      getName: getName,
      setName: setName,
      getCenterAndRadius: getCenterAndRadius,
      getRTangents: getRTangents,
      wheel: wheel,
      close: close,
      setAB: setAB
    }
  }
