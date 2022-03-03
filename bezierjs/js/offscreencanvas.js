onmessage = function(evt) {
  var cvs = evt.data.canvas;
  var ctx = cvs.getContext("2d");
  
  reset();
  drawCurves(); //curve non crea una cubic bezier con 4 punti di controllo, ma una curva che passa nei 4 punti dati
	setColor("red");
	drawbbox();
	drawOutline();
	drawStartAndEnd();
  drawSkeleton();
  
  getCanvas() {
    return cvs;
  }

  reset(curve, evt) {
    ctx.reset();  
    if (evt && curve) {
      curve.mouse = { x: evt.offsetX, y: evt.offsetY };
    }
    this.randomIndex = 0;
  }

  setColor(c) {
    ctx.strokeStyle = c;
  }

  noColor(c) {
    ctx.strokeStyle = "transparent";
  }

  setRandomColor() {
    this.randomIndex = (this.randomIndex + 1) % this.randomColors.length;
    var c = this.randomColors[this.randomIndex];
    ctx.strokeStyle = c;
  }

  setRandomFill(a) {
    this.randomIndex = (this.randomIndex + 1) % this.randomColors.length;
    a = typeof a === "undefined" ? 1 : a;
    var c = this.randomColors[this.randomIndex];
    c = c.replace("hsl(", "hsla(").replace(")", "," + a + ")");
    ctx.fillStyle = c;
  }

  setFill(c) {
    ctx.fillStyle = c;
  }

  noFill() {
    ctx.fillStyle = "transparent";
  }

  drawSkeleton(curve, offset, nocoords) {
    curves.forEach( (e) => {
      offset = offset || { x: 0, y: 0 };
		  
      var pts = e.points;
      ctx.strokeStyle = "lightgrey";
      drawLine(pts[0], pts[1], offset);
      if (pts.length === 3) {
        drawLine(pts[1], pts[2], offset);
      } else {
        drawLine(pts[2], pts[3], offset);
      }
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      if (!nocoords) drawPoints(pts, offset);
    })
    
  }
  drawStartAndEnd(curve) {
    curves.forEach( (e) => {
	  var pts = e.points;
      drawCircle(pts[0], e.outlinemin, null, e.showBBoxMin, e.color);
      drawCircle(pts[3], e.outlinemax, null, e.showBBoxMax, e.color);
    })
    
  }
  drawCurves(curve, offset) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    curves.forEach( (e) => {
      ctx.beginPath();
      var p = e.points,
        i;
      ctx.moveTo(p[0].x + ox, p[0].y + oy);
      if (p.length === 3) {
        ctx.quadraticCurveTo(p[1].x + ox, p[1].y + oy, p[2].x + ox, p[2].y + oy);
      }
      if (p.length === 4) {
        ctx.bezierCurveTo(
          p[1].x + ox,
          p[1].y + oy,
          p[2].x + ox,
          p[2].y + oy,
          p[3].x + ox,
          p[3].y + oy
        );
      }
      
      ctx.stroke();
      ctx.closePath();
      //ctx.fill();
      
  
    })
  }

  drawCurve(curve, offset) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.beginPath();
    var p = curve.points,
      i;
    ctx.moveTo(p[0].x + ox, p[0].y + oy);
    if (p.length === 3) {
      ctx.quadraticCurveTo(p[1].x + ox, p[1].y + oy, p[2].x + ox, p[2].y + oy);
    }
    if (p.length === 4) {
      ctx.bezierCurveTo(
        p[1].x + ox,
        p[1].y + oy,
        p[2].x + ox,
        p[2].y + oy,
        p[3].x + ox,
        p[3].y + oy
      );
    }
	  
    ctx.stroke();
    ctx.closePath();
	  //ctx.fill();
    
  }
  
	
  drawFillTentacle(curves, offset, color) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.fillStyle=color;
    ctx.beginPath();
	  let moveDone = false;
    curves.forEach((e)=>{
    	    var p = e.points;
	    
	    if(!moveDone){
	    	ctx.moveTo(p[0].x + ox, p[0].y + oy);
	    	moveDone = true;
	    }
	    
		    
	    
	    
	    if (p.length === 3) {
	      ctx.quadraticCurveTo(p[1].x + ox, p[1].y + oy, p[2].x + ox, p[2].y + oy);
	    }
	    if (p.length === 4) {
	      ctx.bezierCurveTo(
		p[1].x + ox,
		p[1].y + oy,
		p[2].x + ox,
		p[2].y + oy,
		p[3].x + ox,
		p[3].y + oy
	      );
	    }
	    
	    
	    
    })
    //ctx.closePath();
    //ctx.stroke();
    //ctx.fillStyle=curves.color;
    ctx.fill();
    //
	  //ctx.fill();
    
  }
	
  drawLine(p1, p2, offset) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.beginPath();
    ctx.moveTo(p1.x + ox, p1.y + oy);
    ctx.lineTo(p2.x + ox, p2.y + oy);
    ctx.stroke();
  }

  drawPoint(p, offset) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(p.x + ox, p.y + oy, 5, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawPoints(points, offset) {
    offset = offset || { x: 0, y: 0 };
    points.forEach((p) => drawCircle(p, 3, offset));
  }

  drawArc(p, offset) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.beginPath();
    ctx.moveTo(p.x + ox, p.y + oy);
    ctx.arc(p.x + ox, p.y + oy, p.r, p.s, p.e);
    ctx.lineTo(p.x + ox, p.y + oy);
    ctx.fill();
    ctx.stroke();
  }

  drawCircle(p, r, offset, showBBox,color) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.fillStyle = color||'transparent';
    ctx.beginPath();
    ctx.arc(p.x + ox, p.y + oy, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
	  
    if(showBBox) {
	    ctx.rect(p.x-r, p.y-r, r*2, r*2);
	    ctx.stroke();
    }
    

  }

  drawbbox(bbox, offset, showbbx) {
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    curves.forEach( (e) => {
      if (e.showbbx) {
        let bbox = e.bbox();
        ctx.beginPath();
        ctx.moveTo(bbox.x.min + ox, bbox.y.min + oy);
        ctx.lineTo(bbox.x.min + ox, bbox.y.max + oy);
        ctx.lineTo(bbox.x.max + ox, bbox.y.max + oy);
        ctx.lineTo(bbox.x.max + ox, bbox.y.min + oy);
        ctx.closePath();
        ctx.stroke();
      }
    })
  }

  drawHull(hull, offset) {
    ctx.beginPath();
    if (hull.length === 6) {
      ctx.moveTo(hull[0].x, hull[0].y);
      ctx.lineTo(hull[1].x, hull[1].y);
      ctx.lineTo(hull[2].x, hull[2].y);
      ctx.moveTo(hull[3].x, hull[3].y);
      ctx.lineTo(hull[4].x, hull[4].y);
    } else {
      ctx.moveTo(hull[0].x, hull[0].y);
      ctx.lineTo(hull[1].x, hull[1].y);
      ctx.lineTo(hull[2].x, hull[2].y);
      ctx.lineTo(hull[3].x, hull[3].y);
      ctx.moveTo(hull[4].x, hull[4].y);
      ctx.lineTo(hull[5].x, hull[5].y);
      ctx.lineTo(hull[6].x, hull[6].y);
      ctx.moveTo(hull[7].x, hull[7].y);
      ctx.lineTo(hull[8].x, hull[8].y);
    }
    ctx.stroke();
  }

  drawShape(shape, offset) {
    offset = offset || { x: 0, y: 0 };
    var order = shape.forward.points.length - 1;
    var scl = shape.startcap.points.length;
    var ecl = shape.endcap.points.length;

    ctx.beginPath();
    ctx.moveTo(
      offset.x + shape.startcap.points[0].x,
      offset.y + shape.startcap.points[0].y
    );
    ctx.lineTo(
      offset.x + shape.startcap.points[scl - 1].x,
      offset.y + shape.startcap.points[scl - 1].y
    );
    if (order === 3) {
      ctx.bezierCurveTo(
        offset.x + shape.forward.points[1].x,
        offset.y + shape.forward.points[1].y,
        offset.x + shape.forward.points[2].x,
        offset.y + shape.forward.points[2].y,
        offset.x + shape.forward.points[3].x,
        offset.y + shape.forward.points[3].y
      );
    } else {
      ctx.quadraticCurveTo(
        offset.x + shape.forward.points[1].x,
        offset.y + shape.forward.points[1].y,
        offset.x + shape.forward.points[2].x,
        offset.y + shape.forward.points[2].y
      );
    }
    ctx.lineTo(
      offset.x + shape.endcap.points[ecl - 1].x,
      offset.y + shape.endcap.points[ecl - 1].y
    );
    if (order === 3) {
      ctx.bezierCurveTo(
        offset.x + shape.back.points[1].x,
        offset.y + shape.back.points[1].y,
        offset.x + shape.back.points[2].x,
        offset.y + shape.back.points[2].y,
        offset.x + shape.back.points[3].x,
        offset.y + shape.back.points[3].y
      );
    } else {
      ctx.quadraticCurveTo(
        offset.x + shape.back.points[1].x,
        offset.y + shape.back.points[1].y,
        offset.x + shape.back.points[2].x,
        offset.y + shape.back.points[2].y
      );
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  drawText(text, offset) {
    offset = offset || { x: 0, y: 0 };
    ctx.fillText(text, offset.x, offset.y);
  }
    
  drawOutline(){
    curves.forEach( (e) => {
      var outline = e.outline(e.outlinemin, e.outlinemin, e.outlinemax, e.outlinemax);
      //outline.curves.forEach((c) => this.drawCurve(c));
      drawFillTentacle(outline.curves,null,e.color)
      
    })
  }
	
  drawFrame(offset){
	  let bkpWidth = ctx.lineWidth;
	  let bkmStrokeStyle = ctx.strokeStyle;
	  ctx.lineWidth = 5;
	  ctx.strokeStyle = 'black';
		ctx.rect(offset,offset,window.innerWidth-offset*2,window.innerHeight-offset*2)
	  ctx.stroke();
	  ctx.lineWidth = bkpWidth;
	  ctx.strokeStyle = bkmStrokeStyle;
  }



};

