import { utils } from "./utils.js";

const c = new Bezier(150,40 , 80,30 , 105,150);
var draw = function() {
  this.drawSkeleton(curve);
  this.drawCurve(curve);
  this.setColor("red");
  var outline = c.outline(5,5,25,25);
  outline.curves.forEach(c => this.drawCurve(c));
}

draw();
