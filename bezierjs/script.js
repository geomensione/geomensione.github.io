import * as bezierJs from "./js/bezier.js";


const { Bezier } = bezierJs;

class CodeExample {
  constructor(c) {
    var cvs = (this.cvs = c);
    this.ctx = cvs.getContext("2d");


    this.randomColors = [];
    for (var i = 0, j; i < 360; i++) {
      j = (i * 47) % 360;
      this.randomColors.push("hsl(" + j + ",50%,50%)");
    }
    this.randomIndex = 0;
  }

  getCanvas() {
    return this.cvs;
  }

  reset(curve, evt) {
    this.cvs.width = this.cvs.width;
    this.ctx.strokeStyle = "black";
    this.ctx.fillStyle = "none";
    if (evt && curve) {
      curve.mouse = { x: evt.offsetX, y: evt.offsetY };
    }
    this.randomIndex = 0;
  }

  setColor(c) {
    this.ctx.strokeStyle = c;
  }

  noColor(c) {
    this.ctx.strokeStyle = "transparent";
  }

  setRandomColor() {
    this.randomIndex = (this.randomIndex + 1) % this.randomColors.length;
    var c = this.randomColors[this.randomIndex];
    this.ctx.strokeStyle = c;
  }

  setRandomFill(a) {
    this.randomIndex = (this.randomIndex + 1) % this.randomColors.length;
    a = typeof a === "undefined" ? 1 : a;
    var c = this.randomColors[this.randomIndex];
    c = c.replace("hsl(", "hsla(").replace(")", "," + a + ")");
    this.ctx.fillStyle = c;
  }

  setFill(c) {
    this.ctx.fillStyle = c;
  }

  noFill() {
    this.ctx.fillStyle = "transparent";
  }

  drawSkeleton(curve, offset, nocoords) {
    curves.forEach( (e) => {
      offset = offset || { x: 0, y: 0 };
		  
      var pts = e.points;
      this.ctx.strokeStyle = "lightgrey";
      this.drawLine(pts[0], pts[1], offset);
      if (pts.length === 3) {
        this.drawLine(pts[1], pts[2], offset);
      } else {
        this.drawLine(pts[2], pts[3], offset);
      }
      this.ctx.strokeStyle = "black";
      if (!nocoords) this.drawPoints(pts, offset);
    })
    
  }
  drawStartAndEnd(curve) {
    curves.forEach( (e) => {
	  var pts = e.points;
      this.drawCircle(pts[0], e.outlinemin, null, e.showBBoxMin);
      this.drawCircle(pts[3], e.outlinemax, null, e.showBBoxMax);
    })
    
  }
  drawCurves(curve, offset) {
    const ctx = this.ctx;
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
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      
  
    })
  }

  drawCurve(curve, offset) {
    const ctx = this.ctx;
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
	  ctx.closePath();
    ctx.stroke();
	  ctx.fill();
    
  }
                   
  drawLine(p1, p2, offset) {
    const ctx = this.ctx;
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.beginPath();
    ctx.moveTo(p1.x + ox, p1.y + oy);
    ctx.lineTo(p2.x + ox, p2.y + oy);
    ctx.stroke();
  }

  drawPoint(p, offset) {
    const ctx = this.ctx;
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.beginPath();
    ctx.arc(p.x + ox, p.y + oy, 5, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawPoints(points, offset) {
    offset = offset || { x: 0, y: 0 };
    points.forEach((p) => this.drawCircle(p, 3, offset));
  }

  drawArc(p, offset) {
    const ctx = this.ctx;
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

  drawCircle(p, r, offset, showBBox) {
    const ctx = this.ctx;
    offset = offset || { x: 0, y: 0 };
    var ox = offset.x;
    var oy = offset.y;
    ctx.beginPath();
    ctx.arc(p.x + ox, p.y + oy, r, 0, 2 * Math.PI);
    if(showBBox) ctx.rect(p.x-r, p.y-r, r*2, r*2);
    ctx.stroke();

  }

  drawbbox(bbox, offset, showbbx) {
    const ctx = this.ctx;
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
    const ctx = this.ctx;
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
    const ctx = this.ctx;
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
    this.ctx.fillText(text, offset.x, offset.y);
  }
    
  drawOutline(){
    curves.forEach( (e) => {
      var outline = e.outline(e.outlinemin, e.outlinemin, e.outlinemax, e.outlinemax);
      outline.curves.forEach((c) => this.drawCurve(c));
    })
  }
}
//start handler interaction
function handleInteraction(cvs, curve) {
  

  var fix = function (e) {
    return e;
  };

  
  var pointToMove;
						 
							  
  var moving = false,
    movingcurve = false,
    mx = 0,
    my = 0,
    ox = 0,
    oy = 0,
    cx,
    cy,
    mp = false,
    lastX,lastY;

  var handler = { onupdate: function () {} };

  cvs.addEventListener("mousedown", function (evt) {
    fix(evt);
    mx = evt.offsetX;
    my = evt.offsetY;
    curves.forEach( (e) => {
      var lpts = e.points;
      lpts.forEach(function (p) {
        if (Math.abs(mx - p.x) < 10 && Math.abs(my - p.y) < 10) {
          moving = true;
          mp = p;
          cx = p.x;
          cy = p.y;
        }
      });
      if (e.showbbx) {
        e.movingcurve = true;
        //pointToMove = [...lpts] ...pointToMove chamge
        pointToMove = JSON.parse(JSON.stringify(lpts))
      } else {
        e.movingcurve = false;
      }
      
    })
    
  });

  cvs.addEventListener("mousemove", function (evt) {
    fix(evt);
    lastX = evt.offsetX;
    lastY = evt.offsetY; 
    var found = false;
    curves.forEach( (e) => {
      e.showBBoxMax = false;
      e.showBBoxMin = false;
      var lpts = e.points;
      let indexPoint = 0;
      lpts.forEach(function (p) {
        var mx = evt.offsetX;
        var my = evt.offsetY;
        
        if (Math.abs(mx - p.x) < 10 && Math.abs(my - p.y) < 10) {
          found = found || true;
        }
        if (indexPoint == 0){
          if (Math.abs(mx - p.x) < 10 && Math.abs(my - p.y) < 10) {
            e.showBBoxMin = true;
          }
        }else if(indexPoint == 3){
          if (Math.abs(mx - p.x) < e.outlinemax && Math.abs(my - p.y) < e.outlinemax) {
            e.showBBoxMax = true;
          }
        }
        indexPoint++;
        
      });
      cvs.style.cursor = found ? "pointer" : "default";
      var bbx = e.bbox();
      if (
        bbx.x.min <= evt.offsetX &&
        evt.offsetX <= bbx.x.max &&
        bbx.y.min <= evt.offsetY &&
        evt.offsetY <= bbx.y.max
      )
        e.showbbx = true;
      else e.showbbx = false;
      ox = evt.offsetX - mx;
      oy = evt.offsetY - my;

      if (!moving && !e.movingcurve) {
        return handler.onupdate(evt);
      }

      if (moving) {
        mp.x = cx + ox;
        mp.y = cy + oy;
      }

      if (!mp && e.showbbx) {
        for(let i = 0;i<lpts.length;i++){
          lpts[i].x = pointToMove[i].x + ox;
          lpts[i].y = pointToMove[i].y + oy;
        }
      } 
      e.update();
      handler.onupdate();
    })
  });

  cvs.addEventListener("mouseup", function (evt) {
    moving = false;
    mp = false;
    curves.forEach( (e) => {
      e.movingcurve = false;
    })
  });

  cvs.addEventListener("click", function (evt) {
    fix(evt);
    var mx = evt.offsetX;
    var my = evt.offsetY;
  });

  
  return handler;
}
//end handler interaction
var curves = [];
var canvas = document.createElement("canvas");
document.body.append(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ce = new CodeExample(canvas);


var draw = function () {
	this.drawSkeleton();
	this.drawCurves(); //curve non crea una cubic bezier con 4 punti di controllo, ma una curva che passa nei 4 punti dati
	this.setColor("red");

	this.drawStartAndEnd();
	this.drawbbox();
	this.drawOutline();
};
ce.draw = draw.bind(ce);

handleInteraction(ce.getCanvas()).onupdate = (evt) => {
	ce.reset();
	ce.draw(evt);
};

document.addEventListener("keydown", function (evt) {
	let aggiornare = false;
	if (evt.defaultPrevented) {
		return; // Should do nothing if the default action has been cancelled
	}

	var handled = false;
	if (evt.key !== undefined) {
		switch(evt.key){
			case '-':
			  curves.forEach((e)=>{
			    if(e.showBBoxMin)e.outlinemin--
			    if(e.showBBoxMax)e.outlinemax--
			    aggiornare = true;
			  })
			  break;
			case '+':
			  curves.forEach((e)=>{
			    if(e.showBBoxMin)e.outlinemin++
			    if(e.showBBoxMax)e.outlinemax++
			    aggiornare = true;
			  })
			  break;
			case 'c':
			  addBezier(canvas,102, 33, 16, 99, 101, 129, 132, 173);
			  break;

		}
	}

	if (handled) {
		// Suppress "double action" if event handled
		evt.preventDefault();
	}
	if(aggiornare){
		ce.reset();
		ce.draw();
	}

});



function addBezier(canvas,x1,y1,x2,y2,x3,y3,x4,y4){
  
  curves.push(new Bezier(x1,y1,x2,y2,x3,y3,x4,y4));
  curves[curves.length-1].showbbx = false;
  curves[curves.length-1].mouse = false;
  curves[curves.length-1].outlinemin = 1;
  curves[curves.length-1].outlinemax = 25;
  
  ce.draw();

}

addBezier(canvas,102, 33, 16, 99, 101, 129, 132, 173);
addBezier(canvas,152, 83, 66, 149, 151, 179, 182, 223);
